import styled from 'styled-components'
import theme from '../../../styles/theme'

export const SubscribeContainer = styled.div`
  position: relative;
`

export const SubscribeBacground = styled.div`
  position: absolute;
  bottom: -50rem;
  left: 0;
  right: 0;

  max-width: 192rem;
  height: 149rem;

  background-image: url('./assets/images/backgroundHome/background-quase-footer.png');
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center center;

  z-index: -10;

  @media (max-width: 992px) {
    bottom: -70rem;

    height: 203.6rem;

    background-image: url('./assets/images/backgroundHome/background-quase-footer-90deg.png');
  }
`

export const Subscribe = styled.section`
  display: flex;
  align-items: center;

  max-width: 110.8rem;
  margin: 0 auto;
  margin-top: 29.5rem;
  margin-bottom: 17rem;
  padding-inline: 2.4rem;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 14rem;

    margin-top: 24.8rem;
    margin-bottom: 29rem;
  }

  @media (max-width: 576px) {
    margin-top: 15.2rem;
    margin-bottom: 17rem;
    padding-inline: 1.6rem;
  }
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 62.8rem;

  @media (max-width: 992px) {
    align-items: center;
  }

  @media (max-width: 576px) {
    align-items: flex-start;
    width: 100%;
  }

  > h4 {
    margin-bottom: 2.4rem;

    @media (max-width: 992px) {
      text-align: center;
    }
    @media (max-width: 576px) {
      text-align: left;
    }
  }

  > p {
    margin-bottom: 3.2rem;
    text-align: left;

    @media (max-width: 992px) {
      text-align: center;
    }

    @media (max-width: 576px) {
      letter-spacing: 0.05em;
      text-align: left;
    }
  }
`

export const Title = styled.h4`
  margin-bottom: 2.4rem;

  color: ${theme.colors.white};
  font-weight: ${theme.font.weight.black};
  font-size: ${theme.font.sizes.font48};
  line-height: 5rem;
  text-align: left;

  @media (max-width: 992px) {
    font-size: ${theme.font.sizes.font36};
    line-height: ${theme.font.sizes.font40};
    text-align: center;
  }

  @media (max-width: 576px) {
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.font24};
    line-height: ${theme.font.sizes.font32};
    text-align: left;
  }
`
