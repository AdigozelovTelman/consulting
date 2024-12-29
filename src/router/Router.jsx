import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Basket from '../pages/basket/Basket'
import SignupForm from '../pages/home/component/signupForm/SignupForm'
import Home from '../pages/home/Home'
import Wishlist from '../pages/wishlist/Wishlist'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/basket' element={<Basket/>}/>
            <Route path='/wishlist' element={<Wishlist/>}/>
            <Route path='/formik' element={<SignupForm/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router