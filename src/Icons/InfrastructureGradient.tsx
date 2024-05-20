import { SvgProps } from '.'

export const InfrastructureGradient = (props: SvgProps) => {
  const linearGradientId = Math.random().toString()

  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.4326 13.9722C22.8136 13.4061 23.7865 12.0469 23.7865 10.4601C23.7865 8.365 22.0906 6.66663 19.9985 6.66663C17.9065 6.66663 16.2106 8.365 16.2106 10.4601C16.2106 12.0406 17.1758 13.3953 18.5481 13.9655V18.1954L14.9407 20.3037C14.4976 20.5627 14.2252 21.038 14.2252 21.5519V25.4058L9.90004 27.8821C9.79596 27.9417 9.7021 28.0123 9.61909 28.0916C8.95229 27.5054 8.07819 27.15 7.12119 27.15C5.02917 27.15 3.33325 28.8484 3.33325 30.9435C3.33325 33.0385 5.02917 34.7369 7.12119 34.7369C9.21321 34.7369 10.9091 33.0385 10.9091 30.9435C10.9091 30.8126 10.9025 30.6833 10.8896 30.5559C11.0408 30.5265 11.1899 30.4722 11.3312 30.3914L15.3444 28.0937L19.2675 30.3865C19.7165 30.649 20.2718 30.649 20.7209 30.3865L24.6399 28.096L28.6491 30.3914C28.7966 30.4758 28.9527 30.5313 29.1109 30.5596C29.0982 30.6858 29.0917 30.8139 29.0917 30.9435C29.0917 33.0385 30.7876 34.7369 32.8797 34.7369C34.9717 34.7369 36.6676 33.0385 36.6676 30.9435C36.6676 28.8484 34.9717 27.15 32.8797 27.15C31.9175 27.15 31.0391 27.5093 30.371 28.1011C30.2856 28.0179 30.1884 27.9441 30.0802 27.8821L25.7632 25.4105V21.5519C25.7632 21.038 25.4907 20.5627 25.0476 20.3037L21.4326 18.1909V13.9722ZM21.5131 10.461C21.5131 11.299 20.8347 11.9784 19.9979 11.9784C19.1611 11.9784 18.4827 11.299 18.4827 10.461C18.4827 9.62299 19.1611 8.94364 19.9979 8.94364C20.8347 8.94364 21.5131 9.62299 21.5131 10.461ZM19.9942 20.696L17.1097 22.3819V25.7796L19.9942 27.4654L22.8787 25.7796V22.3819L19.9942 20.696ZM7.1203 32.4617C7.9571 32.4617 8.63547 31.7824 8.63547 30.9444C8.63547 30.1063 7.9571 29.427 7.1203 29.427C6.28349 29.427 5.60512 30.1063 5.60512 30.9444C5.60512 31.7824 6.28349 32.4617 7.1203 32.4617ZM34.3939 30.9444C34.3939 31.7824 33.7156 32.4618 32.8788 32.4618C32.042 32.4618 31.3636 31.7824 31.3636 30.9444C31.3636 30.1064 32.042 29.427 32.8788 29.427C33.7156 29.427 34.3939 30.1064 34.3939 30.9444Z"
        fill="url(#paint0_linear_3204_7432)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3204_7432"
          x1="19.9964"
          y1="34.7426"
          x2="19.9964"
          y2="6.66948"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFBF00" />
          <stop offset="1" stopColor="#E843C4" />
        </linearGradient>
      </defs>
    </svg>
  )
}