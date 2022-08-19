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

  padding: 0 1.6rem;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`

export const LogoWrapper = styled.div`
  position: relative;

  width: 70rem;
  height: 40rem;

  @media (max-width: 800px) {
    margin-top: 8rem;
    width: 100%;
  }
`

export const Text = styled.div`
  @media (max-width: 800px) {
    text-align: center;
  }

  @media (max-width: 480px) {
    text-align: left;
  }

  p {
    margin-top: 2.4rem;
    margin-bottom: 3.2rem;
    font-size: 1.6rem;
  }

  h3 {
    color: #ffffff;
    font-size: ${theme.font.sizes.font48};
    font-weight: ${theme.font.weight.black};
    line-height: 5rem;

    @media (max-width: 480px) {
      font-size: ${theme.font.sizes.font24};
      font-weight: ${theme.font.weight.bold};
      line-height: 3.2rem;
      text-align: left;
    }
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  @media (max-width: 800px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
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

// eslint-disable-next-line prettier/prettier
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
  border: 1px solid ${({ variant }) => colors[variant]};

  span {
    font-size: 1.4rem;
    font-weight: 300;
    color: #ffffff;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`
