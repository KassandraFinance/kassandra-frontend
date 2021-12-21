import styled from 'styled-components'
import theme from '../../styles/theme'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  max-width: 100rem;
  margin: 0 auto;
  margin-bottom: 15rem;
  @media (max-width: 920px) {
    overflow-x: hidden;
    padding: 0 3.2rem;
  }

  .slick-active,
  .slick-slide {
    opacity: 0.5;
    filter: blur(1px);
    transform: scale(0.8);
  }

  .slick-current {
    opacity: 1;
    filter: blur(0px);
    transform: scale(1);
  }

  .slick-track {
  }
  .slick-track,
  .slick-list {
    display: flex;
  }

  .slick-slide > div {
    flex: 1 0 auto;
    height: 100%;
  }

  .slick-list {
    margin: 0 -0.8rem;
  }

  @media (max-width: 920px) {
    .slick-slide > div {
      margin: 0 1.6rem;
    }

    .slick-list {
      margin: 0 -1.6rem;
    }
  }

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
export const TitleAndIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Icon = styled.div`
  background: #ffffff0a;
  border-radius: 100%;
  width: 4.7rem;
  height: 4.4rem;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 2.4rem;
  img {
    max-width: 100%;
  }
`
export const Title = styled.h1`
  font-size: ${theme.font.sizes.font40};
  font-weight: ${theme.font.weight.bold};
  line-height: 114%;
  @media (max-width: 920px) {
    font-size: ${theme.font.sizes.font32};
  }
`
export const Divider = styled.div`
  max-width: 10rem;
  height: 0.3rem;
  background: linear-gradient(99.25deg, #e843c4 0%, #ffbf00 100%, #ffbf00 100%);
  margin: 2.4rem auto 9.7rem;
  @media (max-width: 920px) {
    margin: 2.4rem auto 5.6rem;
  }
`
