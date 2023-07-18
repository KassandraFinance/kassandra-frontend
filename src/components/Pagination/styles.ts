import styled from 'styled-components'
import theme from '../../styles/theme'

interface IPaginateContainerProps {
  totalItems: boolean
}

// eslint-disable-next-line prettier/prettier
export const PaginateContainer = styled.div<IPaginateContainerProps>`
  display: flex;
  align-items: center;

  max-width: 132.4rem;
  margin-inline: auto;
  padding-block: 2.8rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .paginate__container {
    display: flex;
    justify-content: center;
    gap: 2.5rem;
    align-items: center;

    width: ${props => (props.totalItems ? '30rem' : '50rem')};
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
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 1rem;
    min-height: 3.6rem;
    min-width: 3.6rem;

    line-height: 0rem;

    border-radius: 1rem;
    border: 0.1rem solid ${theme.colors.snow};

    transition-duration: 300ms;
    transition-timing-function: ease-in-out;
    transition-property: color background-color border;

    &:hover {
      color: ${theme.colors.darkGray};
      background-color: ${theme.colors.snow};
      border: 0.1rem solid ${theme.colors.snow};
      border-radius: 1rem;
      box-shadow: 0rem 0.1rem 2rem rgba(250, 250, 250, 0.3);

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
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 1rem;
    height: 3.6rem;

    line-height: 0rem;

    background-color: transparent;
    border: 0.1rem solid transparent;
    border-radius: 1rem;

    transition-duration: 300ms;
    transition-timing-function: ease-in-out;
    transition-property: color background-color border;

    &:hover {
      color: ${theme.colors.darkGray};
      background-color: ${theme.colors.snow};
      border: 0.1rem solid ${theme.colors.snow};
      border-radius: 1rem;
      box-shadow: 0rem 0.1rem 2rem rgba(250, 250, 250, 0.3);

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

  .paginate__break__link {
    display: flex;
    justify-content: center;
    align-items: center;

    line-height: 0rem;

    cursor: pointer;
  }
`

export const PaginateText = styled.div`
  color: ${theme.colors.darkGray};
  font-size: ${theme.font.sizes.font12};
  line-height: 1.3rem;
`
