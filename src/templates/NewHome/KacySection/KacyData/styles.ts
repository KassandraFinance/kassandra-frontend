import styled from 'styled-components'
import theme from '../../../../styles/theme'

export const KacyDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  max-width: 56.2rem;

  @media (max-width: 992px) {
  }
`

export const Title = styled.h5`
  color: #ffffff;
  font-weight: ${theme.font.weight.bold};
  font-size: ${theme.font.sizes.font32};
  line-height: 3.5rem;

  @media (max-width: 992px) {
    text-align: center;
  }

  @media (max-width: 576px) {
    font-size: ${theme.font.sizes.font24};
    line-height: ${theme.font.sizes.font32};
    text-align: left;
  }
`

export const Text = styled.p`
  color: #ffffff;
  font-weight: ${theme.font.weight.light};
  font-size: ${theme.font.sizes.font16};
  line-height: ${theme.font.sizes.font24};

  @media (max-width: 992px) {
    text-align: center;
  }

  @media (max-width: 576px) {
    font-size: ${theme.font.sizes.font16};
    line-height: ${theme.font.sizes.font24};
    text-align: left;
  }
`

export const KacyDataCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, auto);
  justify-content: space-between;

  @media (max-width: 576px) {
    grid-template-columns: repeat(3, auto);
    justify-content: center;
    justify-items: center;
    column-gap: 2.4rem;
    row-gap: 1.8rem;

    margin-top: 1.1rem;
  }
`

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;

  margin-top: 0.8rem;

  button {
    width: 23.1rem;

    &:last-of-type {
      border-color: #fff;

      &:hover {
        background-color: #fff;
      }
    }
  }

  @media (max-width: 992px) {
    justify-content: center;
  }

  @media (max-width: 576px) {
    flex-direction: column;

    margin-top: 2.05rem;

    button {
      width: 100%;
    }
  }
`
