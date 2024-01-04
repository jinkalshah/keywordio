import React from 'react'
import './App.css';
import {Routes, Route} from 'react-router-dom'

import Dashboard from './components/dashboard/Dashboard';
import CreateAd from './components/createAd/CreateAd';

const AllRoutes = () => {
  return (
    <Routes>
   <Route exact path='/' element={<Dashboard />} />
   <Route exact path='/dashboard' element={<Dashboard />} />
   <Route exact path='/create-ad' element={<CreateAd />} />
   </Routes>
  )
}

export default AllRoutes