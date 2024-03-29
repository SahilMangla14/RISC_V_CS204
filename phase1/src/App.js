import { useState } from 'react';
import './App.css';
import CppComponent from './CppComponent';
import jsonData from './backend/out.json';

var i = 0;
var count = Object.keys(jsonData).length;

function App() {
  const [Current, setCurrent] = useState(0);
  const [reglist, setReg] = useState([])
  const [memlist, setMem] = useState([])
  const nextClick = () => {
    setReg([]);
    setMem([]);
    if(Current < count) {
      setCurrent(Current+1);
    }
  }
  const prevClick = () => {
    setReg([]);
    setMem([]);
    if(Current > 0) {
      setCurrent(Current-1);
    }
  }
  const reset = () => {
    setReg([]);
    setMem([]);
    setCurrent(0);
  }
  const run = () => {
    setReg([]);
    setMem([]);
    setCurrent(count-1);
  }

  for(let j = 0; j < 32; j+=2) {
    reglist.push(
      <div class="flex flex-wrap mb-3">
        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            X{j}
          </label>
          <div class="appearance-none block w-full bg-gray-200 text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"> {jsonData[Current].Reg[j]} </div>
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            X{j+1}
          </label>
          <div class="appearance-none block w-full bg-gray-200 text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"> {jsonData[Current].Reg[j+1]} </div>
        </div>
      </div>
    )
  }

  for(let x in jsonData[Current].Data) {
    memlist.push(
      <div class="flex flex-wrap mb-3">
      <div class="appearance-none w-full md:w-1/5 bg-gray-200 text-black border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"> {x} </div>
      <div class="appearance-none w-1/4 md:w-1/5 bg-gray-200 text-black border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"> {jsonData[Current].Data[x][0]} </div>
      <div class="appearance-none w-1/4 md:w-1/5 bg-gray-200 text-black border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"> {jsonData[Current].Data[x][1]} </div>
      <div class="appearance-none w-1/4 md:w-1/5 bg-gray-200 text-black border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"> {jsonData[Current].Data[x][2]} </div>
      <div class="appearance-none w-1/4 md:w-1/5 bg-gray-200 text-black border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"> {jsonData[Current].Data[x][3]} </div>
      </div>
    )
  }

  return (
    <>
    <div className="App">
      <CppComponent />
      <div class="w-full h-full m-6 content-center">
        <button onClick={run} class="bg-transparent mx-1 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Run
        </button>
        <button onClick={nextClick} class="bg-transparent mx-1 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Next
        </button>
        <button onClick={prevClick} class="bg-transparent mx-1 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Prev
        </button>
        <button onClick={reset} class="bg-transparent mx-1 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Reset
        </button>
        <div class="flex items-start">
        <form class="w-1/2 mt-4 inline-block">
          {reglist}
        </form>
        <div class="flex flex-wrap w-1/2 mt-4">
          <div class="w-full md:w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-3" for="grid-first-name">
              PC
            </label>
            <div class="appearance-none block w-full bg-gray-200 text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"> {jsonData[Current].PC} </div>
          </div>
          <div class="w-full md:w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              Instruction
            </label>
            <div class="appearance-none block w-full bg-gray-200 text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"> {jsonData[Current].Message} </div>
          </div>
          <div class="w-full md:w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              Memory
            </label>
            {memlist}
          </div>
        </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
