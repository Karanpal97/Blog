import { useState ,useEffect} from 'react'
import './App.css'
import {Header,Footer} from "./components/index"
import {useDispatch} from 'react-redux'
import appService from "./App_right/Auth"
import {logOut,login} from "./App/AuthSlice"


function App() {
const [loading,setLoadig]=useState(true);
useEffect(()=>{
  appService.getUser()
  .then((userData)=>{
    if(userData){
      useDispatch(login({userData}))
    }else{
      useDispatch(logOut)
    }
  })
  .finally(()=>{setLoadig(false)})
},[])
  return !loading? <div>
    <Header/>
    <Footer/>
  </div>:null
}

export default App
