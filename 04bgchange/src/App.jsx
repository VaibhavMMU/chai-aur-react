import { useState } from 'react'

function App() {
  const colors = [
    'red',
    'green',
    'blue',
    'olive',
    'grey',
    'yellow',
    'pink',
    'purple',
    'lavender',
    'white',
    'black'
  ];
  const [color, setColor] = useState("#4c0519");
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <h1 className='text-white'>Please Click any color for change backgroundColor</h1>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white rounded-xl py-2 px-3'>
          <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor: "red"}}>Red</button>
          <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor: "green"}}>Green</button>
          <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick={() => setColor("olive")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor: "olive"}}>Olive</button>
          <button onClick={() => setColor("grey")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor: "grey"}}>Gray</button>
          <button onClick={() => setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg ' style={{backgroundColor: "yellow"}}>Yellow</button>
          <button onClick={() => setColor("pink")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg ' style={{backgroundColor: "pink"}}>Pink</button>
          <button onClick={() => setColor("purple")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor: "purple"}}>Purple</button>
          <button onClick={() => setColor("lavender")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg ' style={{backgroundColor: "lavender"}}>Lavender</button>
          <button onClick={() => setColor("orange")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg ' style={{backgroundColor: "orange"}}>Orange</button>
          <button onClick={() => setColor("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor: "black"}}>black</button>
        </div>
      </div>
    </div>
  )
}

export default App
