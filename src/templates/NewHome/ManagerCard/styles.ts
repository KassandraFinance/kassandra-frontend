import styled from 'styled-components'
import theme from '../../../styles/theme'

export const ManagerCardWapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  width: 30.9rem;
  padding: 3.2rem 2.4rem;

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.04) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  backdrop-filter: blur(1.86574rem);

  border: 0.1rem solid
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  border-radius: 1.72222rem;

  @media (max-width: 992px) {
    flex-direction: row;
    gap: 1.6rem;

    width: min(100%, 59.6rem);
    padding: 1.6rem;
  }
`

export const IconWapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 7.2rem;
  min-height: 7.2rem;

  background-color: rgba(252, 252, 252, 0.05);
  border-radius: 50%;

  @media (max-width: 576px) {
    min-width: 4.8rem;
    min-height: 4.8rem;

    img {
      max-width: 2.4rem;
      max-height: 2.4rem;
    }
  }
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  @media (max-width: 992px) {
    align-items: flex-start;
    width: 100%;
  }
`

export const Title = styled.h5`
  color: ${theme.colors.amber};
  font-weight: ${theme.font.weight.normal};
  font-size: ${theme.font.sizes.font12};
  line-height: ${theme.font.sizes.font12};
  letter-spacing: 0.3em;
  text-transform: uppercase;

  @media (max-width: 576px) {
    letter-spacing: 0.22em;
  }
`

export const Text = styled.p`
  color: ${theme.colors.white};
  font-weight: ${theme.font.weight.light};
  font-size: ${theme.font.sizes.font16};
  line-height: ${theme.font.sizes.font24};
  text-align: center;

  @media (max-width: 992px) {
    text-align: left;
  }

  @media (max-width: 576px) {
    font-size: ${theme.font.sizes.font14};
    letter-spacing: 0.05em;
  }
`
