import React, { ReactNode } from "react";
import useSystemTheme from "../hooks/use-system-theme";
import useViewportHeight from "../hooks/use-viewport-height";
import "./page.scss";

interface Props {
  children: ReactNode;
}

function Page(props: Props) {
  const { children } = props;
  const theme = useSystemTheme();
  useViewportHeight();

  return <main className={`theme-${theme}`}>{children}</main>;
}

export default Page;
