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

  > h5 {
    @media (max-width: 992px) {
      text-align: center;
    }
    @media (max-width: 576px) {
      text-align: left;
    }
  }

  > p {
    line-height: 155%;

    @media (max-width: 992px) {
      margin-bottom: 0.8rem;
      text-align: center;
    }

    @media (max-width: 576px) {
      letter-spacing: 0.05em;
      text-align: left;
    }
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
  padding: 1.6rem 3.2rem;

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
