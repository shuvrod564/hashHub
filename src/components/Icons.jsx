import React from 'react'

export const ArrowRight  = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.2em"
    height="1.2em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#737373"
      d="M4 12h12.25L11 6.75l.66-.75 6.5 6.5-6.5 6.5-.66-.75L16.25 13H4z"
    />
  </svg>
)


export const ArrowLeft  = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.2em"
    height="1.2em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#737373"
      d="M19 13H6.75L12 18.25l-.66.75-6.5-6.5 6.5-6.5.66.75L6.75 12H19z"
    />
  </svg>
)

export const ArrowRightSmall  = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.2em"
    height="1.2em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 12h14m-6 6 6-6m-6-6 6 6"
    />
  </svg>
)