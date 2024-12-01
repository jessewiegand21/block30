import { useState } from 'react'
import Books from './components/Books'
import {Routes, Route,} from 'react-router-dom'
import Navigation from './components/Navigations'
import Login from './components/Login'
import RegForm from './components/Register'
import "./index.css"
import MyAccount from './components/MyAccount'
import SingleBook from './components/SingleBook'
import AccountInfo from './components/AccountInfo'
import { useEffect } from 'react'

function App() {

const [token, setToken] = useState('')
useEffect (() => {console.log(token)},[token])
  return (
    <>
    <header>
      <Navigation/>
    </header>
    

    


    <div className='container'>

     <Routes>
      <Route path='/' element={<Books/>}></Route>
      <Route path='/login' element={<Login  setToken={setToken}/>}></Route>
      <Route path='/register' element={<RegForm setToken={setToken}/>}></Route>
      <Route path='/myAccount' element={<MyAccount/>}></Route>
      <Route path='/book/:id' element={<SingleBook/>}></Route>
      <Route path= '/accountInfo' element={<AccountInfo token={token}/>}></Route>
      
     </Routes>

    </div>
    
    </>
  )
}

export default App
