import React from "react";
import favicon from "../images/favicon.ico";

interface Props {
  title: string;
}

function PageHead(props: Props) {
  const { title } = props;

  return (
    <>
      <title>{title}</title>
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
