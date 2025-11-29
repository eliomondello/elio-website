import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navigation from './components/Navigation'
import Home from './components/Home'
import HomeTest from './components/HomeTest'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Services from './components/Services'
import Books from './components/Books'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [language, setLanguage] = useState('en')

  return (
    <Router>
      <div className="min-h-screen bg-black text-white overflow-x-hidden max-w-[100vw]">
        <Navigation language={language} setLanguage={setLanguage} />
        <Routes>
          <Route path="/" element={<HomeTest />} />
          <Route path="/about" element={<About language={language} />} />
          <Route path="/portfolio" element={<Portfolio language={language} />} />
          <Route path="/testimonials" element={<Testimonials language={language} />} />
          <Route path="/services" element={<Services language={language} />} />
          <Route path="/books" element={<Books language={language} />} />
          <Route path="/contact" element={<Contact language={language} />} />
        </Routes>
        <Footer language={language} />
      </div>
    </Router>
  )
}

export default App
