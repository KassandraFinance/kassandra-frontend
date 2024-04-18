import type { SvgProps } from '.'

export const MediumIcon = (props: SvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={33}
      height={32}
      fill="none"
      {...props}
    >
      <path
        fill="#FCFCFC"
        d="M18.103 16.243c0 4.552-3.679 8.242-8.218 8.242-4.538 0-8.218-3.69-8.218-8.242C1.667 11.69 5.347 8 9.885 8c4.54 0 8.218 3.69 8.218 8.243ZM27.12 16.243c0 4.285-1.84 7.76-4.11 7.76-2.269 0-4.109-3.475-4.109-7.76s1.84-7.76 4.11-7.76c2.269 0 4.108 3.474 4.108 7.76M30.807 16.243c0 3.838-.647 6.952-1.445 6.952s-1.445-3.113-1.445-6.952c0-3.84.647-6.952 1.445-6.952s1.445 3.112 1.445 6.952Z"
      />
    </svg>
  )
}
