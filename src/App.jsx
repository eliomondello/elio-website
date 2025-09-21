import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Services from './components/Services'
import Contact from './components/Contact'
import './App.css'

function App() {
  const [language, setLanguage] = useState('en')

  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navigation language={language} setLanguage={setLanguage} />
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/about" element={<About language={language} />} />
          <Route path="/portfolio" element={<Portfolio language={language} />} />
          <Route path="/testimonials" element={<Testimonials language={language} />} />
          <Route path="/services" element={<Services language={language} />} />
          <Route path="/contact" element={<Contact language={language} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
