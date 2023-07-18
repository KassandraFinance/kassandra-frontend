import type { SvgProps } from '.'

export const SearchIcon = (props: SvgProps) => {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="#FCFCFC"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_7395_92217)">
        <path
          d="M7.74479 8.35026C7.74479 10.6514 9.61027 12.5169 11.9115 12.5169C14.2126 12.5169 16.0781 10.6514 16.0781 8.35026C16.0781 6.04907 14.2126 4.18359 11.9115 4.18359C9.61027 4.18359 7.74479 6.04907 7.74479 8.35026Z"
          stroke="inherit"
          strokeWidth="1.5"
        />
        <path
          d="M8.99219 11.375L5.1224 15.2232"
          stroke="#inherit"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_7395_92217">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
