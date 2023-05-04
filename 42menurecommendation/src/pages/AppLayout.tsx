import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import tokyoDart from "react95/dist/themes/tokyoDark";
import original from "react95/dist/themes/original";
// UI components
import {
  MenuList,
  MenuListItem,
  Separator,
  styleReset,
  AppBar,
  Frame,
} from "react95";
import { Appbar } from "./Appbar";

type Props = {
  children: React.ReactNode;
};
const AppLayout = ({ children }: Props) => {
  return (
    <div>
      <ThemeProvider theme={original}>
        {children}
        <Appbar />
      </ThemeProvider>
    </div>
  );
};

export default AppLayout;
