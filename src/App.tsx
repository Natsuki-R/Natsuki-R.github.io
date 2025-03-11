import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import React, { ReactNode } from "react";
import Header from "./components/common/Header";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Bookmark from "./components/Bookmark";
import About from "./components/About";
import Projects from "./components/Projects";
// import Contact from "./components/Contact";
import Music from "./components/Music";
import "./App.css";
import Footer from "./components/common/Footer";
import CanvasWrapper from "./components/CanvasWrapper";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isRootPath = location.pathname === "/";

  if (isRootPath) {
    return <>{children}</>;
  }

  return (
    <div className="App">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<CanvasWrapper />} />
          <Route path="/entrance" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/music" element={<Music />} />
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
