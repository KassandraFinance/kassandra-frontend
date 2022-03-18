import styled from 'styled-components'

export const BreadcrumbItem = styled.li`
  span {
    display: inline-block;
    margin-left: 2.5rem;

    font-size: 0.9rem;
    color: rgba(196, 196, 196, 1);
  }

  a {
    color: #c4c4c4;
    font-size: 0.9rem;
    font-weight: 500;
    text-transform: uppercase;
    text-decoration: none;

    cursor: pointer;

    &.active {
      display: block;
      color: #ffffff;
      position: relative;

      &::before {
        content: '';

        position: absolute;
        bottom: -6px;
        right: 0;
        left: 0;

        width: 100%;
        height: 2px;

        background-color: #e843c4;
      }
    }
  }
`
