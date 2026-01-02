import React from 'react';

const Logo = ({ size = "normal" }) => {
  const isSmall = size === "small";
  
  return (
    <div className={`flex flex-col items-center select-none transition-all duration-500 ${
      isSmall ? 'scale-75' : 'scale-100'
    } origin-center`}>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Cormorant+Garamond:wght@500;600&display=swap');`}
      </style>

      <div className="relative mb-2">
        <svg width={isSmall ? 60 : 90} height={isSmall ? 60 : 90} viewBox="0 0 150 150" fill="none">
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF5C3" />
              <stop offset="40%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#B8860B" />
            </linearGradient>
            <filter id="logoGlow">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Hình chữ Trà chính */}
          <path 
            d="M35 25 L35 80 Q35 100 55 100 Q65 100 65 85 L65 75 L85 75 L85 85 Q85 100 95 100 Q115 100 115 80 L115 25 L95 25 L95 60 L55 60 L55 25 Z" 
            fill="url(#logoGradient)" 
            filter="url(#logoGlow)"
          />
          
          {/* Gợn nước bên trái */}
          <path d="M35 90 Q45 80 55 90" stroke="#0F2820" strokeWidth="2" fill="none" />
          <path d="M35 80 Q45 70 55 80" stroke="#0F2820" strokeWidth="2" fill="none" />
          
          {/* Gợn nước bên phải */}
          <path d="M95 90 Q105 80 115 90" stroke="#0F2820" strokeWidth="2" fill="none" />
          <path d="M95 80 Q105 70 115 80" stroke="#0F2820" strokeWidth="2" fill="none" />
          
          {/* Light effect - Lá trà sáng */}
          <path d="M75 60 Q75 45 90 40 Q85 55 82 65 Z" fill="#FFFFFF" opacity="0.9" />
          
          {/* Spark - Ngôi sao trang trí */}
          <path 
            d="M90 40 L91.5 35 L93 40 L98 41.5 L93 43 L91.5 48 L90 43 L85 41.5 Z" 
            fill="#FFFFFF"
            opacity="0.8"
          />
        </svg>
      </div>
      
      {/* Text */}
      <div className="text-center">
        <h1 
          className={`font-bold tracking-wider ${isSmall ? 'text-sm' : 'text-lg'} text-[#D4AF37] uppercase`}
          style={{ 
            fontFamily: '"Cinzel Decorative", cursive',
            textShadow: '0 2px 5px rgba(0,0,0,0.5)'
          }}
        >
          Trà Bản Dao
        </h1>
        
        {/* Divider line */}
        <div className={`w-2/3 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto ${
          isSmall ? 'my-1' : 'my-2'
        }`}></div>
        
        {/* Subtitle */}
        <p 
          className={`${isSmall ? 'text-[8px]' : 'text-[10px]'} text-[#A8B3A6] uppercase tracking-[0.4em]`}
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          Thái Nguyên
        </p>
      </div>
    </div>
  );
};

export default Logo;