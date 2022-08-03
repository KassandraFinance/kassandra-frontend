import styled from 'styled-components'
import { Button } from '../styles'

export const Wrapper = styled.section`
  max-width: 118rem;
  width: 100%;

  margin: 0 auto;
  padding: 0 1.6rem;

  .flex {
    display: flex;
    margin-top: 5rem;

    @media (max-width: 760px) {
      flex-direction: column-reverse;
    }
  }
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  max-width: 51.2rem;
  margin: 0 auto;

  text-align: center;

  @media (max-width: 760px) {
    text-align: left;
    margin: 0;
  }

  p {
    @media (max-width: 760px) {
      text-align: left;
      font-size: 1.4rem;
    }
  }

  h2 {
    @media (max-width: 760px) {
      font-size: 2.4rem;
    }
  }
`

export const LockPoolContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 7.2rem;

  position: relative;

  @media (max-width: 760px) {
    gap: 5.6rem;
  }
`

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
    font-size: 2.4rem;
    line-height: 2.5rem;
    font-weight: 500;
    color: #ffffff;
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

  span {
    color: #c4c4c4;
    font-size: 2rem;
    font-weight: 300;
    line-height: 2.4rem;

    strong {
      font-size: 2.4rem;
      font-weight: 500;
      color: #ffffff;
    }
  }

  div {
    display: flex;
    align-items: center;

    strong {
      font-size: 2.4rem;
      line-height: 2.5rem;
      font-weight: 500;
      color: #ffffff;

      margin-right: 0.6rem;
      margin-left: 0.2rem;
    }

    .heading {
      color: #c4c4c4;
      margin-right: 0.6rem;
    }
  }
`

export const Connector = styled.div`
  position: relative;
  height: 60rem;
  width: 7.4rem;
  margin-left: -2rem;
  margin-top: 9rem;

  @media (max-width: 760px) {
    display: none;
  }
`

export const Desc = styled.p`
  max-width: 72.6rem;
  margin: 0 auto;

  text-align: center;
  font-size: 2.4rem;
  font-weight: 300;
  line-height: 3.2rem;

  strong {
    font-weight: 500;
    color: #ffffff;
  }

  @media (max-width: 820px) {
    font-size: 1.8rem;
  }

  @media (max-width: 660px) {
    max-width: 49.6rem;
  }

  /* @media (max-width: 760px) {
    margin: 0;
  } */

  @media (max-width: 560px) {
    text-align: left;
    font-size: 1.4rem;
    margin: 0;
  }

  .arrow-curved-down {
    position: relative;

    width: 8.3rem;
    height: 10.2rem;

    margin-left: 7rem;

    @media (min-width: 760px) {
      display: none;
    }
  }
`

export const ButtonKacy = styled(Button)`
  max-width: 27rem;

  @media (max-width: 768px) {
    display: none;
  }
`

export const LockPoolMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6.4rem;

  @media (min-width: 760px) {
    display: none;
  }
`

export const LockPoolMobile = styled.div``

export const HeaderMobile = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h4 {
    font-size: 2.4rem;
    line-height: 2.5rem;
    font-weight: 500;
  }
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
