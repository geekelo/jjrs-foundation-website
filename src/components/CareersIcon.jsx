export default function CareersIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="110" cy="110" r="104" fill="#EBE4F7" />
      <circle cx="110" cy="110" r="78" fill="#F5F2FB" />
      <circle cx="110" cy="110" r="56" fill="#3D217C" opacity="0.08" />

      {/* Briefcase body */}
      <rect
        x="58"
        y="92"
        width="104"
        height="72"
        rx="14"
        fill="#3D217C"
      />
      <rect
        x="58"
        y="92"
        width="104"
        height="22"
        rx="10"
        fill="#5B3A9E"
      />

      {/* Handle */}
      <path
        d="M86 92V78c0-10 8-18 24-18s24 8 24 18v14"
        stroke="#6B4BB0"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />

      {/* Latch */}
      <rect x="98" y="118" width="24" height="16" rx="5" fill="#F5C542" />
      <circle cx="110" cy="126" r="3" fill="#3D217C" />

      {/* Soft accents */}
      <circle cx="42" cy="52" r="4" fill="#F5C542" />
      <circle cx="176" cy="48" r="3.5" fill="#F5C542" opacity="0.85" />
      <circle cx="186" cy="128" r="3" fill="#7B5BC4" opacity="0.7" />
      <circle cx="34" cy="118" r="2.5" fill="#7B5BC4" opacity="0.6" />

      {/* Service rings */}
      <path
        d="M52 168c16 14 40 22 58 22s42-8 58-22"
        stroke="#7B5BC4"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  )
}
