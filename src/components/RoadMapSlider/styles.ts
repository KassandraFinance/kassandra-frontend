import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  max-width: 92rem;
  margin: 0 auto;
  margin-bottom: 15rem;
  ${media.lessThan('large')`
      overflow-x: hidden;
      padding: 0 3.2rem;
    `}

  .slick-track,
    .slick-list {
    display: flex;
  }

  .slick-slide > div {
    margin: 0 0.8rem;
    flex: 1 0 auto;
    height: 100%;
  }

  .slick-list {
    margin: 0 -0.8rem;
  }

  ${media.greaterThan('medium')`
      .slick-slide > div {
        margin: 0 1.6rem;
      }

      .slick-list {
        margin: 0 -1.6rem;
      }
    `}

  .slick-prev,
    .slick-next {
    display: block;
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: 2.5rem;
    height: 2.5rem;
    padding: 0;
    transform: translate(0, -50%);
  }

  .slick-prev {
    left: -5.6rem;
  }

  .slick-next {
    right: -5.6rem;
  }

  .slick-prev.slick-disabled,
  .slick-next.slick-disabled {
    visibility: hidden;
  }
`
