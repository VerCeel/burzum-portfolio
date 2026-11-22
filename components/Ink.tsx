/** Hand-drawn SVG ink pieces. All server-rendered, no images needed. */

export function InkFilters() {
  return (
    <svg className="defs" aria-hidden="true" focusable="false">
      <defs>
        <filter id="dry" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="2" seed="7" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="3.2" />
        </filter>
        <filter id="wobble" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="3" seed="3" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="7" result="d" />
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="1" seed="11" result="n2" />
          <feDisplacementMap in="d" in2="n2" scale="2.2" />
        </filter>
      </defs>
    </svg>
  );
}

export function Gate() {
  return (
    <svg className="gate" viewBox="0 0 400 400" role="img" aria-label="Ink drawing of a gate inside a brush circle">
      <circle className="enso" cx="200" cy="196" r="148" pathLength={100} filter="url(#wobble)" />
      <g filter="url(#dry)" fill="currentColor">
        {/* upper roof */}
        <path d="M196 92h8v14h-8z" />
        <path d="M104 104c30 20 62 26 96 26s66-6 96-26c-18 30-52 42-96 43-44-1-78-13-96-43z" />
        <path d="M152 146h96v26h-96z" opacity=".92" />
        {/* main roof */}
        <path d="M22 132c52 34 112 42 178 42s126-8 178-42c-30 44-88 62-178 64-90-2-148-20-178-64z" />
        {/* beams */}
        <path d="M98 214h204v9H98zM112 240h176v5H112z" />
        {/* pillars */}
        <path d="M118 196h13v138h-13zM269 196h13v138h-13zM168 196h8v138h-8zM224 196h8v138h-8z" />
        <path d="M110 300h29v6h-29zM261 300h29v6h-29z" />
        {/* ground strokes */}
        <path d="M60 338c60-5 200-6 290-1-80 3-210 5-290 1zM30 348c90-4 240-5 330 0-100 3-240 4-330 0zM96 357c50-3 150-3 210 0-60 3-160 3-210 0z" opacity=".85" />
        {/* stones */}
        <ellipse cx="176" cy="334" rx="20" ry="9" />
        <ellipse cx="214" cy="336" rx="14" ry="7" />
        <ellipse cx="248" cy="338" rx="10" ry="5" />
        <ellipse cx="190" cy="372" rx="12" ry="6" />
        <ellipse cx="226" cy="384" rx="5" ry="3" />
        <circle cx="310" cy="352" r="1.6" />
        <circle cx="330" cy="344" r="1.2" />
        <circle cx="84" cy="352" r="1.4" />
      </g>
      <rect x="187" y="199" width="26" height="13" fill="var(--red)" filter="url(#dry)" />
    </svg>
  );
}

const flock: [number, number, number][] = [
  [20, 150, 1], [48, 128, 0.8], [70, 160, 0.7], [96, 110, 1.1], [120, 136, 0.7],
  [142, 84, 0.9], [150, 150, 0.6], [176, 104, 1], [198, 60, 0.8], [214, 124, 0.7],
  [236, 84, 1.1], [252, 40, 0.7], [268, 104, 0.8], [284, 24, 0.9], [292, 70, 0.6],
];

export function Birds({ className = "" }: { className?: string }) {
  return (
    <svg className={`birds ${className}`} viewBox="0 0 320 180" aria-hidden="true">
      {flock.map(([x, y, s], i) => (
        <path
          key={i}
          d="M0 0q3-5 7-1q4-5 8-1"
          transform={`translate(${x} ${y}) scale(${s}) rotate(${(i % 5) * 9 - 22})`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

export function Wanderer({ className = "" }: { className?: string }) {
  return (
    <svg className={`wanderer ${className}`} viewBox="0 0 40 70" aria-hidden="true">
      <g fill="currentColor">
        <path d="M6 14 20 5l14 9c-9 2-19 2-28 0z" />
        <circle cx="20" cy="17" r="4.5" />
        <path d="M13 21c-5 14-7 30-6 43h26c1-13-1-29-6-43-4 2-10 2-14 0z" />
        <path d="M15 64h4v5h-4zM22 64h4v5h-4z" />
      </g>
    </svg>
  );
}

export function Branch() {
  const blossoms: [number, number, number][] = [
    [212, 38, 4], [196, 60, 3], [170, 44, 3.5], [150, 76, 4], [128, 58, 3],
    [112, 96, 3.5], [88, 80, 3], [70, 112, 4], [52, 98, 2.5], [36, 128, 3],
    [160, 100, 2.5], [184, 84, 3], [100, 124, 2.5], [228, 62, 2.5],
  ];
  return (
    <svg className="branch" viewBox="0 0 260 180" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeLinecap="round" filter="url(#dry)">
        <path d="M260 20C214 30 176 52 140 78S72 118 24 136" strokeWidth="3.4" />
        <path d="M196 44c-8-12-18-18-30-20M150 72c2 14 8 24 18 32M110 98c-10-8-20-10-30-8M178 56c10 8 22 10 34 8M76 114c2 8 8 14 16 18" strokeWidth="1.6" />
      </g>
      {blossoms.map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill="var(--red)" opacity={0.55 + (i % 4) * 0.12} />
      ))}
    </svg>
  );
}

/** Lattice corner ornament, drawn for the top-left corner; flip it with CSS for the others. */
export function Fret({ className = "" }: { className?: string }) {
  return (
    <svg className={`fret ${className}`} viewBox="0 0 122 122" aria-hidden="true">
      <path d="M3 120V3h117M11 96V11h85M19 19h22v22H19zM31 31h20v20H31zM41 25h18V11M25 41v18H11" />
    </svg>
  );
}
