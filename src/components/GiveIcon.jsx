export default function GiveIcon({ className }) {
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

      {/* Heart */}
      <path
        d="M110 148c-1.4 0-22-13.5-30-24.5-6.4-8.8-3-22.2 7.6-25.2 5.6-1.6 11.6.5 15.2 5.1 1.3 1.7 2.6 1.7 3.9 0 3.6-4.6 9.6-6.7 15.2-5.1 10.6 3 14 16.4 7.6 25.2C132 134.5 111.4 148 110 148z"
        fill="#3D217C"
      />

      {/* Soft gold accents */}
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
