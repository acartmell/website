import React, { ReactNode } from "react";
import useSystemTheme from "../hooks/use-system-theme";
import useViewportHeight from "../hooks/use-viewport-height";
import Footer from "./footer";
import "./page.scss";

interface Props {
  children: ReactNode;
}

function Page(props: Props) {
  const { children } = props;
  const theme = useSystemTheme();
  useViewportHeight();

  return (
    <div className={`theme-${theme}`}>
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Page;
