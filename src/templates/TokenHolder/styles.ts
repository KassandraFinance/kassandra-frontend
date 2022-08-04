import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  background-color: #151117;
  background: url('/assets/images/1920-dao-bg.png'),
    url('/assets/images/1920-dao-bg.png');
  background-repeat: no-repeat;
  background-size: auto;
  background-position: left top;

  @media (max-width: 820px) {
    background: url('/assets/images/768px-dao-bg.png'),
      url('/assets/images/768px-dao-bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left top;
  }

  @media (max-width: 560px) {
    background: url('/assets/images/360px-dao-bg.png'),
      url('/assets/images/360px-dao-bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left top;
  }
`

export const Hero = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  width: 100%;
  max-width: 102rem;
  height: 67.2rem;

  margin: 0 auto;
  margin-top: 18rem;
  padding: 0 1.6rem;
  padding-top: 10rem;

  background-image: url('/assets/images/hero-token-holder.png');
  background-position: center;
  background-repeat: no-repeat;
  background-blend-mode: color-dodge;
  background-color: #151117;

  @media (max-width: 560px) {
    background-position: 55% 53%;
    background-size: 180%;
  }
`

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    max-width: 63rem;

    @media (max-width: 500px) {
      text-align: left;
      font-size: 2.4rem;
      line-height: 3.2rem;
    }
  }

  p {
    max-width: 60rem;

    @media (max-width: 500px) {
      text-align: left;
      font-size: 1.4rem;
      line-height: 2.4rem;
    }
  }
`

export const Dao = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  margin-bottom: 1.6rem;

  @media (max-width: 500px) {
    justify-content: flex-start;
  }

  div {
    height: 1px;
    width: 64px;
    background-color: ${({ theme }) => theme.colors.magenta};
  }

  span {
    color: ${({ theme }) => theme.colors.magenta};
    font-weight: ${({ theme }) => theme.font.weight.light};
    font-size: 1.6rem;
    line-height: 2rem;
    letter-spacing: 0.4rem;
  }
`

const headingModifiers = {
  '1': () => css`
    font-size: 4.8rem;
    line-height: 5rem;
    font-weight: 700;
  `,
  '2': () => css`
    font-weight: 700;
    font-size: 3.2rem;
    line-height: 3.5rem;
  `,
  '3': () => css`
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 3.2rem;
    letter-spacing: 0.05em;
  `,
  '4': () => css`
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 3.2rem;
    letter-spacing: 0.05em;
  `,
  '5': () => css`
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.2rem;
    letter-spacing: 0.02em;
  `
}

interface HeadingProps {
  level: '1' | '2' | '3' | '4' | '5';
}

// eslint-disable-next-line prettier/prettier
export const Heading =
  styled.h1 <
  HeadingProps >
  `
  ${({ level }) => css`
    ${!!level && headingModifiers[level]}
  `}
`

const displayModifiers = {
  '1': () => css`
    font-weight: 900;
    font-size: 64px;
    line-height: 72px;
  `,
  '2': () => css`
    font-weight: 900;
    font-size: 48px;
    line-height: 53px;
  `
}

interface DisplayProps {
  level: '1' | '2';
}

export const Display =
  styled.h1 <
  DisplayProps >
  `
  ${({ level }) => css`
    ${!!level && displayModifiers[level]}

    margin-bottom: 2.4rem;

    color: #ffffff;
    text-align: center;
  `}
`

export const Description = styled.p`
  color: #ffffff;

  font-weight: ${({ theme }) => theme.font.weight.light};
  font-size: 1.6rem;
  line-height: 2.4rem;
  text-align: center;
`

export const Button = styled.a`
  display: flex;
  padding: 1.6rem 3.2rem;
  gap: 1.6rem;

  max-width: 22.2rem;
  width: 100%;
  height: 4.8rem;
  margin: 0 auto;

  background: linear-gradient(93.84deg, #e843c4 0.12%, #0c3ddc 100%);
  border-radius: 0.4rem;
  font-size: 1.6rem;
  cursor: pointer;
`

export const CommunityTenets = styled.section`
  width: 112rem;
  margin: 4rem auto;

  position: relative;

  .connector {
    position: absolute;
    left: 12rem;
    bottom: 6.5rem;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 3.4rem;

  margin-top: 8rem;
`

export const CommunityTenet = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;

  height: 14.5rem;
  padding: 2.4rem;

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.04) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  backdrop-filter: blur(1.86rem);
  border-radius: 1.7rem;

  &:nth-child(1) {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }

  &:nth-child(2) {
    grid-column: 2 / 4;
    grid-row: 2 / 3;
  }

  &:nth-child(3) {
    grid-column: 3 / 5;
    grid-row: 3 / 4;
    margin-left: -5rem;
  }
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 7.2rem;
  height: 7.2rem;

  background: rgba(252, 252, 252, 0.05);
  border-radius: 50%;
`

interface Caption {
  color?: 'amber' | 'cyan' | 'magenta';
}

// eslint-disable-next-line prettier/prettier
export const Caption =
  styled.span <
  Caption >
  `
  ${({ theme, color }) => css`
    color: ${!!color && theme.colors[color]}};

    font-size: 1.4rem;
    font-weight: 300;
    line-height: 1.6rem;
    letter-spacing: 0.22rem;
    text-transform: uppercase;
  `}
`

export const CommunityTenetText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  flex: 1;

  p {
    text-align: left;
  }
`

export const SubHeading = styled.h3`
  font-weight: 500;
  font-size: 20px;
  line-height: 110%;
  /* identical to box height, or 22px */

  letter-spacing: 0.02em;

  color: #ffffff;
`
