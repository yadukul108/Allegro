import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Media from "./pages/Media"
import Transactions from "./pages/Transactions"
import Careers from "./pages/Careers"
import About from "./pages/About"
import Navbar from "./components/Navbar"
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Team from "./pages/Team"
import TransactionDetail from './components/TransactionDetail';
import Newsletter from './pages/Newsletter';
import Newsdetail
 from './components/Newsdetail';
import Investment from './pages/Investment';
import Strategic from './pages/Strategic';
const App = () => {
  return (
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/media' element={<Media />} />
        <Route path='/about' element={<About />} />
        <Route path="/contact-us" element={<Contact/>}/>
        <Route path="/newsletter" element={<Newsletter/>}/>
        <Route path="/news/:slug" element={<Newsdetail />} />
        <Route path='/transactions' element={<Transactions />} />
         <Route path="/transaction/:id" element={<TransactionDetail />} />
         <Route path='/strategic-advisory' element={<Strategic/>}/>
        <Route path='/investment' element={<Investment/>}/>
        <Route path='/careers' element={<Careers />} />
        <Route path="/teams" element={<Team/>}/>
      </Routes>
     
    </BrowserRouter>
  )
}

export default App
