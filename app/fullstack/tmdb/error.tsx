"use client";

import { useEffect } from "react";

export default function ErrorTmdb({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div>
      <h1>Somethig went wrong, please try agai later</h1>
      <button type="button" aria-label="try again" onClick={reset} className="underline">
        Try Again
      </button>
    </div>
  );
}
