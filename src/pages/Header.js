import "../styles.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Header() {
  return (
    <>
      <Router>
        <div className="navbar">
          <NavLink to="/">
            <i className="fa fa-home" aria-hidden="true" /> Home
          </NavLink>
          <NavLink to="/about">
            <i className="fa fa-user" aria-hidden="true" /> About
          </NavLink>
          <NavLink to="/experience">
            <i className="fa fa-star" aria-hidden="true" /> Experience
          </NavLink>
          <NavLink to="/skills">
            <i className="fa fa-cogs" aria-hidden="true" /> Skills
          </NavLink>
          <NavLink to="/projects">
            <i className="fa fa-check-square" aria-hidden="true" /> Projects
          </NavLink>
          <NavLink to="/contact">
            <i className="fa fa-phone" aria-hidden="true" /> Contact Me
          </NavLink>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}></Route>
          <Route path="/experience" element={<Experience />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </>
  );
}
