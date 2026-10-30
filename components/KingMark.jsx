export default function KingMark({ className = '', title = 'O Maestro' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 140"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="kingBlack" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#080706" />
          <stop offset="0.45" stopColor="#211b13" />
          <stop offset="0.7" stopColor="#050504" />
          <stop offset="1" stopColor="#16110b" />
        </linearGradient>
        <linearGradient id="kingGold" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#f4dfa3" />
          <stop offset="0.45" stopColor="#c99b45" />
          <stop offset="1" stopColor="#7c5520" />
        </linearGradient>
        <filter id="kingShadow" x="-30%" y="-20%" width="160%" height="160%">
          <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#000" floodOpacity="0.55" />
        </filter>
        <clipPath id="kingBodyClip">
          <rect x="44" y="3" width="12" height="24" rx="2" />
          <rect x="34" y="10" width="32" height="10" rx="2" />
          <path d="M31 28 C38 24 62 24 69 28 C76 34 76 44 67 49 C61 52 39 52 33 49 C24 44 24 34 31 28 Z" />
          <rect x="25" y="49" width="50" height="8" rx="4" />
          <path d="M40 57 C40 74 37 88 29 103 L71 103 C63 88 60 74 60 57 Z" />
          <rect x="21" y="101" width="58" height="8" rx="4" />
          <path d="M19 109 C14 112 12 118 15 123 C19 130 31 133 50 133 C69 133 81 130 85 123 C88 118 86 112 81 109 Z" />
          <rect x="14" y="126" width="72" height="10" rx="5" />
        </clipPath>
      </defs>

      <g filter="url(#kingShadow)">
        <g clipPath="url(#kingBodyClip)">
          <rect x="10" y="0" width="80" height="138" fill="url(#kingBlack)" />
          <path d="M20 18 C38 33 44 45 57 60 C66 71 66 89 81 107" fill="none" stroke="url(#kingGold)" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M75 20 C60 35 61 48 48 62 C39 72 43 84 31 96" fill="none" stroke="#d5a44f" strokeOpacity="0.9" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M25 75 C39 78 44 88 52 101 C56 107 66 111 74 123" fill="none" stroke="#8e6427" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M56 5 C54 17 48 28 47 39 C46 49 53 53 52 63" fill="none" stroke="#efd18b" strokeWidth="1.25" strokeLinecap="round" />
          <circle cx="39" cy="41" r="1.7" fill="#e3b964" />
          <circle cx="63" cy="89" r="1.3" fill="#c28d37" />
          <circle cx="34" cy="117" r="1.1" fill="#e7c172" />
        </g>

        <g fill="none" stroke="url(#kingGold)" strokeWidth="1.1" strokeOpacity="0.95">
          <rect x="44" y="3" width="12" height="24" rx="2" />
          <rect x="34" y="10" width="32" height="10" rx="2" />
          <path d="M31 28 C38 24 62 24 69 28 C76 34 76 44 67 49 C61 52 39 52 33 49 C24 44 24 34 31 28 Z" />
          <rect x="25" y="49" width="50" height="8" rx="4" />
          <path d="M40 57 C40 74 37 88 29 103 L71 103 C63 88 60 74 60 57 Z" />
          <rect x="21" y="101" width="58" height="8" rx="4" />
          <path d="M19 109 C14 112 12 118 15 123 C19 130 31 133 50 133 C69 133 81 130 85 123 C88 118 86 112 81 109 Z" />
          <rect x="14" y="126" width="72" height="10" rx="5" />
        </g>
      </g>
    </svg>
  )
}
