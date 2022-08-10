import styled from 'styled-components'
import theme from '../../styles/theme'

export const PaginateContainer = styled.div`
  display: flex;
  align-items: center;

  max-width: 132.4rem;
  margin: -6rem auto 0;
  padding-block: 2.8rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .paginate__container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    width: 50rem;
    margin: 0 auto;
    padding: 0;

    color: ${theme.colors.snow};
    font-size: ${theme.font.sizes.font12};
    line-height: 1.33rem;

    @media (max-width: 548px) {
      width: 100%;
    }
  }

  .paginate__Page {
    display: flex;
  }

  .paginate__link {
    padding: 1rem;

    border-radius: 1rem;
    border: 0.1rem solid ${theme.colors.snow};

    transition-duration: 300ms;
    transition-timing-function: ease-in-out;
    transition-property: color background-color border;

    &:hover {
      color: ${theme.colors.darkGray};
      background-color: ${theme.colors.snow};
      border: 0.2rem solid ${theme.colors.snow};
      border-radius: 1rem;
      box-shadow: 0rem 1rem 3rem rgba(250, 250, 250, 0.5);

      cursor: pointer;
    }

    &:active {
      background-color: ${theme.colors.snow};
      border: 0.1rem solid ${theme.colors.snow};
    }
  }

  .paginate__previous,
  .paginate__next {
    display: flex;
  }

  .paginate__link__previous,
  .paginate__link__next {
    padding: 1rem;

    background-color: transparent;
    border: 0.2rem solid transparent;
    border-radius: 1rem;

    transition-duration: 300ms;
    transition-timing-function: ease-in-out;
    transition-property: color background-color border;

    &:hover {
      color: ${theme.colors.darkGray};
      background-color: ${theme.colors.snow};
      border: 0.2rem solid ${theme.colors.snow};
      border-radius: 1rem;
      box-shadow: 0rem 1rem 3rem rgba(250, 250, 250, 0.5);

      cursor: pointer;
    }

    &:active {
      background-color: ${theme.colors.snow};
      border: 0.2rem solid ${theme.colors.snow};
    }
  }

  .paginate__active {
    color: ${theme.colors.darkGray};
    border-radius: 1rem;
    background-color: ${theme.colors.snow};
    border: 0.2rem solid ${theme.colors.snow};
  }
`

export const PaginateText = styled.div`
  color: ${theme.colors.darkGray};
  font-size: ${theme.font.sizes.font12};
  line-height: 1.3rem;
`
