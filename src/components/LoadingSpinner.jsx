
import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-[50vh] w-full bg-brand-background">
      <Loader2 className="h-12 w-12 animate-spin text-brand-highlight" />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
