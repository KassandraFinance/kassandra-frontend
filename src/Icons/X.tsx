import type { SvgProps } from '.'

export const XIcon = (props: SvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={33}
      height={30}
      fill="none"
      {...props}
    >
      <path
        fill="#fff"
        d="M25.534.5h4.908l-10.72 12.284L32.332 29.5H22.46l-7.735-10.14-8.85 10.14H.965l11.466-13.14L.333.5H10.46l6.99 9.266L25.534.5Zm-1.72 26.056h2.72L8.979 3.29H6.064l17.75 23.266Z"
      />
    </svg>
  )
}
