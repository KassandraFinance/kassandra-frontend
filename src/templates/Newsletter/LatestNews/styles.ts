import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  max-width: 124rem;
  margin-inline: auto;
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`

export const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
`

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

export const SmallSectionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3.2rem;
`

export const H2 = styled.h2`
  font-weight: 700;
  font-family: 'Rubik';
  font-size: 3.2rem;
  line-height: 3.52rem;
  color: #fff;
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
