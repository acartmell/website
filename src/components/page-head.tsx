import React from "react";
import favicon from "../images/favicon.ico";
import headshot from "../images/headshot.jpg";

interface Props {
  title: string;
}

function PageHead(props: Props) {
  const { title } = props;

  return (
    <>
      <title>{title}</title>
      <meta name="og:title" content={title} />
      <meta name="og:url" content="https://www.alexcartmell.com" />
      <meta
        name="description"
        content="Frontend web engineer with over 10 years of industry experience. Currently working for Nextdoor in San Francisco."
      />
      <meta
        name="og:description"
        content="Frontend web engineer with over 10 years of industry experience. Currently working for Nextdoor in San Francisco."
      />
      <meta name="og:image" content={headshot} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="icon" type="image/x-icon" href={favicon}></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Lato&family=Lora:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <script
        src="https://kit.fontawesome.com/c6f0ce9be6.js"
        crossOrigin="anonymous"
      ></script>
    </>
  );
}

export default PageHead;
