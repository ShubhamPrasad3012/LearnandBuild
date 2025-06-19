import React from 'react';

const FloatingCard = ({ children, delay = 0, scrollY = 0 }) => {
  return (
    <div 
      className="transform transition-all duration-1000 hover:scale-105"
      style={{
        transform: `translateY(${Math.sin(scrollY * 0.01 + delay) * 10}px)`,
        transition: 'transform 0.1s ease-out'
      }}
    >
      {children}
    </div>
  );
};

export default FloatingCard;