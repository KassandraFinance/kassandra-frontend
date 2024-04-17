import styled, { css } from 'styled-components'

export const SmallSectionImage = styled.div`
  height: 22.3rem;
  background: radial-gradient(
    121.39% 121.39% at 50% 50%,
    #341a3e 0%,
    #284754 100%
  );
`

export const SmallSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  background: rgba(252, 252, 252, 0.04);

  .ghostButton {
    max-width: 12.5rem;
  }
`

export const SmallSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  padding-inline: 3.2rem;
  padding-bottom: 3.2rem;
`

export const SmallSectionText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`

export const H3 = styled.h3`
  font-family: Rubik;
  font-size: 2rem;
  font-weight: 500;
  line-height: 2.2rem;
`

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.grayDisabled};
    font: ${theme.font.text.textBase400};
  `}
`
