import type { SvgProps } from '.'

export const RightArrowIcon = (props: SvgProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="#211426"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 16.25L16.25 10L10 3.75"
        stroke="inherit"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.75 10H16.25"
        stroke="inherit"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
