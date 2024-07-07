"use client";

import React, { useEffect, useRef, useState } from "react";

export default function UseRef() {
  const inputRef = useRef<HTMLInputElement>(null!);
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const startTimer = () => {
    intervalRef.current = window.setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const continueTimer = () => {
    if (!intervalRef.current) {
      startTimer();
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div className="border rounded p-2 m-2">
      <div>
        <input type="text" ref={inputRef} placeholder="ref" className="border" />
      </div>
      <div>
        timer
        <div>timer: {timer}</div>
        <div>
          <button type="button" onClick={stopTimer}>
            stop
          </button>
          <button type="button" onClick={continueTimer}>
            continue
          </button>
        </div>
        <div>
          <Button autoFocus />
        </div>
      </div>
    </div>
  );
}

function Button({ type, ...rest }: React.ComponentPropsWithoutRef<"button">) {
  return (
    <button type={type} {...rest} className="text-left">
      Click me (ComponentPropsWithoutRef)
    </button>
  );
}
