import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function ContactSendBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="h-12 w-32 border rounded-full flex gap-2 items-center justify-center bg-gray-900 text-white"
      disabled={pending}
    >
      {pending ? (
        <div className="w-5 h-5 animate-spin rounded-full border-b-2 border-white" />
      ) : (
        <>
          Submit <FaPaperPlane />
        </>
      )}
    </button>
  );
}
