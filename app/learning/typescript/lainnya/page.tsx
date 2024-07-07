"use client";

import React, { Component } from "react";

export default function Lainnya() {
  return (
    <div>
      Ts3
      <CssProperties style={{ color: "red", border: "1px solid", margin: "3px" }} />
      <Record style={{ color: "blue", border: "1px solid", margin: "3px" }} />
      <AnyElement />
      <Kelas1 message="pesan" />
      <ComponentProp Component1={Comp1} Component2={Comp2} />
      <Les5 items={["ahmad", "abdul", "siti"]} onClick={(item) => console.log(item)} />
      <Les5 items={[1, 2, 3]} onClick={(item) => console.log(item)} />
      <div>Lesson6: never</div>
      <Les6 value={5} isPositive />
      <div>Lesson7: template literal and exclude</div>
      <Les7 pos="left-center" />
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
      <div>MoeseEvent, ChangeEvent</div>
      <input type="text" placeholder="name" onChange={handleChange} className="border rounded" />
      <button type="button" onClick={handleClick}>
        click me
      </button>
    </>
  );
}

class Kelas1 extends Component<{ message: string }, { count: number }> {
  // class Les3 extends Component<{}, { count: number }> { // tulis {} kalau tidak ada props
  // class Les3 extends Component<{ message: string }> { // hilangkan count kalau tidak ada state
  state = { count: 0 };
  handleClick = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };
  render() {
    return (
      <div>
        {this.props.message} - {this.state.count}
        <br />
        <button type="button" onClick={this.handleClick}>
          increment btn
        </button>
      </div>
    );
  }
}

type tLes4bCb = { nama: string };
function Les4bCb({ nama }: tLes4bCb) {
  return <div>les4bCb hello {nama}</div>;
}
function Les4b({ show, component: Component }: { show: boolean; component: React.ComponentType<tLes4bCb> }) {
  if (show) {
    return <Component nama="ahmad" />;
  } else {
    return <div>componen is not showed</div>;
  }
}

const Comp2 = ({ name }: { name: string }) => <div>Comp2 prop name {name}</div>;
const Comp1 = () => <div>Comp1</div>;
type tComponentProp = {
  Component1: React.ComponentType;
  Component2: React.ComponentType<{ name: string }>;
};
function ComponentProp({ Component1, Component2 }: tComponentProp) {
  return (
    <>
      <Component1 />
      <Component2 name="ahmad" />
    </>
  );
}

// generic
type tLes5<T> = { items: T[]; onClick(value: T): void };
const Les5 = <T extends string | number>({ items, onClick }: tLes5<T>) => {
  return (
    <div>
      {items?.map((item, i) => (
        <div key={i} onClick={() => onClick(item)} className="cursor-pointer">
          {item}
        </div>
      ))}
    </div>
  );
};

// Position prop can be on of:
// "left-center", "left-top", "left-bottom"
// "right-center", "right-top", "right-bottom"
// "center", "center-top", "center-bottom"
type Horizontal = "left" | "center" | "right";
type Vertical = "top" | "center" | "bottom";
type tLes7 = { pos: `${Horizontal}-${Vertical}` };
function Les7({ pos }: tLes7) {
  return <div>position: {pos}</div>;
}

// type tLes6 = {value: number; isPositive?:boolean; isNegative?:boolean; isZero?:boolean}
type Random = { value: number };
type Positive = Random & { isPositive: boolean; isNegative?: never; isZero?: never };
type Negative = Random & { isPositive?: never; isNegative: boolean; isZero?: never };
type Zero = Random & { isPositive?: never; isNegative?: never; isZero: boolean };
type tLes6 = Positive | Negative | Zero;
function Les6({ value, isPositive, isNegative, isZero }: tLes6) {
  return (
    <div>
      {value} - {isPositive && "positive"}
      {isNegative && "negative"} {isZero && "zero"}
    </div>
  );
}
