import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Token = styled.section`
  margin: 0 auto 16rem;
  padding: 0 3.2rem;

  text-align: center;

  @media (max-width: 960px) {
    padding: 0 3.2rem;
  }

  span {
    display: flex;
    max-width: 50rem;
    margin: 0 auto;

    font-size: ${theme.font.sizes.font16};
    line-height: 155%;
  }

  h1 {
    max-width: 62rem;
    margin: auto;
    margin-bottom: ${theme.spacings.space24};

    font-size: ${theme.font.sizes.font48};
    font-weight: ${theme.font.weight.black};
    line-height: 104%;

    @media (max-width: 960px) {
      font-size: ${theme.font.sizes.font36};
    }

    @media (max-width: 450px) {
      font-size: ${theme.font.sizes.font24};
    }
  }

  p {
    margin: 0 auto;

    color: ${theme.colors.cyan};
    font-size: ${theme.font.sizes.font14};
    letter-spacing: 0.4rem;
    text-align: center;
  }
`
export const Divider = styled.div`
  max-width: 10rem;
  margin: 2.5rem auto;

  border: 0.1rem solid ${theme.colors.cyan};
`

export const ComingSoon = styled.div`
  position: relative;

  max-width: 49rem;
  height: 100%;

  background: rgba(31, 31, 31, 0.72);
  border-radius: 1.2rem;
  box-shadow: 0px 0.4rem 6.9rem -1.7rem rgba(0, 0, 0, 0, 51);

  @media (max-width: 960px) {
    display: none;
  }
`

export const ComingSoonContent = styled.div`
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  margin-right: -50%;

  color: transparent;

  background: linear-gradient(0deg, #ffbf00 -0.2%, #e843c4 30%);
  -webkit-background-clip: text;
  background-clip: text;
  transform: translate(-50%, -50%);

  span {
    height: 6rem;
    margin-top: 1.8rem;

    font-size: ${theme.font.sizes.font48};
    font-weight: ${theme.font.weight.light};
    line-height: 104%;
  }
`

export const PoolCardContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 960px) {
    > div:nth-child(odd) {
      flex-direction: row-reverse;
    }
  }
`
