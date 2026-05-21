// app/loading.js
'use client';

import { useState, useEffect } from 'react';

export default function Loading() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // 3 seconds (3000ms) por loading screen bondho hobe
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup function
  }, []);

  // Jodi 3s shesh na hoy, tobe loading ui dekhabe
  if (!showLoading) return null;

  return (
    <div className="flex min-h-[70vh] w-full items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* DaisyUI Progress Circle/Spinner */}
        <span className="loading loading-spinner loading-lg text-primary"></span>
        
        {/* Progress bar loader for a premium feel */}
        <progress className="progress progress-primary w-56" value="100" max="100"></progress>
        
        <p className="text-base-content/70 text-sm font-medium animate-pulse mt-2">
          Preparing your dashboard, please wait...
        </p>
      </div>
    </div>
  );
}