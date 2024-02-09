import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='bg-black text-white p-4 rounded mb-4'>Vaibhav React</h1>
      <div className='flex space-x-4'>
        <Card cardName="First Card" />
        <Card cardName="Second Card" />
        <Card cardName="Third Card" />
        <Card/>
      </div>
    </>
  )
}

export default App
