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
    gap: 1.6rem;
    justify-content: center;
    align-items: center;

    margin-bottom: 5rem;
    padding-block: 6.4rem;
    border-bottom: 1px solid ${theme.colors.neutral95};

    p {
      color: ${theme.colors.white};
      font-weight: ${theme.font.weight.medium};
      font-size: ${theme.font.sizes.font16};
      line-height: 2.4rem;
      letter-spacing: 0.48rem;
      text-transform: uppercase;
    }

    .share-btn {
      margin-inline: auto;
      padding: 0.8rem 4rem;

      svg > path {
        fill: ${theme.colors.neutral30} !important;
      }
    }
  `}
`
