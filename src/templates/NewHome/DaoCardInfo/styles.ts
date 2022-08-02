import styled, { css } from 'styled-components'
import theme from '../../../styles/theme'

export const DaoCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  width: 27.6rem;

  @media (max-width: 992px) {
    width: 51rem;
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  gap: 1.2rem;
`

export const ImgWrapper = styled.div`
  width: 4rem;
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

interface ITitleProps {
  color: string;
}

export const Title = styled.h5`
  ${({ color }: ITitleProps) => css`
    color: ${color};
    font-weight: ${theme.font.weight.normal};
    font-size: ${theme.font.sizes.font12};
    line-height: ${theme.font.sizes.font12};
    letter-spacing: 0.22em;
    text-transform: uppercase;

    @media (max-width: 576px) {
      line-height: ${theme.font.sizes.font16};
    }
  `}
`

export const SubTitle = styled.span`
  color: #ffffff;
  font-weight: ${theme.font.weight.medium};
  font-size: ${theme.font.sizes.font20};
  line-height: 110%;
  letter-spacing: 0.02em;

  @media (max-width: 576px) {
    font-size: ${theme.font.sizes.font16};
    line-height: ${theme.font.sizes.font18};
  }
`

export const Text = styled.p`
  color: #ffffff;
  font-weight: ${theme.font.weight.light};
  font-size: ${theme.font.sizes.font16};
  line-height: ${theme.font.sizes.font24};

  @media (max-width: 576px) {
    font-size: ${theme.font.sizes.font14};
    line-height: ${theme.font.sizes.font24};
    letter-spacing: 0.05em;
  }
`
