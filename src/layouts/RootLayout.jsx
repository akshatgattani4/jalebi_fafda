import React from "react";
import VoiceButton from "../components/VoiceButton";

import { useContext } from "react";
import { MouseContext } from "../context/mouse-context";


import LandingTop from "../components/LandingTop";
export default function RootLayout() {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  return (
    <>
      <LandingTop />
      <div className="App">
      <div className="container">
        <div
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
        </div>
      </div>
      <div className="container" style={{ background: "peachpuff" }}></div>
    </div>

    </>
  );
}
