import React from "react";
import ErrorBoundary from "../components/error-boundary";
import Page from "../components/page";
import PageHead from "../components/page-head";
import HeroSection from "../components/hero-section";
import AboutSection from "../components/about-section";
import "./index.scss";

function IndexPage() {
  return (
    <ErrorBoundary>
      <Page>
        <HeroSection />
        <AboutSection />
      </Page>
    </ErrorBoundary>
  );
}

export default IndexPage;

export function Head() {
  return <PageHead title="Alex Cartmell" />;
}
