import { SvgProps } from '.'

export const KacyGradientIcon = (props: SvgProps) => {
  const linearGradientId = Math.random().toString()

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <circle
        cx="12"
        cy="12"
        r="12"
        fill={`url(#paint0_linear_${linearGradientId})`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9973 3.38698C7.23465 3.38704 3.375 7.37084 3.375 12.2868C3.375 14.9605 4.51619 17.3587 6.32561 18.9928L10.3769 15.4678H6.27702C5.83494 15.4678 5.48321 15.0971 5.48321 14.6485C5.48321 14.1923 5.84234 13.8292 6.27702 13.8292H17.723C18.1651 13.8292 18.5168 14.2 18.5168 14.6485C18.5168 15.1047 18.1577 15.4678 17.723 15.4678H14.1142L17.8423 18.8409C19.5518 17.2148 20.625 14.8832 20.625 12.2922C20.625 7.37647 16.7602 3.39237 11.9973 3.38698ZM3 12.2868C3 7.15716 7.02752 3 11.9974 3H11.9976C16.9671 3.00556 21 7.16241 21 12.2922C21 15.06 19.8259 17.5444 17.9687 19.2447L17.845 19.3579L13.1177 15.0809H17.723C17.9526 15.0809 18.1418 14.8889 18.1418 14.6485C18.1418 14.4114 17.9558 14.2162 17.723 14.2162H6.27702C6.0474 14.2162 5.85821 14.4082 5.85821 14.6485C5.85821 14.8856 6.04425 15.0809 6.27702 15.0809H11.4035L6.32443 19.5L6.20357 19.3948C4.24407 17.689 3 15.1379 3 12.2868Z"
        fill="#1B1D22"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9973 3.38698C7.23465 3.38704 3.375 7.37084 3.375 12.2868C3.375 14.9605 4.51619 17.3587 6.32561 18.9928L10.3769 15.4678H6.27702C5.83494 15.4678 5.48321 15.0971 5.48321 14.6485C5.48321 14.1923 5.84234 13.8292 6.27702 13.8292H17.723C18.1651 13.8292 18.5168 14.2 18.5168 14.6485C18.5168 15.1047 18.1577 15.4678 17.723 15.4678H14.1142L17.8423 18.8409C19.5518 17.2148 20.625 14.8832 20.625 12.2922C20.625 7.37647 16.7602 3.39237 11.9973 3.38698ZM3 12.2868C3 7.15716 7.02752 3 11.9974 3H11.9976C16.9671 3.00556 21 7.16241 21 12.2922C21 15.06 19.8259 17.5444 17.9687 19.2447L17.845 19.3579L13.1177 15.0809H17.723C17.9526 15.0809 18.1418 14.8889 18.1418 14.6485C18.1418 14.4114 17.9558 14.2162 17.723 14.2162H6.27702C6.0474 14.2162 5.85821 14.4082 5.85821 14.6485C5.85821 14.8856 6.04425 15.0809 6.27702 15.0809H11.4035L6.32443 19.5L6.20357 19.3948C4.24407 17.689 3 15.1379 3 12.2868Z"
        fill="#1B1D22"
        stroke="#1B1D22"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <defs>
        <linearGradient
          id={`paint0_linear_${linearGradientId}`}
          x1="0"
          y1="13.3151"
          x2="24"
          y2="13.3151"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E843C4" />
          <stop offset="1" stopColor="#FFBF00" />
        </linearGradient>
      </defs>
    </svg>
  )
}
