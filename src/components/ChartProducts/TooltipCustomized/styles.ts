import styled from 'styled-components'

export const Content = styled.div`
  @media (max-width: 380px) {
    margin-top: 1.5rem;
  }

  @media (max-width: 375px) {
    margin-top: 2.4rem;
  }

  p {
    color: #bdbdbd;
    font-size: 14px;
    font-weight: 300;
    margin-top: 8px;
    @media (max-width: 375px) {
      font-size: 10px;
      margin-top: 4px;
    }
  }
`

export const Price = styled.div`
  display: flex;
  align-items: flex-end;
  h1 {
    font-size: 36px;
    font-weight: 500;
    font-size: 'Rubik';
    margin-right: 8px;

    @media (max-width: 375px) {
      font-size: 24px;
    }
  }

  span {
    font-size: 14px;
    margin-bottom: 4px;
  }
`
