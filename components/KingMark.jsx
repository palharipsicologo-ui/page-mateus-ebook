export default function KingMark({ className = '', title = 'O Maestro' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 220 320"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="km-black" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#030303" />
          <stop offset="0.24" stopColor="#20170d" />
          <stop offset="0.48" stopColor="#050505" />
          <stop offset="0.72" stopColor="#281b0c" />
          <stop offset="1" stopColor="#030303" />
        </linearGradient>
        <linearGradient id="km-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff0ba" />
          <stop offset="0.34" stopColor="#d5a648" />
          <stop offset="0.72" stopColor="#8d5f1e" />
          <stop offset="1" stopColor="#f0cb72" />
        </linearGradient>
        <radialGradient id="km-shine" cx="31%" cy="22%" r="75%">
          <stop offset="0" stopColor="#fff" stopOpacity=".28" />
          <stop offset=".22" stopColor="#fff" stopOpacity=".08" />
          <stop offset=".56" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <filter id="km-shadow" x="-40%" y="-30%" width="180%" height="190%">
          <feDropShadow dx="0" dy="12" stdDeviation="9" floodColor="#000" floodOpacity=".7" />
        </filter>
        <clipPath id="km-body">
          <path d="M96 7 H124 V21 H138 V43 H124 V56 H96 V43 H82 V21 H96 Z" />
          <path d="M72 60 C82 52 138 52 148 60 C157 68 159 82 152 92 C145 102 132 108 110 108 C88 108 75 102 68 92 C61 82 63 68 72 60 Z" />
          <rect x="56" y="105" width="108" height="19" rx="9.5" />
          <path d="M80 124 C79 153 74 179 62 205 C56 219 49 231 44 243 H176 C171 231 164 219 158 205 C146 179 141 153 140 124 Z" />
          <rect x="43" y="237" width="134" height="20" rx="10" />
          <path d="M41 257 C28 264 24 279 30 289 C38 302 63 309 110 309 C157 309 182 302 190 289 C196 279 192 264 179 257 Z" />
          <rect x="27" y="292" width="166" height="20" rx="10" />
        </clipPath>
      </defs>

      <g filter="url(#km-shadow)">
        <g clipPath="url(#km-body)">
          <rect x="20" y="0" width="180" height="318" fill="url(#km-black)" />
          <rect x="20" y="0" width="180" height="318" fill="url(#km-shine)" />

          <path d="M52 22 C86 54 95 87 123 117 C149 145 145 183 174 218 C185 231 187 249 191 278" fill="none" stroke="url(#km-gold)" strokeWidth="5.6" strokeLinecap="round" />
          <path d="M162 35 C137 68 145 92 116 122 C91 149 99 173 73 208 C61 224 60 246 52 276" fill="none" stroke="#d9a84d" strokeWidth="4" strokeLinecap="round" />
          <path d="M48 176 C74 179 91 195 103 215 C116 238 135 246 160 273" fill="none" stroke="#7f5418" strokeWidth="3.3" strokeLinecap="round" />
          <path d="M121 2 C116 30 105 49 105 71 C105 89 116 99 113 120" fill="none" stroke="#f3d687" strokeWidth="3" strokeLinecap="round" />
          <path d="M73 92 C91 98 101 113 112 129" fill="none" stroke="#bd7d27" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M131 154 C147 167 156 184 164 204" fill="none" stroke="#f0c66c" strokeWidth="2.4" strokeLinecap="round" />
          <circle cx="78" cy="75" r="3.1" fill="#e8bd63" />
          <circle cx="138" cy="199" r="2.7" fill="#c7862d" />
          <circle cx="81" cy="267" r="2.5" fill="#f1cc75" />
          <circle cx="127" cy="42" r="2.1" fill="#b77924" />
        </g>

        <g fill="none" stroke="url(#km-gold)" strokeWidth="2.2" strokeOpacity=".95">
          <path d="M96 7 H124 V21 H138 V43 H124 V56 H96 V43 H82 V21 H96 Z" />
          <path d="M72 60 C82 52 138 52 148 60 C157 68 159 82 152 92 C145 102 132 108 110 108 C88 108 75 102 68 92 C61 82 63 68 72 60 Z" />
          <rect x="56" y="105" width="108" height="19" rx="9.5" />
          <path d="M80 124 C79 153 74 179 62 205 C56 219 49 231 44 243 H176 C171 231 164 219 158 205 C146 179 141 153 140 124 Z" />
          <rect x="43" y="237" width="134" height="20" rx="10" />
          <path d="M41 257 C28 264 24 279 30 289 C38 302 63 309 110 309 C157 309 182 302 190 289 C196 279 192 264 179 257 Z" />
          <rect x="27" y="292" width="166" height="20" rx="10" />
        </g>
      </g>
    </svg>
  )
}
