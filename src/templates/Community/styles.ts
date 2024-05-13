import styled, { css } from 'styled-components'
import { headerSize } from '@/styles/theme'

export const Wrapper = styled.div`
  background: center url('./assets/images/community-page.png');
  background-size: cover;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 15.2rem;
  gap: 5.6rem;
  max-width: 124rem;
  margin-inline: auto;
`

export const TextWrapper = styled.div`
  margin-top: calc(${headerSize.desktop} + 8rem);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1.6rem;
  text-align: center;
  padding-inline: 1.6rem;
`

export const H1 = styled.h1`
  font-weight: 900;
  font-family: 'Rubik';
  font-size: 4.8rem;
  line-height: 5rem;
  color: white;
`

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.grayDisabled};
    font: ${theme.font.text.textBase400};
  `}
`

export const LinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 5.6rem;
  background: rgba(217, 217, 217, 0.04);
  padding-block: 4rem;
  padding-inline: 3.2rem;
  border-radius: 1.6rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    padding-block: 2.4rem;
    margin-inline: 2.4rem;
  }

  @media (max-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    padding-block: 1.6rem;
    margin-inline: 1.6rem;
  }
`

export const Link = styled.div`
  width: 20rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: center;
  margin-inline: auto;

  @media (max-width: 1200px) {
    width: 15rem;
  }

  @media (max-width: 960px) {
    width: 10rem;
  }

  &:hover {
    color: #e6e9eb;
    transition: color 300ms ease-in-out;
  }
`

export const LinkType = styled.h4`
  ${({ theme }) => css`
    font: ${theme.font.text.textBase700};
  `}
`

export const IconWrapper = styled.a`
  position: relative;
  padding: 3rem;
  background: rgba(217, 217, 217, 0.04);
  width: fit-content;
  border-radius: 0.8rem;
  color: white;
  text-decoration: none;
  border: 1px solid transparent;
  height: 9.2rem;
  width: 9.2rem;

  &:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit;
    border: 0.1rem solid transparent;
    background: linear-gradient(90deg, #e843c4 0%, #ffbf00 100%) border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  }
`

export const LinkContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

export const LinkText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8rem;
  font-weight: 400;
`
