import styled, { css } from 'styled-components'
import { device } from '@/styles/theme'

export const ArticlesSection = styled.div`
  position: relative;
`

export const LeftLightImageWrapper = styled.div`
  position: absolute;
  bottom: -240px;
  left: 0px;

  z-index: -1;

  @media ${device.mobile} {
    display: none;
  }
`

export const RightLightImageWrapper = styled.div`
  position: absolute;
  bottom: -320px;
  right: 0px;

  z-index: -1;

  @media ${device.mobile} {
    bottom: -320px;
    right: 0px;
  }
`

export const ArticlesMainContent = styled.div`
  max-width: 118.8rem;
  padding-inline: 2.4rem;
  margin-inline: auto;
`

export const ArticlesMainContainerHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    padding-block: 1.6rem;

    .button-mobile {
      border: 0.1rem solid ${theme.colors.snow};
      width: fit-content;
      padding: 1.2rem 2.4rem;

      font-size: ${theme.font.sizes.font14};
      font-weight: 400;
      border-radius: 4px;

      transition: 300ms;

      img {
        width: 1.6rem;
      }

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

      .button-mobile {
        width: 100%;
      }

      > div {
        > div {
          width: 100%;
        }
      }
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

type TagsContainerProps = {
  hidden?: boolean
}

export const TagsContainer = styled.div<TagsContainerProps>`
  ${({ hidden }) => css`
    display: ${hidden ? 'none' : 'flex'};
    gap: 1.6rem;
    align-items: center;
    /* overflow-x: auto; */

    width: 100%;
    min-height: 4rem;
    padding-bottom: 1.6rem;

    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }
  `}
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

export const ButtonGroupWrapper = styled.div`
  height: 100%;
`

export const TabsWrapper = styled.div`
  max-width: 118.8rem;
  padding-inline: 2.4rem;
  margin-inline: auto;
`
