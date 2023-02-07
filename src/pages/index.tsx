import React, { useRef } from "react";
import { NavLink } from "../components/nav";
import ErrorBoundary from "../components/error-boundary";
import Page from "../components/page";
import PageHead from "../components/page-head";
import Hero from "../sections/hero";
import About from "../sections/about";
import Resume from "../sections/resume";
import Contact from "../sections/contact";
import "./index.scss";

function IndexPage() {
  const aboutSectionRef = useRef<HTMLElement>(null);
  const resumeSectionRef = useRef<HTMLElement>(null);
  const contactSectionRef = useRef<HTMLElement>(null);

  const getSectionForNavLink = (link: NavLink) => {
    if (link === "about") {
      return aboutSectionRef.current;
    }
    if (link === "resume") {
      return resumeSectionRef.current;
    }
    if (link === "contact") {
      return contactSectionRef.current;
    }

    return null;
  };

  const handleNavLinkClick = (link: NavLink) => {
    const section = getSectionForNavLink(link);
    if (section) {
      window.scrollTo({ top: section.offsetTop - 24, behavior: "smooth" });
    }
  };

  return (
    <ErrorBoundary>
      <Page onNavLinkClick={handleNavLinkClick}>
        <Hero onScrollClick={() => handleNavLinkClick("about")} />
        <About ref={aboutSectionRef} />
        <Resume ref={resumeSectionRef} />
        <Contact ref={contactSectionRef} />
      </Page>
    </ErrorBoundary>
  );
}

export default IndexPage;

export function Head() {
  return <PageHead title="Alex Cartmell" />;
}
