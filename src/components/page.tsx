import React, { ReactNode } from "react";
import useSystemTheme from "../hooks/use-system-theme";
import "./page.scss";

interface Props {
  children: ReactNode;
}

function Page(props: Props) {
  const { children } = props;
  const theme = useSystemTheme();

  return <main className={`theme-${theme}`}>{children}</main>;
}

export default Page;
