import React from "react";
import Page from "../components/page";
import PageHead from "../components/page-head";
import HeroSection from "../components/hero-section";
import "./index.scss";

function IndexPage() {
  return (
    <Page>
      <HeroSection />
    </Page>
  );
}

export default IndexPage;

export function Head() {
  return <PageHead title="Alex Cartmell" />;
}
