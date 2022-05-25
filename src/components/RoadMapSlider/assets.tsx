import * as S from './styles'

interface Colors {
  done: string;
  soon: string;
  next: string;
}

export const colors: Colors = {
  done: '#5ee56b',
  soon: '#ffbf008b',
  next: '#676767'
}

interface Icons {
  done: JSX.Element;
  soon: JSX.Element;
  next: JSX.Element;
}

export const icons: Icons = {
  done: (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_6838_12296)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.84615 14C3.84615 8.39219 8.39219 3.84615 14 3.84615C19.6078 3.84615 24.1538 8.39219 24.1538 14C24.1538 19.6078 19.6078 24.1538 14 24.1538C8.39219 24.1538 3.84615 19.6078 3.84615 14ZM14 2C7.37258 2 2 7.37258 2 14C2 20.6274 7.37258 26 14 26C20.6274 26 26 20.6274 26 14C26 7.37258 20.6274 2 14 2ZM19.7947 10.3359C19.9802 10.1314 19.9648 9.81517 19.7603 9.62965C19.5557 9.44413 19.2395 9.45954 19.054 9.66408L12.6243 16.7528L9.04459 13.3699C8.84389 13.1803 8.52743 13.1892 8.33777 13.3899C8.1481 13.5906 8.15705 13.9071 8.35775 14.0967L11.9375 17.4796C12.3447 17.8644 12.9886 17.8396 13.365 17.4246L19.7947 10.3359Z"
          fill="#2CE878"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.84615 14C3.84615 8.39219 8.39219 3.84615 14 3.84615C19.6078 3.84615 24.1538 8.39219 24.1538 14C24.1538 19.6078 19.6078 24.1538 14 24.1538C8.39219 24.1538 3.84615 19.6078 3.84615 14ZM14 2C7.37258 2 2 7.37258 2 14C2 20.6274 7.37258 26 14 26C20.6274 26 26 20.6274 26 14C26 7.37258 20.6274 2 14 2ZM19.7947 10.3359C19.9802 10.1314 19.9648 9.81517 19.7603 9.62965C19.5557 9.44413 19.2395 9.45954 19.054 9.66408L12.6243 16.7528L9.04459 13.3699C8.84389 13.1803 8.52743 13.1892 8.33777 13.3899C8.1481 13.5906 8.15705 13.9071 8.35775 14.0967L11.9375 17.4796C12.3447 17.8644 12.9886 17.8396 13.365 17.4246L19.7947 10.3359Z"
        fill="#2CE878"
      />
      <defs>
        <filter
          id="filter0_f_6838_12296"
          x="0"
          y="0"
          width="28"
          height="28"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="1"
            result="effect1_foregroundBlur_6838_12296"
          />
        </filter>
      </defs>
    </svg>
  ),
  soon: (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_6838_12261)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.84615 14C3.84615 8.39219 8.39219 3.84615 14 3.84615C19.6078 3.84615 24.1538 8.39219 24.1538 14C24.1538 19.6078 19.6078 24.1538 14 24.1538C8.39219 24.1538 3.84615 19.6078 3.84615 14ZM14 2C7.37258 2 2 7.37258 2 14C2 20.6274 7.37258 26 14 26C20.6274 26 26 20.6274 26 14C26 7.37258 20.6274 2 14 2ZM17.1868 19.2526C17.5207 19.5865 18.0621 19.5865 18.396 19.2526C18.7297 18.9189 18.73 18.378 18.3966 18.044L14.7143 14.3543V7.85714C14.7143 7.38376 14.3305 7 13.8571 7C13.3838 7 13 7.38376 13 7.85714V14.4444C13 14.8422 13.158 15.2237 13.4393 15.5051L17.1868 19.2526Z"
          fill="#FFBF00"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.84615 14C3.84615 8.39219 8.39219 3.84615 14 3.84615C19.6078 3.84615 24.1538 8.39219 24.1538 14C24.1538 19.6078 19.6078 24.1538 14 24.1538C8.39219 24.1538 3.84615 19.6078 3.84615 14ZM14 2C7.37258 2 2 7.37258 2 14C2 20.6274 7.37258 26 14 26C20.6274 26 26 20.6274 26 14C26 7.37258 20.6274 2 14 2ZM17.1868 19.2526C17.5207 19.5865 18.0621 19.5865 18.396 19.2526C18.7297 18.9189 18.73 18.378 18.3966 18.044L14.7143 14.3543V7.85714C14.7143 7.38376 14.3305 7 13.8571 7C13.3838 7 13 7.38376 13 7.85714V14.4444C13 14.8422 13.158 15.2237 13.4393 15.5051L17.1868 19.2526Z"
        fill="#FFBF00"
      />
      <defs>
        <filter
          id="filter0_f_6838_12261"
          x="0"
          y="0"
          width="28"
          height="28"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="1"
            result="effect1_foregroundBlur_6838_12261"
          />
        </filter>
      </defs>
    </svg>
  ),
  next: (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_6838_12272)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.84615 14C3.84615 8.39219 8.39219 3.84615 14 3.84615C19.6078 3.84615 24.1538 8.39219 24.1538 14C24.1538 19.6078 19.6078 24.1538 14 24.1538C8.39219 24.1538 3.84615 19.6078 3.84615 14ZM14 2C7.37258 2 2 7.37258 2 14C2 20.6274 7.37258 26 14 26C20.6274 26 26 20.6274 26 14C26 7.37258 20.6274 2 14 2ZM17.1868 19.2526C17.5207 19.5865 18.0621 19.5865 18.396 19.2526C18.7297 18.9189 18.73 18.378 18.3966 18.044L14.7143 14.3543V7.85714C14.7143 7.38376 14.3305 7 13.8571 7C13.3838 7 13 7.38376 13 7.85714V14.4444C13 14.8422 13.158 15.2237 13.4393 15.5051L17.1868 19.2526Z"
          fill="#676767"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.84615 14C3.84615 8.39219 8.39219 3.84615 14 3.84615C19.6078 3.84615 24.1538 8.39219 24.1538 14C24.1538 19.6078 19.6078 24.1538 14 24.1538C8.39219 24.1538 3.84615 19.6078 3.84615 14ZM14 2C7.37258 2 2 7.37258 2 14C2 20.6274 7.37258 26 14 26C20.6274 26 26 20.6274 26 14C26 7.37258 20.6274 2 14 2ZM17.1868 19.2526C17.5207 19.5865 18.0621 19.5865 18.396 19.2526C18.7297 18.9189 18.73 18.378 18.3966 18.044L14.7143 14.3543V7.85714C14.7143 7.38376 14.3305 7 13.8571 7C13.3838 7 13 7.38376 13 7.85714V14.4444C13 14.8422 13.158 15.2237 13.4393 15.5051L17.1868 19.2526Z"
        fill="#676767"
      />
      <defs>
        <filter
          id="filter0_f_6838_12272"
          x="0"
          y="0"
          width="28"
          height="28"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="1"
            result="effect1_foregroundBlur_6838_12272"
          />
        </filter>
      </defs>
    </svg>
  )
}

export const SlickArrowLeft = ({ ...props }) => (
  <S.SlickArrowButton {...props} aria-hidden="true" type="button">
    <img src="/assets/ArrowPrevious.svg" alt="" />
  </S.SlickArrowButton>
)
export const SlickArrowRight = ({ ...props }) => (
  <S.SlickArrowButton {...props} aria-hidden="true" type="button">
    <img src="/assets/ArrowNext.svg" alt="" />
  </S.SlickArrowButton>
)
