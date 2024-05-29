"use client";

import H1 from "@/components/h1";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="text-center py-24">
      <H1 className="mb-5">Something went wrong!</H1>
      <p>{error.message}</p>
      <button
        className="bg-white/20 text-lg capitalize mt-5 lg:mt-auto w-[25vw] py-2 rounded-md border-white/10 border-2 state-effects"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </main>
  );
}
