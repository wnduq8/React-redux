import React from "react";

export default function CartIcon({ width, height }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.69 8L6.34 2.31C6.02 0.95 4.81 0 3.42 0H0V2H3.42C3.88 2 4.29 2.32 4.39 2.77L8.84 21.47C9.06 22.37 9.86 23 10.79 23L27.34 22.04C28.2 21.99 28.93 21.4 29.15 20.57L31.96 10.26L32 8H7.69ZM27.22 20.04L11 21H10.79L8.17 10H29.96L27.22 20.04ZM11 26C9.34 26 8 27.34 8 29C8 30.66 9.34 32 11 32C12.66 32 14 30.66 14 29C14 27.34 12.66 26 11 26ZM11 30C10.45 30 10 29.55 10 29C10 28.45 10.45 28 11 28C11.55 28 12 28.45 12 29C12 29.55 11.55 30 11 30ZM25 26C23.34 26 22 27.34 22 29C22 30.66 23.34 32 25 32C26.66 32 28 30.66 28 29C28 27.34 26.66 26 25 26ZM25 30C24.45 30 24 29.55 24 29C24 28.45 24.45 28 25 28C25.55 28 26 28.45 26 29C26 29.55 25.55 30 25 30Z"
        fill="white"
      />
    </svg>
  );
}
