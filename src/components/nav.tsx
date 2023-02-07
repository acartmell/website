import React from "react";
import BEM from "bem-cn";
import useScrollListener from "../hooks/use-scroll-listener";
import useThemeContext from "../hooks/use-theme-context";
import "./nav.scss";

const bem = BEM("nav");

export type NavLink = "about" | "resume" | "contact";

interface Props {
  onLinkClick: (link: NavLink) => void;
}

function Nav(props: Props) {
  const { onLinkClick } = props;
  const { setTheme } = useThemeContext();

  const scrollY = useScrollListener();
  const opacity = Math.min(scrollY, 100);

  console.log({ opacity });

  return (
    <nav className={bem()}>
      <div
        className={bem("background")}
        ref={(node) => {
          if (node) {
            // due to some weird React/Gatsby bug, normal inline styling doesn't work
            node.style.setProperty("opacity", `${opacity / 100}`);
          }
        }}
      />
      <div className={bem("content")}>
        <button
          className={bem("link")}
          type="button"
          onClick={(ev) => {
            ev.currentTarget.blur();
            onLinkClick("about");
          }}
        >
          About
        </button>
        <button
          className={bem("link")}
          type="button"
          onClick={(ev) => {
            ev.currentTarget.blur();
            onLinkClick("resume");
          }}
        >
          Resume
        </button>
        <button
          className={bem("link")}
          type="button"
          onClick={(ev) => {
            ev.currentTarget.blur();
            onLinkClick("contact");
          }}
        >
          Contact
        </button>
      </div>
      <button
        className={bem("theme-button", { trigger: "dark" })}
        type="button"
        onClick={() => setTheme("dark")}
      >
        <i className="fa-solid fa-moon"></i>
      </button>
      <button
        className={bem("theme-button", { trigger: "light" })}
        type="button"
        onClick={() => setTheme("light")}
      >
        <i className="fa-solid fa-sun"></i>
      </button>
    </nav>
  );
}

export default Nav;
