import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Products = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10rem;

  max-width: 96rem;
  margin: 0 auto 16rem;
  padding: 0 ${theme.spacings.space32};

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 5rem;
    margin: 0 auto 8rem;
  }
`

export const TextWrapper = styled.div`
  h1 {
    margin-bottom: ${theme.spacings.space32};

    font-size: ${theme.font.sizes.font48};
    font-weight: ${theme.font.weight.black};
    line-height: 104%;
    text-align: left;

    @media (max-width: 960px) {
      font-size: ${theme.font.sizes.font36};
    }

    @media (max-width: 760px) {
      font-size: ${theme.font.sizes.font32};
    }

    @media (max-width: 450px) {
      font-size: ${theme.font.sizes.font24};
    }
  }

  p {
    margin: 0 auto;
    margin-bottom: ${theme.spacings.space24};

    font-size: ${theme.font.sizes.font14};
    line-height: 155%;
    color: ${theme.colors.amber};
    text-align: left;
    letter-spacing: 0.56rem;

    @media (max-width: 450px) {
      font-size: ${theme.font.sizes.font12};
    }
  }

  span {
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};
    line-height: 155%;
    text-align: left;

    @media (max-width: 760px) {
      text-align: center;
    }

    @media (max-width: 450px) {
      font-size: ${theme.font.sizes.font14};
    }
  }
`

export const Divider = styled.div`
  max-width: 10rem;
  margin-block: 4rem;

  border-bottom: 0.3rem;
  border-bottom-style: solid;
  border-bottom-color: #ffbf00;
  border-radius: 0.4rem;
`

export const Link = styled.a`
  display: flex;
  align-items: center;
  max-width: max-content;

  margin-bottom: 2rem;

  text-decoration: none;
  color: ${theme.colors.snow};

  transition: 0.15s;
  cursor: pointer;

  span {
    display: flex;
    margin-right: 2rem;
  }

  svg {
    margin-left: ${theme.spacings.space8};
  }

  &:hover {
    color: ${theme.colors.cyan};
    > svg {
      path {
        stroke: ${theme.colors.cyan};
      }
    }
  }
`

export const CardContainer = styled.div`
  display: grid;
  column-gap: 3.2rem;
  grid-template-columns: 1fr 1fr;
  justify-content: center;

  @media (max-width: 960px) {
    row-gap: 2.4rem;
  }

  p {
    margin-top: 2.6rem;
    margin-bottom: 1.2rem;

    font-size: ${theme.font.sizes.font14};
    color: ${theme.colors.amber};
    text-align: left;
    letter-spacing: 0.4rem;

    @media (max-width: 450px) {
      font-size: ${theme.font.sizes.font12};
      letter-spacing: 0;
    }
  }

  span {
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
    line-height: 122.5%;
    text-align: left;

    @media (max-width: 450px) {
      font-size: ${theme.font.sizes.font14};
      line-height: 100%;
    }
  }
`

export const Card = styled.div`
  margin: 0 auto;

  @media (max-width: 800px) {
    max-width: 25rem;
  }

  @media (max-width: 450px) {
    max-width: 13rem;
  }
`

export const IconWrapper = styled.div`
  display: table-cell;
  vertical-align: middle;
  margin-bottom: 2.6rem;
  max-width: auto;

  width: 7.8rem;
  height: 7.3rem;
  margin: auto;

  text-align: center;

  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 1.2rem;
`
