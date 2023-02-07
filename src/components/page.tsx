import React, { ReactNode } from "react";
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
  useViewportHeight();

  return (
    <>
      <Nav onLinkClick={onNavLinkClick} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Page;
