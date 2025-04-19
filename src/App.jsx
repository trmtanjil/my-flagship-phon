 
import { Outlet } from 'react-router'
import './App.css'

function App() {
  

  return (
    <>
      
      <h1>this is header</h1>
      <Outlet></Outlet>
      <h1>this is footer</h1>
    </>
  )
}

export default App
