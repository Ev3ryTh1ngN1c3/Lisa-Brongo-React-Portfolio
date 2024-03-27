import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <footer>
      {/* Footer title */}
      <h2>created by ✿ Lisa Brongo ✿</h2>

      {/* List of social icons */}
      <ul className="social-icons">
        {/* GitHub link */}
        <li>
          <a href="https://github.com/Ev3ryTh1ngN1c3" target="_blank" rel="noopener noreferrer">
            <VscGithubAlt />
          </a>
        </li>

        {/* LinkedIn link */}
        <li>
          <a href="https://www.linkedin.com/in/lisa-brongo-92987028a/" target="_blank" rel="noopener noreferrer">
            <AiOutlineLinkedin />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;