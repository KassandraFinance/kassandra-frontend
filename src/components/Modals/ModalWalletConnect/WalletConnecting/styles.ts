import styled from 'styled-components'
import theme from '../../../../styles/theme'

export const TitleWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;

  color: ${theme.colors.snow};
  font-weight: ${theme.font.weight.normal};
  font-size: ${theme.font.sizes.font16};
  line-height: 100%;
  letter-spacing: 0.05em;
`

export const LoadingWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  color: ${theme.colors.snow};
  font-weight: ${theme.font.weight.light};
  font-size: ${theme.font.sizes.font14};
  line-height: 1.8rem;
`

export const Spinner = styled.div`
  width: 1.6rem;
  height: 1.6rem;

  animation: rotate 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export const Text = styled.p`
  color: ${theme.colors.snow};
  font-weight: ${theme.font.weight.medium};
  font-size: ${theme.font.sizes.font14};
  line-height: 1.8rem;
  text-align: center;
`

export const AddressWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;

  height: 1.8rem;

  color: ${theme.colors.snow};
  font-weight: ${theme.font.weight.light};
  font-size: ${theme.font.sizes.font14};
  line-height: 1.8rem;
`

export const TextConnected = styled.span`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;

  height: 1.8rem;

  color: #2ce878;
  font-weight: ${theme.font.weight.medium};
  font-size: ${theme.font.sizes.font14};
  line-height: 1.8rem;
`

export const ButtonWrapper = styled.div``
