import styled from 'styled-components'
import theme from '../../../styles/theme'

export const BackgroundCard = styled.div`
  width: 100%;
  margin-top: ${theme.spacings.space48};
  margin-bottom: 8rem;
  padding-top: ${theme.spacings.space56};
  padding-right: 0;
  padding-bottom: ${theme.spacings.space56};
  padding-left: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  font-size: ${theme.font.sizes.font16};
  font-weight: ${theme.font.weight.light};

  background-color: rgba(255, 255, 255, 0.04);
  border: none;
  border-radius: 0.8rem;
  color: ${theme.colors.snow};

  @media (max-width: 600px) {
    margin-top: 2rem;
    margin-bottom: 7.2rem;
    padding: 4rem 0;
  }

  p {
    margin: 0 auto;

    display: block;

    line-height: ${theme.font.sizes.font24};
    font-size: ${theme.font.sizes.font24};
    font-weight: ${theme.font.weight.medium};

    @media (max-width: 992px) {
      font-size: ${theme.font.sizes.font18};
      text-align: center;
    }

    @media (max-width: 600px) {
      font-size: ${theme.font.sizes.font14};
    }
  }

  a {
    margin-top: 2.4rem;
  }
`
