import React from "react";

export default function FacebookIcon({ className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`w-6 h-6 block ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.8c0-2.5 1.49-3.88 3.78-3.88 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7C18.34 21.15 22 17 22 12c0-5.52-4.48-10-10-10z" />
    </svg>
  );
}