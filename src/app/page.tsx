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
    router.push('./ferrari-models');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-8 bg-gradient-to-tr from-red-700 via-black to-blue-500 p-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">
        Choose a supercar brand to chat with:
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
                src='/assets/img/ferrari-button-background.png'
                alt="Ferrari"
                layout="fill"
                objectFit="cover"
                className="transition-all duration-300 grayscale hover:grayscale-0"
              />
            </div>
          )}
        </Button>

        <Button
          className="relative w-full sm:w-64 h-80 sm:h-96 border-2 border-gray-300 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          disabled
        >
          <span className="text-center text-white">More chats coming soon!</span>
        </Button>
      </div>
    </div>
  );
}
