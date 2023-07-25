import styled, { css } from 'styled-components'

export const Questions = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 24.8rem;
    gap: 8rem;

    @media (max-width: 992px) {
      margin-top: 16rem;
    }

    @media (max-width: 576px) {
      margin-top: 2rem;
      gap: 4rem;
    }
  `}
`

export const QuestionsText = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    text-align: center;
    max-width: 60.4rem;
    gap: 1.6rem;
  `}
`

export const QuestionsWidget = styled.div`
  ${() => css`
    width: 45.6rem;
    height: 63.3rem;

    border-radius: 20px;
    overflow: hidden;

    scrollbar-width: none;
    -ms-overflow-style: none;

    ::-webkit-scrollbar {
      width: 0px;
    }

    @media (max-width: 576px) {
      width: 38.2rem;
      height: 40.8rem;
    }
  `}
`
