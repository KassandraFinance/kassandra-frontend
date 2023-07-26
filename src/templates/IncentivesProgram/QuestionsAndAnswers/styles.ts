import styled, { css } from 'styled-components'

export const QuestionsAndAnswers = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 24rem;
    gap: 4rem;

    @media (max-width: 992px) {
      margin-top: 16rem;
      padding-inline: 8.6rem;
    }

    @media (max-width: 576px) {
      padding-inline: 0;
    }
  `}
`

export const QuestionsAndAnswersHeader = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.4rem;
  `}
`

export const Hr = styled.div`
  ${() => css`
    width: 9.8rem;
    height: 0.1rem;

    background: linear-gradient(134deg, #e843c4 0%, #0c3ddc 100%);
  `}
`
