import React from "react";

export default function TwitterIcon({ className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`w-6 h-6 block ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M22 5.8c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.3 1.7-2.2-.8.5-1.7.8-2.6 1A4.2 4.2 0 0015.5 4c-2.3 0-4.2 1.9-4.2 4.2 0 .3 0 .6.1.9-3.5-.2-6.6-1.8-8.7-4.3-.4.7-.6 1.4-.6 2.2 0 1.5.8 2.9 2 3.7-.7 0-1.3-.2-1.9-.5v.1c0 2.1 1.5 3.8 3.4 4.2-.4.1-.8.2-1.2.2-.3 0-.6 0-.9-.1.6 1.8 2.3 3.1 4.3 3.2A8.5 8.5 0 012 19.5 12 12 0 008.5 21c7.8 0 12-6.5 12-12v-.5c.8-.6 1.5-1.3 2-2.2z" />
    </svg>
  );
}