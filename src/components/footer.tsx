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
      <div className={bem("info")}>
        This website was built using{" "}
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          React
        </a>
        ,{" "}
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noreferrer"
        >
          TypeScript
        </a>
        ,{" "}
        <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">
          Sass
        </a>
        , and{" "}
        <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">
          Gatsby
        </a>
        , and is hosted by{" "}
        <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">
          Netlify
        </a>
        .
      </div>
      <div className={bem("legal")}>
        © 2024 Alex Cartmell <span className={bem("emoji")}>🌁</span>
      </div>
    </footer>
  );
}

export default Footer;
