import styled, { css } from 'styled-components'
import { device } from '@/styles/theme'

export const ArticlesSection = styled.div``

export const ArticlesMainContent = styled.main`
  max-width: 192rem;
  margin-inline: auto;
  padding-inline: 6.4rem;

  @media ${device.tabletLarge} {
    padding-inline: 3.2rem;
  }

  @media ${device.mobile} {
    padding-inline: 1.6rem;
  }
`

export const ArticlesMainContainerHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    padding-block: 1.6rem;

    .button-mobile {
      width: fit-content;
      padding: 1.2rem 2.4rem;

      font-size: ${theme.font.sizes.font14};
      font-weight: 400;

      img {
        width: 1.6rem;
      }
    }

    .button-mobile {
      border: 0.1rem solid ${theme.colors.snow};
      width: fit-content;
      padding: 1.2rem 2.4rem;

      font-size: ${theme.font.sizes.font14};
      font-weight: 400;

      transition: 300ms;

      &:hover,
      &:focus {
        border-color: ${theme.colors.snow};
        background-color: ${theme.colors.snow};

        color: ${theme.colors.darkPurple};
        /* outline-color: ${theme.colors.snow}; */
        outline: none;
      }
    }

    @media ${device.mobile} {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.6rem;
    }
  `}
`

export const ToggleViewButtonsContainerMobile = styled.div`
  display: none;

  width: 100%;
  border-radius: 8px;

  @media ${device.mobile} {
    display: flex;
  }
`

export const TagsContainer = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;
  overflow-x: auto;

  width: 100%;
  height: 4rem;
  padding-bottom: 1.6rem;

  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`
interface ArticlesContainerProps {
  isGrid?: boolean
}

export const ArticlesContainer = styled.div<ArticlesContainerProps>`
  ${({ isGrid }) => css`
    display: ${isGrid ? 'grid' : 'flex'};
    flex-direction: column;
    gap: 2.4rem 1.6rem;

    ${isGrid &&
    css`
      grid-template-columns: repeat(auto-fill, minmax(31.2rem, 1fr));

      @media ${device.desktop} {
        grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
        justify-items: center;
      }

      @media ${device.tabletLarge} {
        grid-template-columns: repeat(auto-fill, minmax(29rem, 1fr));
        justify-items: center;
      }

      @media ${device.tabletSmall} {
        justify-items: center;
      }

      @media ${device.mobile} {
        gap: 1.6rem;
      }
    `}
  `}
`

export const PaginationWrapper = styled.div`
  max-width: 192rem;
  margin-inline: auto;
  padding-inline: 6.4rem;
`

export const MobileHidden = styled.div`
  @media ${device.mobile} {
    display: none;
  }
`

export const TabsWrapper = styled.div`
  padding-inline: 6.4rem;

  @media ${device.tabletLarge} {
    padding-inline: 3.2rem;
  }

  @media ${device.mobile} {
    padding-inline: 1.6rem;
  }
`
