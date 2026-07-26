export default function GetInvolvedIcon({ className }) {
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

      {/* Center heart / connection */}
      <path
        d="M110 128c-1.2 0-18-11.2-24.5-20.2-5.2-7.2-2.4-18.2 6.2-20.6 4.6-1.3 9.5.4 12.4 4.2 1.1 1.4 2.1 1.4 3.2 0 2.9-3.8 7.8-5.5 12.4-4.2 8.6 2.4 11.4 13.4 6.2 20.6C128 116.8 111.2 128 110 128z"
        fill="#3D217C"
      />

      {/* Left person */}
      <circle cx="58" cy="78" r="16" fill="#5B3A9E" />
      <path
        d="M34 128c2.5-18 12.8-28 24-28s21.5 10 24 28"
        stroke="#5B3A9E"
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
      />

      {/* Right person */}
      <circle cx="162" cy="78" r="16" fill="#6B4BB0" />
      <path
        d="M138 128c2.5-18 12.8-28 24-28s21.5 10 24 28"
        stroke="#6B4BB0"
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
      />

      {/* Front person */}
      <circle cx="110" cy="62" r="18" fill="#3D217C" />
      <path
        d="M84 138c3-22 14.5-34 26-34s23 12 26 34"
        stroke="#3D217C"
        strokeWidth="16"
        strokeLinecap="round"
        fill="none"
      />

      {/* Linking arcs / community rings */}
      <path
        d="M48 150c18 18 46 28 62 28s44-10 62-28"
        stroke="#7B5BC4"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M62 164c14 10 34 16 48 16s34-6 48-16"
        stroke="#3D217C"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.35"
      />

      {/* Soft spark accents */}
      <circle cx="42" cy="48" r="4" fill="#F5C542" />
      <circle cx="178" cy="52" r="3.5" fill="#F5C542" opacity="0.85" />
      <circle cx="188" cy="118" r="3" fill="#7B5BC4" opacity="0.7" />
      <circle cx="32" cy="112" r="2.5" fill="#7B5BC4" opacity="0.6" />
    </svg>
  )
}
