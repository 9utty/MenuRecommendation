import { ComponentMeta } from "@storybook/react";
import React, { useState } from "react";
import { Bar } from "react95";
import {
  AppBar,
  Button,
  MenuList,
  MenuListItem,
  Separator,
  TextInput,
  Toolbar,
  styleReset,
} from "react95";
import styled, { createGlobalStyle } from "styled-components";

const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.desktopBackground};
`;

export default {
  title: "Environment/AppBar",
  component: AppBar,
  decorators: [(story) => <Wrapper>{story()}</Wrapper>],
} as ComponentMeta<typeof AppBar>;

export function Appbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div style={{ bottom: "0px" }}>
        <Bar style={{ width: "100vw", height: "49px" }}>
          <Toolbar style={{ justifyContent: "space-between" }}>
            <div style={{ position: "relative", display: "inline-block" }}>
              <Button
                onClick={() => setOpen(!open)}
                active={open}
                style={{ fontWeight: "bold", fontFamily: "ms_sans_serif" }}
              >
                <img
                  src={
                    "https://user-images.githubusercontent.com/86397600/236210202-560b7128-fa5a-4fdd-b746-f3c304c977bd.png"
                  }
                  style={{ paddingRight: "5px", width: "20px" }}
                />
                Start
              </Button>
              {open && (
                <MenuList
                  style={{
                    position: "absolute",
                    left: "0",
                    top: "100%",
                  }}
                  onClick={() => setOpen(false)}
                >
                  <MenuListItem>
                    <span role="img" aria-label="👨‍💻">
                      👨‍💻
                    </span>
                    Profile
                  </MenuListItem>
                  <MenuListItem>
                    <span role="img" aria-label="📁">
                      📁
                    </span>
                    My account
                  </MenuListItem>
                  <Separator />
                  <MenuListItem disabled>
                    <span role="img" aria-label="🔙">
                      🔙
                    </span>
                    Logout
                  </MenuListItem>
                </MenuList>
              )}
            </div>

            <TextInput placeholder="Search..." width={150} />
          </Toolbar>
        </Bar>
      </div>
    </>
  );
}

Appbar.story = {
  name: "default",
};
