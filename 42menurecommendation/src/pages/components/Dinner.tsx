import React, { useState } from "react";
import { Counter, Frame, Button } from "react95";
import { lunchMenuList } from "../data/lunch";
import { DinnerMenu } from "../data/dinner";
import { Menu } from "../data/menuType";

const Dinner = () => {
  const [number, setNumber] = useState(0);
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");

  const onClickNumber = () => {
    const randomIndex = Math.floor(Math.random() * DinnerMenu.length);
    const randomMenu = DinnerMenu[randomIndex];
    setNumber(randomIndex);
    setKey(randomMenu.key);
    setValue(randomMenu.value);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Counter size="xl" value={number} />
      </div>
      <div style={{ bottom: "10px", top: "10px" }}>
        <Frame variant="well" className="footer">
          오늘의 저녁메뉴는 ? {`${key} / ${value}`}
        </Frame>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button onClick={onClickNumber}>
          <span>추천시작</span>
        </Button>
      </div>
    </div>
  );
};

export default Dinner;
