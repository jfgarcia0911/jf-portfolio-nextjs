export default function TwirlIcon({ className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`w-6 h-6 block ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Spiral / Twirl path */}
      <path
        d="M12 2
           a10 10 0 1 0 10 10
           a6 6 0 1 1 -6 -6
           a2 2 0 1 0 -2 2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
