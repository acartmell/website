import React from "react";
import BEM from "bem-cn";
import "./footer.scss";

const bem = BEM("footer");

function Footer() {
  return (
    <footer className={bem()}>
      <div className={bem("social")}>
        <a className={bem("social-link")} href="mailto:acartmell@gmail.com">
          <i className="fa-regular fa-envelope"></i>
        </a>
        <a
          className={bem("social-link")}
          href="https://www.linkedin.com/in/alex-cartmell-57b95ab9/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a
          className={bem("social-link")}
          href="https://github.com/acartmell"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
      <div className={bem("legal")}>
        © 2023 Alex Cartmell <span className={bem("emoji")}>🌁</span>
      </div>
    </footer>
  );
}

export default Footer;
