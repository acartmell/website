import React, { ReactNode } from "react";
import useSystemTheme from "../hooks/use-system-theme";
import useViewportHeight from "../hooks/use-viewport-height";
import Nav, { NavLink } from "./nav";
import Footer from "./footer";
import "./page.scss";

interface Props {
  onNavLinkClick: (link: NavLink) => void;
  children: ReactNode;
}

function Page(props: Props) {
  const { onNavLinkClick, children } = props;
  const theme = useSystemTheme();
  useViewportHeight();

  return (
    <div className={`theme-${theme}`}>
      <Nav onLinkClick={onNavLinkClick} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Page;
