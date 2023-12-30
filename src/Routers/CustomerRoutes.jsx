import React from 'react'
import {Routes,Route} from 'react-router-dom'

import Navigation from '../customer/components/Navigation/Navigation'
import HomePage from '../customer/Pages/HomePage/HomePage'


const CustomerRoutes = () => {
    return (
      <div>
          <div>
           <Navigation/>
          </div>
        <Routes>
  
          <Route path='/login' element={<HomePage/>}></Route>
          <Route path='/register' element={<HomePage/>}></Route>
          <Route path='/' element={<HomePage/>}></Route>
         
   </Routes>
   
      </div>
    )
  }

export default CustomerRoutes
