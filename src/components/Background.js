import React from 'react';

const BackgroundElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" 
        style={{animationDelay: '2s'}}
      ></div>
      <div 
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" 
        style={{animationDelay: '4s'}}
      ></div>
    </div>
  );
};

export default BackgroundElements;