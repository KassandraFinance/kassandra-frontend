import styled, { css } from 'styled-components'

export const BigSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0;
  background: rgba(252, 252, 252, 0.04);
`

export const BigSectionText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`

export const BigSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  padding: 3.2rem;

  .ghostButton {
    max-width: 12.5rem;
  }
`

export const BigSectionImage = styled.div`
  background: radial-gradient(
    121.39% 121.39% at 50% 50%,
    #341a3e 0%,
    #284754 100%
  );
  width: 100%;
  height: 100%;
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
