import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import profile from './assets/profile.png'
import Header from "./components/Header"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <a href="/">
            <img src={profile} className="logo" alt="Vite logo" />
          </a>
        </div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer>
          <p>© 2025 Natsuki. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
