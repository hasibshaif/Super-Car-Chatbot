"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CircularProgress } from "@mui/material";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setLoading(true);
    router.push('./ferrari-chat');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-tr from-yellow-500 via-black to-red-600 p-4">
      <div className="flex justify-start">
        <Button onClick={() => router.back()}>
          ← BACK
        </Button>
      </div>
      <div className="flex-grow flex flex-col items-center justify-center space-y-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
          Choose a Ferrari model to chat with:
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <Button
            className="relative w-full sm:w-64 h-80 sm:h-96 border-2 border-gray-300 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            onClick={handleClick}
            disabled={loading}
          >
            {loading ? (
              <div className="flex justify-center items-center h-full">
                <CircularProgress size={48} color="inherit" />
              </div>
            ) : (
              <div className="w-full h-full">
                <Image
                  src='/assets/img/ferrari-458-spider.jpg'
                  alt="Ferrari 458 Spider"
                  layout="fill"
                  objectFit="cover"
                  className="grayscale transition-all duration-300 hover:grayscale-0"
                />
                <div className="absolute inset-0 flex items-end justify-center z-10 pointer-events-none px-5">
                  <span className="text-white text-xl font-bold py-1 rounded">
                    Ferrari 458 Spider
                  </span>
                </div>
              </div>
            )}
          </Button>

          <Button
            className="relative w-full sm:w-64 h-80 sm:h-96 border-2 border-gray-300 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            disabled
          >
            <span className="text-center text-white">More models coming soon!</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
