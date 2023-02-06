import React from "react";
import BEM from "bem-cn";
import useScrollListener from "../hooks/use-scroll-listener";
import "./nav.scss";

const bem = BEM("nav");

export type NavLink = "about" | "resume" | "contact";

interface Props {
  onLinkClick: (link: NavLink) => void;
}

function Nav(props: Props) {
  const { onLinkClick } = props;

  const scrollY = useScrollListener();
  const opacity = Math.min(scrollY, 100);

  return (
    <nav className={bem()}>
      <div className={bem("background")} style={{ opacity: opacity / 100 }} />
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
    </nav>
  );
}

export default Nav;
