import React from "react";

export default function LinkedInIcon({ className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`w-6 h-6 block ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M6.94 6.5c0 1.24-1 2.25-2.25 2.25S2.44 7.74 2.44 6.5 3.44 4.25 4.69 4.25 6.94 5.26 6.94 6.5zM2.69 9h4v11h-4V9zm7 0h3.6v1.6h.05c.5-.95 1.7-2.05 3.5-2.05 3.75 0 4.45 2.45 4.45 5.65V20h-4v-5.9c0-1.4-.03-3.2-2-3.2-2 0-2.3 1.55-2.3 3.1V20h-4V9z" />
    </svg>
  );
}