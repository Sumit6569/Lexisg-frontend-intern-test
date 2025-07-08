import React from 'react';
import { Scale, BookOpen, Search } from 'lucide-react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
      <div className="flex flex-col items-center justify-center space-y-6">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Scale className="w-6 h-6 text-blue-600" />
          </div>
        </div>
        
        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold text-gray-800">
            Analyzing Legal Question
          </h3>
          <p className="text-gray-600 text-sm">
            Searching through legal databases and precedents...
          </p>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4 animate-pulse" />
            <span>Searching cases</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 animate-pulse" />
            <span>Finding citations</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;