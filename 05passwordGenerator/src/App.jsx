import { useCallback, useEffect, useRef, useState } from 'react'

function App() {

  // useState for initialize default value and also when change value it is render page and update values. 
  const [length, setLength] = useState(8)
  const [numberAllow, setNumberAllow] = useState(false)
  const [characterAllow, setCharacterAllow] = useState(false)
  const [password, setPassword] = useState()

  //useRef hook
  const passwordRef = useRef(null)

  // Password Generator Logic
  const passwordGenerator = useCallback(() => {
    let pass= ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllow) str+= "0123456789"
    if(characterAllow) str+= "~`!@#$%^&*-_=+(){}[]"
    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass);
  }, [length, numberAllow, characterAllow, setPassword])

  // useCallback for copy text in clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  // useEffect for calling any function for diffrent value changes
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllow, characterAllow, passwordGenerator])

  // Passwordgenerator View
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" className="outline-none w-full py-1 px-3" value={password} placeholder='Show Password' readOnly ref={passwordRef}/>
          <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" className='cursor-pointer' min={6} max={50} value={length} onChange={(e) => {setLength(e.target.value)}}/>
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" defaultChecked={numberAllow} onChange={() => setNumberAllow(prev => !prev)}/>
          <label >Number</label>
        </div>
        <div>
          <input type="checkbox" defaultChecked={characterAllow} onChange={() => setCharacterAllow(prev => !prev)}/>
          <label >Character</label>
        </div>
      </div>
    </div>
  )
}

export default App
