"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Error tertangkap oleh Next.js Boundary:", error);
  }, [error]);

  return (
    <div className="grid place-items-center min-h-screen bg-[#fafafa] text-[#111] p-6 font-sans">
      <div className="max-w-md w-full text-center p-8">
        <h1 className="text-xl font-bold m-0 mb-2">This page didn't load</h1>
        <p className="text-gray-600 m-0 mb-6">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="flex gap-2 justify-center flex-wrap">
          <button
            onClick={() => reset()} 
            className="bg-[#111] text-white px-4 py-2 rounded-md font-inherit cursor-pointer border border-transparent hover:bg-gray-800 transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="bg-white text-[#111] px-4 py-2 rounded-md font-inherit cursor-pointer border border-gray-300 no-underline hover:bg-gray-50 transition-colors"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}