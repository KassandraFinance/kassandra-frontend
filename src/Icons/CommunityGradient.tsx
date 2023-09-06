import { SvgProps } from '.'

export const CommunityGradientIcon = (props: SvgProps) => {
  const linearGradientId = Math.random().toString()

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.64333 9.22222C10.2033 8.54444 11.0511 8.11111 12 8.11111C12.9489 8.11111 13.7967 8.54444 14.3567 9.22222C14.7254 9.66924 14.9593 10.2119 15.0313 10.7868C15.1033 11.3618 15.0103 11.9453 14.7632 12.4695C14.5161 12.9936 14.1251 13.4366 13.6357 13.7469C13.1464 14.0572 12.5789 14.222 11.9994 14.222C11.42 14.222 10.8525 14.0572 10.3631 13.7469C9.8738 13.4366 9.48276 12.9936 9.23566 12.4695C8.98856 11.9453 8.89557 11.3618 8.96756 10.7868C9.03955 10.2119 9.27353 9.66924 9.64222 9.22222H9.64333ZM16.1667 11.1667C16.1667 10.4644 15.9933 9.80222 15.6867 9.22222H20.3333C20.7754 9.22222 21.1993 9.39782 21.5118 9.71038C21.8244 10.0229 22 10.4469 22 10.8889V11.4444C22 13.2078 20.66 15.0133 18.3167 15.6489C18.0759 15.2163 17.7238 14.856 17.297 14.6051C16.8701 14.3543 16.384 14.2221 15.8889 14.2222H14.8333C15.2545 13.8326 15.5904 13.3599 15.8198 12.834C16.0493 12.3081 16.1674 11.7404 16.1667 11.1667ZM15.8889 15.3333C16.1079 15.3327 16.3249 15.3755 16.5274 15.459C16.7299 15.5426 16.9138 15.6653 17.0687 15.8202C17.2236 15.9751 17.3463 16.159 17.4299 16.3615C17.5134 16.564 17.5561 16.781 17.5556 17V17.5556C17.5556 19.7456 15.4889 22 12 22C8.51111 22 6.44444 19.7456 6.44444 17.5556V17C6.44386 16.781 6.48657 16.564 6.57012 16.3615C6.65367 16.159 6.77641 15.9751 6.93129 15.8202C7.08617 15.6653 7.27014 15.5426 7.47261 15.459C7.67509 15.3755 7.89208 15.3327 8.11111 15.3333H15.8889ZM2 11.4444C2 13.2078 3.34 15.0133 5.68333 15.6489C5.92415 15.2163 6.2762 14.856 6.70304 14.6051C7.12989 14.3543 7.61602 14.2221 8.11111 14.2222H9.16667C8.74552 13.8326 8.40963 13.3599 8.18016 12.834C7.95068 12.3081 7.83259 11.7404 7.83333 11.1667C7.83333 10.4644 8.00667 9.80222 8.31445 9.22222H3.66667C3.22464 9.22222 2.80072 9.39782 2.48816 9.71038C2.17559 10.0229 2 10.4469 2 10.8889V11.4444ZM10.6111 5.05556C10.6111 4.24517 10.2892 3.46798 9.71616 2.89495C9.14313 2.32192 8.36594 2 7.55556 2C6.74517 2 5.96798 2.32192 5.39495 2.89495C4.82192 3.46798 4.5 4.24517 4.5 5.05556C4.5 5.86594 4.82192 6.64313 5.39495 7.21616C5.96798 7.78919 6.74517 8.11111 7.55556 8.11111C8.36594 8.11111 9.14313 7.78919 9.71616 7.21616C10.2892 6.64313 10.6111 5.86594 10.6111 5.05556ZM19.5 5.05556C19.5 4.24517 19.1781 3.46798 18.605 2.89495C18.032 2.32192 17.2548 2 16.4444 2C15.6341 2 14.8569 2.32192 14.2838 2.89495C13.7108 3.46798 13.3889 4.24517 13.3889 5.05556C13.3889 5.86594 13.7108 6.64313 14.2838 7.21616C14.8569 7.78919 15.6341 8.11111 16.4444 8.11111C17.2548 8.11111 18.032 7.78919 18.605 7.21616C19.1781 6.64313 19.5 5.86594 19.5 5.05556Z"
        fill={`url(#paint0_linear_${linearGradientId})`}
      />
      <defs>
        <linearGradient
          id={`paint0_linear_${linearGradientId}`}
          x1="11.9976"
          y1="22.0041"
          x2="11.9976"
          y2="2.00203"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFBF00" />
          <stop offset="1" stopColor="#E843C4" />
        </linearGradient>
      </defs>
    </svg>
  )
}
