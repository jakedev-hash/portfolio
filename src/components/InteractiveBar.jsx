import React, { useState, useEffect, useRef } from 'react';
import './InteractiveBar.css';

const InteractiveBar = () => {
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });
  const barRef = useRef(null);
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!barRef.current) return;
      const rect = barRef.current.getBoundingClientRect();
      const padding = 70; // Expand interaction area by 70px
      // Check if the mouse is within the expanded bounds
      if (
        e.clientX >= rect.left - padding &&
        e.clientX <= rect.right + padding &&
        e.clientY >= rect.top - padding &&
        e.clientY <= rect.bottom + padding
      ) {
        // Calculate gradient position
        const x = Math.min(
          100,
          Math.max(0, ((e.clientX - rect.left) / rect.width) * 100)
        );
        const y = Math.min(
          100,
          Math.max(0, ((e.clientY - rect.top) / rect.height) * 100)
        );
        setGradientPosition({ x, y });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={barRef} className="interactive-bar-container">
      <div
        className="interactive-bar-gradient"
        style={{
          background: `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, rgba(255, 255, 255, 1), rgba(30, 30, 30, 1) 70%)`,
        }}
      ></div>
    </div>
  );
};

export default InteractiveBar;