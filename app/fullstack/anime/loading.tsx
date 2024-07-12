import React from "react";
import { PiSpinner } from "react-icons/pi";

export default function LoadingAnime() {
  return (
    <div className="flex justify-center mt-12">
      <PiSpinner className="animate-spin rounded-full bg-black/50 text-white text-7xl p-2" />
    </div>
  );
}
