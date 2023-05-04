import { Col, Image, Row } from "antd";
import React, { useState, useMemo } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
// UI components
import {
  MenuList,
  MenuListItem,
  Separator,
  styleReset,
  AppBar,
  Frame,
} from "react95";
// Theme
import original from "react95/dist/themes/original";
import tokyoDart from "react95/dist/themes/tokyoDark";
import App from "./_app";
import {} from "./Appbar";
import AppLayout from "./AppLayout";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Background = styled.div`
  background-color: #008080;
  width: 100vw;
  height: 100vh;
`;

const Home = () => {
  const [keyword, setKeyword] = useState("");

  return (
    <div>
      <AppLayout>
        <div>굿</div>
      </AppLayout>
    </div>
  );
};

export default Home;
