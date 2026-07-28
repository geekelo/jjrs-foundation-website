export default function JournalIcon({ className }) {
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

      {/* Back page */}
      <rect x="68" y="58" width="84" height="108" rx="10" fill="#5B3A9E" />

      {/* Front open journal pages */}
      <path
        d="M52 66c0-6 4-10 10-10h38v116H62c-6 0-10-4-10-10V66z"
        fill="#3D217C"
      />
      <path
        d="M100 56h48c6 0 10 4 10 10v96c0 6-4 10-10 10h-48V56z"
        fill="#6B4BB0"
      />

      {/* Spine highlight */}
      <rect x="98" y="56" width="4" height="116" fill="#2A1658" opacity="0.35" />

      {/* Text lines — left page */}
      <rect x="64" y="78" width="26" height="5" rx="2.5" fill="#F5C542" />
      <rect x="64" y="92" width="28" height="4" rx="2" fill="#EBE4F7" opacity="0.7" />
      <rect x="64" y="104" width="24" height="4" rx="2" fill="#EBE4F7" opacity="0.55" />
      <rect x="64" y="116" width="28" height="4" rx="2" fill="#EBE4F7" opacity="0.45" />

      {/* Text lines — right page */}
      <rect x="112" y="78" width="30" height="5" rx="2.5" fill="#F5C542" />
      <rect x="112" y="92" width="28" height="4" rx="2" fill="#F5F2FB" opacity="0.75" />
      <rect x="112" y="104" width="32" height="4" rx="2" fill="#F5F2FB" opacity="0.55" />
      <rect x="112" y="116" width="26" height="4" rx="2" fill="#F5F2FB" opacity="0.4" />
      <rect x="112" y="128" width="30" height="4" rx="2" fill="#F5F2FB" opacity="0.35" />

      {/* Soft accents */}
      <circle cx="42" cy="52" r="4" fill="#F5C542" />
      <circle cx="176" cy="48" r="3.5" fill="#F5C542" opacity="0.85" />
      <circle cx="186" cy="128" r="3" fill="#7B5BC4" opacity="0.7" />
      <circle cx="34" cy="118" r="2.5" fill="#7B5BC4" opacity="0.6" />

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
