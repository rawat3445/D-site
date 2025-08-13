const SanctumDesignLogo = () => (
  <div className="flex items-center">
    {/* Premium icon with refined details */}
    <svg 
      width="70" 
      height="70" 
      viewBox="0 0 70 70" 
      className="mr-4"
    >
      <defs>
        <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B0000" />
          <stop offset="50%" stopColor="#C41E3A" />
          <stop offset="100%" stopColor="#8B0000" />
        </linearGradient>
        <filter id="insetShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur"/>
          <feOffset in="blur" dx="1" dy="1" result="offsetBlur"/>
          <feComposite in="SourceGraphic" in2="offsetBlur" operator="out" result="inverse"/>
          <feFlood floodColor="#000000" floodOpacity="0.5" result="color"/>
          <feComposite in="color" in2="inverse" operator="in" result="shadow"/>
          <feComposite in="shadow" in2="SourceGraphic" operator="over"/>
        </filter>
      </defs>
      
      {/* Luxury frame with embossed effect */}
      <rect 
        x="5" y="5" 
        width="60" height="60" 
        rx="8" ry="8"
        fill="#F8F4E9" 
        stroke="url(#redGradient)" 
        strokeWidth="2.5"
        filter="url(#insetShadow)"
        className="drop-shadow-md"
      />
      
      {/* Abstract design elements */}
      <rect 
        x="15" y="15" 
        width="40" height="40" 
        rx="4" ry="4"
        fill="none" 
        stroke="#5B4636" 
        strokeWidth="1.2"
        strokeOpacity="0.7"
      />
      
      {/* Red accent elements */}
      <path 
        d="M20 28 L50 28 M20 35 L50 35 M20 42 L50 42" 
        stroke="url(#redGradient)" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
      
      {/* Crest detail */}
      <path 
        d="M35 20 L40 25 L35 30 L30 25 Z" 
        fill="#8B0000" 
        stroke="#F8F4E9" 
        strokeWidth="1.2"
      />
    </svg>
    
    {/* Premium typography */}
    <div className="text-left leading-tight">
      <div 
        className="text-3xl font-bold"
        style={{ 
          color: '#5B4636',
          fontFamily: "'Playfair Display', serif",
          letterSpacing: '-0.5px',
          textShadow: '0px 1px 2px rgba(0,0,0,0.1)'
        }}
      >
        SANCTUM
      </div>
      <div 
        className="text-xl font-light tracking-widest mt-1"
        style={{ 
          color: '#8B0000',
          fontFamily: "'Montserrat', sans-serif",
          letterSpacing: '4px',
          fontWeight: 300
        }}
      >
        DESIGN
      </div>
      <div 
        className="w-16 h-0.5 mt-2 mx-auto"
        style={{ 
          background: 'linear-gradient(90deg, #F8F4E9, #8B0000, #F8F4E9)',
          opacity: 0.8
        }}
      ></div>
    </div>
  </div>
);

export default SanctumDesignLogo;