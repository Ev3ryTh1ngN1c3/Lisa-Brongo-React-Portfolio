import {Link} from "react-router-dom"

function Header() {
    return (
      <section id="about-me" className="my-5 intro">
       
       <h2>This is the Header</h2>

       <ul className="nav-ul">
        <li>
          <Link to="/">About Me</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
       </ul>
       
      </section>
    );
  }
  
  export default Header;