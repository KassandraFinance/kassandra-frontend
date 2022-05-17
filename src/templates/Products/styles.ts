import styled from 'styled-components'
import theme from '../../styles/theme'

export const Product = styled.section`
  display: grid;
  grid-template-columns: minmax(300px, 584px) 448px;
  gap: 0 108px;

  margin: 0 auto;
  max-width: 1140px;
  max-height: 100%;
  margin-top: ${theme.spacings.space32};

  @media (max-width: 1200px) {
    padding: 0 30px;
  }
  @media (max-width: 1140px) {
    gap: 0 60px;
  }
  @media (max-width: 960px) {
    display: flex;
    flex-direction: column-reverse;
  }
  @media (max-width: 400px) {
    padding: 0 16px;
  }
`

export const ProductDetails = styled.div`
  margin-bottom: 120px;
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
  gap: 20px;

  max-width: 440px;

  ${props => props.introMobile && `
    display: none;
    h1 {
      font-size: 18px;
    }
    img {
      width: 40px;
    }
    @media (max-width: 960px) {
      display: grid;
      grid-template-columns: 40px auto;
      padding: 0 30px;
      gap: 1.6rem;
      max-width: 100%;
      margin: 32px 0;
    }
    @media (max-width: 400px) {
      padding: 0 16px;
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
    padding: 8px 12px;

    font-size: ${theme.font.sizes.font12};
    font-weight: ${theme.font.weight.light};

    background-color: rgba(0, 0, 0, 0.19);
    border-radius: 10px;

    @media (max-width: 768px) {
      font-size: 10px;
    }
  }
`
interface INameAndSymbolProps {
  introMobile?: boolean;
}

// prettier-ignore
export const NameAndSymbol = styled.div<INameAndSymbolProps>`
  display: flex;
  align-items: flex-start;
  gap: 1.6rem;

  @media (max-width: 570px) {
    align-items: center;
  }

  h1 {
    font-size: ${theme.font.sizes.font24};
    font-weight: ${theme.font.weight.light};

    @media (max-width: 768px) {
      font-size: ${theme.font.sizes.font18}
    }

  }

  .circle {
    display: grid;
    place-items: center;
    padding: 0.8rem;

    background: #3C3E4A;
    border-radius: 50%;
    border: none;

    cursor: pointer;
  }
`

export const Line = styled.div`
  background-color: rgba(255, 255, 255, 0.1);

  width: 100%;
  height: 1px;
  margin: ${theme.spacings.space24} 0;

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
  gap: 22px;

  max-width: 100%;
`

export const IndexData = styled.div`
  span {
    font-size: ${theme.font.sizes.font12};
    text-transform: uppercase;

    display: flex;
    align-items: center;

    img {
      margin-left: 6px;
    }
  }

  h2 {
    font-size: ${theme.font.sizes.font18};
    font-weight: ${theme.font.weight.medium};

    margin-top: ${theme.spacings.space8};
  }
`

export const Tooltip = styled.div`
  margin-top: 2px;
  margin-left: 6px;
  img {
    width: 14px;
  }
`
