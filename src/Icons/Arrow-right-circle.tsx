import type { SvgProps } from './'

export const ArrowRightCircle = (props: SvgProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
        stroke="#FCFCFC"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 10.7992L10.8 7.99922L8 5.19922"
        stroke="#FCFCFC"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.19922 8H10.7992"
        stroke="#FCFCFC"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
