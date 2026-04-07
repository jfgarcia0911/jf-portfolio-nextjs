export default function LineIcon({ className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`w-6 h-6 block ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Horizontal line */}
      <line
        x1="4"
        y1="12"
        x2="20"
        y2="12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
