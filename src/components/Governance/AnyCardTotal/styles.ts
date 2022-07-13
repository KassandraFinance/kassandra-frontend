import styled from 'styled-components'
import theme from '../../../styles/theme'

export const TotalValuesCards = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 2.4rem;

  background: rgba(255, 255, 255, 0.04);
  border: 0.1rem solid rgba(255, 255, 255, 0.2);
  border-radius: 1.2rem;

  @media (max-width: 730px) {
    flex-direction: row;
    align-items: center;

    padding: 2rem;
  }

  span {
    display: flex;
    gap: 0.8rem;

    color: #c4c4c4;
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.medium};

    @media (max-width: 880px) {
      font-size: ${theme.font.sizes.font12};
    }
  }

  p {
    margin-top: 2.4rem;

    color: #ffffff;
    font-size: ${theme.font.sizes.font32};
    font-weight: ${theme.font.weight.medium};

    @media (max-width: 880px) {
      font-size: ${theme.font.sizes.font24};
    }

    @media (max-width: 730px) {
      margin-top: 0;
      margin-left: auto;
      font-size: ${theme.font.sizes.font14};
      font-weight: ${theme.font.weight.bold};
    }
  }
`
