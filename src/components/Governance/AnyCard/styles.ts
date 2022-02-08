import styled from 'styled-components'
import theme from '../../../styles/theme'

export const BackgroundCard = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: none;

  border-radius: 0.8rem;
  color: ${theme.colors.snow};
  font-size: ${theme.font.sizes.font16};
  font-weight: ${theme.font.weight.light};

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin-top: ${theme.spacings.space48};
  margin-bottom: 8rem;
  padding: 5.6rem 0;

  @media (max-width: 600px) {
    margin-top: 2rem;
    margin-bottom: 7.2rem;
    padding: 4rem 0;
  }

  p {
    line-height: ${theme.font.sizes.font24};
    font-size: ${theme.font.sizes.font24};
    font-weight: ${theme.font.weight.bold};

    display: block;

    margin: 0 auto;

    @media (max-width: 992px) {
      font-size: ${theme.font.sizes.font18};
      text-align: center;
    }

    @media (max-width: 600px) {
      font-size: ${theme.font.sizes.font14};
    }
  }
`
