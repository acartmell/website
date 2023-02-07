import React from "react";
import BEM from "bem-cn";
import "./hero.scss";

const bem = BEM("hero");

interface Props {
  onScrollClick: () => void;
}

function Hero(props: Props) {
  const { onScrollClick } = props;

  return (
    <section className={bem()}>
      <div className={bem("image")}>
        <div className={bem("dimmer")}></div>
      </div>
      <div className={bem("body")}>
        <div className={bem("header")}>Hi, I&apos;m Alex.</div>
        <p className={bem("subheader")}>
          I&apos;m a San Francisco-based <strong>Frontend Web Engineer</strong>{" "}
          with over 10 years of industry experience. I&apos;m currently working
          as a freelance developer, and am <strong>open</strong> to taking on
          new projects.
        </p>
      </div>
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
      <button
        className={bem("scroll-button")}
        type="button"
        onClick={onScrollClick}
      >
        <i className="fa-solid fa-angle-down"></i>
      </button>
    </section>
  );
}

export default Hero;
