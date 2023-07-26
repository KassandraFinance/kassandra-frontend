import { SvgProps } from '.'

export const LineGradient = (props: SvgProps) => {
  return (
    <svg viewBox="0 0 2 365" fill="none" {...props}>
      <path
        d="M1 0L0.999984 365"
        stroke="url(#paint0_linear_18442_13786)"
        strokeWidth="1.5"
        fill="inherit"
      />
      <defs>
        <linearGradient
          id="paint0_linear_18442_13786"
          x1="0.999999"
          y1="21.2263"
          x2="38.4479"
          y2="25.3552"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.273958" stopOpacity="0" />
          <stop offset="0.628125" stopColor="#E843C4" />
          <stop offset="1" stopColor="#0029B0" />
        </linearGradient>
      </defs>
    </svg>
  )
}
