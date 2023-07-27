import styled, { css } from 'styled-components'

interface ILockedContentProps {
  contentHeight: number
}

export const LockedContent = styled.div<ILockedContentProps>`
  ${({ theme, contentHeight }) => css`
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 4rem;
    justify-content: flex-end;

    max-width: 100%;
    margin-bottom: 4rem;
    padding-bottom: 8rem;
    border-bottom: 2px solid ${theme.colors.neutral95};
    paddin-right: 6.4rem;

    ::after {
      content: '';
      position: absolute;
      right: 0;
      left: 0;

      width: 100%;
      height: 100%;

      background: linear-gradient(
        to bottom,
        transparent ${contentHeight - 600}px,
        white
      );

      pointer-events: none;
    }
  `}
`

export const HeimdallProWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`

export const ShareArticle = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    justify-content: center;
    align-items: center;

    margin-bottom: 5rem;
    padding-block: 6.4rem;
    border-bottom: 1px solid ${theme.colors.neutral95};

    p {
      color: ${theme.colors.snow};
      font-weight: ${theme.font.weight.medium};
      line-height: 2.4rem;
      letter-spacing: 0.48rem;
      text-transform: uppercase;
      font-size: 1.4rem;
      font-style: normal;
      letter-spacing: 0.42rem;
    }

    .share-btn {
      height: 4.8rem;
      background-color: transparent;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 300;
      line-height: 1.6rem;
      border-radius: 0.4rem;
      border: 1px solid;

      color: ${theme.colors.snow};

      svg > path {
        fill: ${theme.colors.snow} !important;
      }

      :hover {
        background-color: ${theme.colors.purple30} !important;
        border: 1px solid ${theme.colors.purple50} !important;
      }
    }
  `}
`
