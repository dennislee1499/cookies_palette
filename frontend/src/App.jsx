import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NailTechs from './pages/NailTechs'
import Login from './pages/Login'
import Policy from './pages/Policy'
import Contact from './pages/Contact'
import Profile from './pages/Profile'
import Appointments from './pages/Appointments'
import Booking from './pages/Booking'
import Navbar from './components/Navbar'
import Services from './pages/Services'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/nailtechs' element={ <NailTechs /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/policy' element={ <Policy /> } />
          <Route path='/contact' element={ <Contact /> } />
          <Route path='/services' element={ <Services /> } />
          <Route path='/profile' element={ <Profile /> } />
          <Route path='/appointments' element={ <Appointments /> } />
          <Route path='/booking/:techId' element={ <Booking /> } />
        </Routes>
    </div>
  )
}

export default App
