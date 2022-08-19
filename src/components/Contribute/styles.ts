import styled from 'styled-components'
import theme from '../../styles/theme'

export const ContributeContainer = styled.div`
  position: relative;
`

export const ContributeBacground = styled.div`
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

  z-index: -1;

  @media (max-width: 992px) {
    bottom: -70rem;

    height: 203.6rem;

    background-image: url('./assets/images/backgroundHome/background-quase-footer-90deg.png');
  }
`

export const Wrapper = styled.section`
  display: flex;
  align-items: center;

  max-width: 102.8rem;
  width: 100%;

  margin-left: auto;
  margin-right: auto;
  margin-top: 23rem;
  margin-bottom: 18rem;

  padding-inline: 2.4rem;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 14rem;
  }

  @media (max-width: 576px) {
    padding-inline: 1.6rem;
  }
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (max-width: 992px) {
    gap: 2.4rem;
  }
`

export const ContributeHeading = styled.h5`
  color: ${theme.colors.white};
  font-weight: ${theme.font.weight.black};
  font-size: ${theme.font.sizes.font48};
  line-height: 5rem;

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

export const Text = styled.p`
  color: ${theme.colors.white};
  font-weight: 300;
  font-size: ${theme.font.sizes.font16};
  line-height: 155%;

  @media (max-width: 992px) {
    margin-bottom: 0.8rem;

    font-weight: ${theme.font.weight.normal};
    line-height: ${theme.font.sizes.font24};
    text-align: center;
  }

  @media (max-width: 576px) {
    font-weight: ${theme.font.weight.light};
    font-size: ${theme.font.sizes.font14};
    line-height: ${theme.font.sizes.font24};
    letter-spacing: 0.05em;
    text-align: left;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  @media (max-width: 992px) {
    justify-content: center;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    width: 100%;
  }
`

const colors = {
  discord: '#5865F2',
  telegram: '#30A3E6'
}

interface ButtonProps {
  variant: 'discord' | 'telegram';
}

// prettier-ignore
export const Button = styled.a<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 1.2rem 2.4rem;

  height: 4.8rem;
  text-decoration: none;
  cursor: pointer;
  border-radius: 0.4rem;
  background-color: ${({ variant }) => colors[variant]};
  border: 0.1rem solid ${({ variant }) => colors[variant]};

  span {
    color: ${theme.colors.white};
    font-weight: ${theme.font.weight.light};
    font-size: ${theme.font.sizes.font14};
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`
