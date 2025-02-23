import profile from './assets/profile.png'
import Header from "./components/Header"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import './App.css'

function App() {

  return (
    <div className="App">
      <Header />
      <div>
        <a href="">
          <img src={profile} className="logo" alt="Vite logo" />
        </a>
      </div>
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <footer>
        <p>© 2025 Natsuki. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
