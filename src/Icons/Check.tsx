import type { SvgProps } from '.'

export const CheckIcon = (props: SvgProps) => {
  return (
    <svg
      viewBox="0 0 12 10"
      fill="none"
      stroke="white"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.5 1.5L4.2 8.5L1.5 5.875"
        stroke="inherit"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
