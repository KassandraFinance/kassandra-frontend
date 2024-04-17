import * as React from 'react'
import { SvgProps } from '.'

export default function MapPinIcon(props: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={17}
      height={23}
      fill="none"
      {...props}
    >
      <path
        fill="url(#a)"
        fillRule="evenodd"
        d="M8.4.332c4.548 0 8.07 3.564 8.07 8.772 0 3.473-2.744 7.805-8.235 12.998C2.745 16.909 0 12.576 0 9.104 0 3.896 3.852.332 8.4.332Zm-.133 5.737a2.667 2.667 0 1 0 0 5.333 2.667 2.667 0 0 0 0-5.333Z"
        clipRule="evenodd"
      />
      <defs>
        <linearGradient
          id="a"
          x1={8.233}
          x2={8.233}
          y1={22.106}
          y2={0.334}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFBF00" />
          <stop offset={1} stopColor="#E843C4" />
        </linearGradient>
      </defs>
    </svg>
  )
}
