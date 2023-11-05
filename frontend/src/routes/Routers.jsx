import {Routes, Route} from 'react-router-dom'
import React from 'react'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import ComplaintRegister from '../pages/ComplaintRegister'
import Dashboard from '../pages/Dashboard'
import EnterOtp from '../pages/EnterOtp'

const Routers = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element = {<Dashboard/>} />
            <Route path='/login' element = {<Login/>} />
            <Route path='/signup' element = {<SignUp/>} />
            <Route path='/registerIssue' element = {<ComplaintRegister/>} />
            <Route path='/enterOtp' element = {<EnterOtp/>} />
        </Routes>
    </div>
  )
}

export default Routers