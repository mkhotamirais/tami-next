import React from "react";

export default function R5CatchAll({ params }: { params: { r5catchall: string[] } }) {
  return (
    <div>
      R5CatchAll coba tambah parameter url: {params.r5catchall.toString()}
      <br />
      <br />
      Catch all, you cannot use both an required and optional catch-all route at the same level, catch all dengan satu
      kurung siku, optional catcha-all dengan dua kurung siku di dalam kurung siku
    </div>
  );
}
