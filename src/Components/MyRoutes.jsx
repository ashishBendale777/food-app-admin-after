import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Drawer from './MyDrawer'
import Dashboard from './Dashboard'
import Alldishes from './Alldishes'
import Adddishes from './Adddishes'
import Customer from './Customer'
import Orders from './Orders'
import Reviews from './Reviews'

const MyRoutes = () => {
  return (
    <>
        <Drawer/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/alldishes" element={<Alldishes />} />
        <Route path="/adddishes" element={<Adddishes />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/order" element={<Orders />} />
        <Route path="/review" element={<Reviews />} />
      </Routes>
    </>
  )
}

export default MyRoutes
