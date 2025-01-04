'use client';

import React, { useEffect, useState } from 'react';

const PreLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simple timeout to remove the loader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="relative flex flex-col items-center">
        <div className="mb-8 flex items-center justify-center">
          {/* Letters container */}
          <div className="flex space-x-1">
            {'REYAHAM'.split('').map((letter, index) => (
              <span
                key={index}
                className="inline-block animate-bounce text-4xl font-bold text-teal-400 md:text-6xl"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationDuration: '1s',
                }}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>

        {/* Loading indicator */}
        <div className="h-1 w-48 overflow-hidden rounded-full bg-gray-800">
          <div className="h-full w-full animate-loading-bar bg-gradient-to-r from-teal-400 to-cyan-400" />
        </div>
      </div>

      <style jsx>{`
        @keyframes loading-bar {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-loading-bar {
          animation: loading-bar 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default PreLoader;