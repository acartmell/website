import React from "react";
import ErrorBoundary from "../components/error-boundary";
import Page from "../components/page";
import PageHead from "../components/page-head";
import Hero from "../sections/hero";
import About from "../sections/about";
import Resume from "../sections/resume";
import Contact from "../sections/contact";
import "./index.scss";

function IndexPage() {
  return (
    <ErrorBoundary>
      <Page>
        <Hero />
        <About />
        <Resume />
        <Contact />
      </Page>
    </ErrorBoundary>
  );
}

export default IndexPage;

export function Head() {
  return <PageHead title="Alex Cartmell" />;
}
