export default function CalendarIcon({ className }) {
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

      {/* Calendar body */}
      <rect x="54" y="68" width="112" height="100" rx="16" fill="#3D217C" />
      <rect x="54" y="68" width="112" height="32" rx="14" fill="#5B3A9E" />

      {/* Binding rings */}
      <rect x="78" y="56" width="12" height="28" rx="6" fill="#6B4BB0" />
      <rect x="130" y="56" width="12" height="28" rx="6" fill="#6B4BB0" />

      {/* Date grid */}
      <rect x="70" y="116" width="18" height="14" rx="4" fill="#F5C542" />
      <rect x="96" y="116" width="18" height="14" rx="4" fill="#EBE4F7" opacity="0.85" />
      <rect x="122" y="116" width="18" height="14" rx="4" fill="#EBE4F7" opacity="0.7" />
      <rect x="148" y="116" width="18" height="14" rx="4" fill="#EBE4F7" opacity="0.55" />

      <rect x="70" y="138" width="18" height="14" rx="4" fill="#EBE4F7" opacity="0.7" />
      <rect x="96" y="138" width="18" height="14" rx="4" fill="#F5C542" opacity="0.9" />
      <rect x="122" y="138" width="18" height="14" rx="4" fill="#EBE4F7" opacity="0.55" />
      <rect x="148" y="138" width="18" height="14" rx="4" fill="#EBE4F7" opacity="0.4" />

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
