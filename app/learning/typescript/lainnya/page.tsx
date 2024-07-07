"use client";

import React from "react";

export default function Lainnya() {
  return (
    <div>
      Ts3
      <CssProperties style={{ color: "red", border: "1px solid", margin: "3px" }} />
      <Record style={{ color: "blue", border: "1px solid", margin: "3px" }} />
      <AnyElement />
    </div>
  );
}

function CssProperties({ style }: { style: React.CSSProperties }) {
  return <div style={style}>React.CSSProperties</div>;
}

function Record({ style }: { style: Record<string, string> }) {
  return <div style={style}>Record</div>;
}

function AnyElement() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e.target);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <>
      <div>Any Element</div>
      <input type="text" placeholder="name" onChange={handleChange} className="border rounded" />
      <button type="button" onClick={handleClick}>
        click me
      </button>
    </>
  );
}
