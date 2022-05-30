import styled from 'styled-components'
import theme from '../../styles/theme'

export const Product = styled.section`
  display: grid;
  grid-template-columns: minmax(30rem, 58.4rem) 44.8rem;
  gap: 0 10.8rem;

  margin: 0 auto;
  max-width: 114rem;
  max-height: 100%;
  margin-top: ${theme.spacings.space32};

  @media (max-width: 1200px) {
    padding: 0 3rem;
  }

  @media (max-width: 1140px) {
    gap: 0 6rem;
  }

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media (max-width: 400px) {
    padding: 0 1.6rem;
  }
`

export const ProductDetails = styled.div`
  margin-bottom: 12rem;

  .second-line {
    @media (max-width: 960px) {
      display: none;
    }
  }
`

interface IIntroProps {
  introMobile: boolean;
  introDesktop: boolean;
}

// prettier-ignore
export const Intro = styled.div<IIntroProps>`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  gap: 2rem;

  max-width: 44rem;

  ${props => props.introMobile && `
    display: none;

    h1 {
      font-size: 1.8rem;
    }

    img {
      width: 4rem;
    }

    @media (max-width: 960px) {
      display: grid;
      grid-template-columns: 4rem auto;
      gap: 1.6rem;

      padding: 0 3rem;
      max-width: 100%;
      margin: 3.2rem 0;
    }

    @media (max-width: 400px) {
      padding: 0 1.6rem;
    }
    `
  }

  ${props => props.introDesktop && `
    @media (max-width: 960px) {
      display: none;
    }
    `
  }
`

export const NameIndex = styled.div`
  p {
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.font12};
    text-transform: uppercase;
  }
`

export const SymbolAndMade = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  h3 {
    padding: 0.8rem 1.2rem;

    font-size: ${theme.font.sizes.font12};
    font-weight: ${theme.font.weight.light};

    background-color: rgba(0, 0, 0, 0.19);
    border-radius: 1rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`

interface INameAndSymbolProps {
  introMobile?: boolean;
}

// prettier-ignore
export const NameAndSymbol = styled.div<INameAndSymbolProps>`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  h1 {
    font-size: ${theme.font.sizes.font24};
    font-weight: ${theme.font.weight.light};

    @media (max-width: 768px) {
      font-size: ${theme.font.sizes.font18}
    }

  }

  .circle {
    display: flex;
    justify-content: center;
    align-items: center;

    background: rgba(255, 255, 255, 0);
    border-radius: 50%;
    border: none;

    cursor: pointer;
  }
`

export const Line = styled.div`
  width: 100%;
  height: 0.1rem;
  margin: ${theme.spacings.space24} 0;

  background-color: rgba(255, 255, 255, 0.1);

  @media (max-width: 960px) {
    width: calc(100vw - 60px);
    margin: ${theme.spacings.space8} 0;
  }

  @media (max-width: 400px) {
    width: calc(100vw - 30px);
  }
`

export const IntroCharts = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2.2rem;

  max-width: 100%;
`

export const IndexData = styled.div`
  span {
    display: flex;
    align-items: center;
    gap: 0.6rem;

    font-size: ${theme.font.sizes.font12};
    text-transform: uppercase;
  }

  h2 {
    font-size: ${theme.font.sizes.font18};
    font-weight: ${theme.font.weight.medium};

    margin-top: ${theme.spacings.space8};
  }
`

export const Tooltip = styled.div`
  width: 1.6rem;
  height: 1.6rem;
`
