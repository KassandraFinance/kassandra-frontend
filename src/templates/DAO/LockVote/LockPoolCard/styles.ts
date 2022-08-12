import styled from 'styled-components'

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
