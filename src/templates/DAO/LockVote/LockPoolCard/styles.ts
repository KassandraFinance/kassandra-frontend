import styled from 'styled-components'
import theme from '../../../../styles/theme'

export const LockPool = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;

  height: 14.2rem;
  width: 100%;

  @media (max-width: 820px) {
    gap: 1.5rem;
  }

  .logo {
    position: relative;
    width: 14.2rem;
    height: 14.2rem;

    @media (max-width: 820px) {
      width: 7.2rem;
      height: 7.2rem;
    }
  }

  @media (max-width: 760px) {
    display: none;
  }
`

export const LockPoolInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  flex: 1;
`

export const LockPoolTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  h3 {
    @media (max-width: 820px) {
      font-size: 2.4rem;
    }
  }
`

export const Info = styled.div`
  display: flex;
  gap: 1.2rem;

  strong {
    color: #ffffff;
    font-size: ${theme.font.sizes.font24};
    font-weight: ${theme.font.weight.medium};
    line-height: 2.5rem;
  }

  span {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    color: ${theme.colors.cyan};
    font-size: ${theme.font.sizes.font24};
    font-weight: ${theme.font.weight.light};
    line-height: 2.4rem;

    @media (max-width: 560px) {
      font-size: ${theme.font.sizes.font20};
    }
  }
`

export const Hr = styled.hr`
  width: 100%;
  height: 0.2rem;

  color: #ffffff;
`

export const LockPoolBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #c4c4c4;
  font-size: ${theme.font.sizes.font20};
  font-weight: ${theme.font.weight.light};
  line-height: 2.4rem;

  span {
    strong {
      margin-left: 0.6rem;
      margin-right: 0.6rem;

      font-size: ${theme.font.sizes.font24};
      font-weight: ${theme.font.weight.medium};
      color: #ffffff;
    }
  }

  div {
    display: flex;
    align-items: center;

    span {
      font-weight: ${theme.font.weight.medium};
    }
  }
`

export const TooltipAPR = styled.div`
  position: relative;

  padding: 0.1rem;

  z-index: 99;
`

export const LockPoolMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6.4rem;

  @media (min-width: 760px) {
    display: none;
  }
`

export const titleLockPool = styled.h4`
  font-size: ${theme.font.sizes.font32};
  font-weight: ${theme.font.weight.medium};
  line-height: 2.5rem;

  @media (max-width: 760px) {
    font-size: ${theme.font.sizes.font24};
  }
`

export const LockPoolMobile = styled.div``

export const HeaderMobile = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
`

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  margin-top: 1.9rem;
`

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:nth-child(2) {
    span {
      color: #c4c4c4;
    }

    span {
      strong {
      }
    }
  }

  &:nth-child(3) {
    span {
      color: #c4c4c4;
      font-weight: 500;

      &:first-child {
        border-bottom: 0.2rem solid #ffbf00;
      }
    }
  }

  span {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    color: ${({ theme }) => theme.colors.cyan};
    font-size: 2rem;
    font-weight: 300;
    line-height: 2.4rem;
  }

  strong {
    font-size: 2.4rem;
    line-height: 2.5rem;
    font-weight: 500;
    color: #ffffff;
  }
`
