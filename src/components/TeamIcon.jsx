export default function TeamIcon({ className }) {
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

      {/* Left person */}
      <circle cx="62" cy="84" r="15" fill="#6B4BB0" />
      <path
        d="M40 138c2.2-17 11.5-26 22-26s19.8 9 22 26"
        stroke="#6B4BB0"
        strokeWidth="13"
        strokeLinecap="round"
        fill="none"
      />

      {/* Right person */}
      <circle cx="158" cy="84" r="15" fill="#5B3A9E" />
      <path
        d="M136 138c2.2-17 11.5-26 22-26s19.8 9 22 26"
        stroke="#5B3A9E"
        strokeWidth="13"
        strokeLinecap="round"
        fill="none"
      />

      {/* Center person */}
      <circle cx="110" cy="72" r="18" fill="#3D217C" />
      <path
        d="M84 146c2.8-20 13.5-32 26-32s23.2 12 26 32"
        stroke="#3D217C"
        strokeWidth="15"
        strokeLinecap="round"
        fill="none"
      />

      {/* Soft accents */}
      <circle cx="42" cy="48" r="4" fill="#F5C542" />
      <circle cx="178" cy="52" r="3.5" fill="#F5C542" opacity="0.85" />
      <circle cx="188" cy="120" r="3" fill="#7B5BC4" opacity="0.7" />
      <circle cx="32" cy="116" r="2.5" fill="#7B5BC4" opacity="0.6" />

      <path
        d="M50 164c16 14 40 22 60 22s44-8 60-22"
        stroke="#7B5BC4"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  )
}
