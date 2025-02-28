import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Bookmark from "./components/Bookmark";
import About from "./components/About";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
import Music from "./components/Music";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/music" element={<Music />} />
            <Route path="/bookmark" element={<Bookmark />} />
            {/* <Route path="/projects" element={<Projects />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
        <footer>
          <p>© 2025 Natsuki. All rights reserved.</p>
          {/* 
          TODO: 
          add social links:
          ins, x, spotify, github, qiita

          unify the font-size css for responsive, add scope
           */}
        </footer>
      </div>
    </Router>
  );
}

export default App;
