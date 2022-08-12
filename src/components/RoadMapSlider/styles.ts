import styled from 'styled-components'
import theme from '../../styles/theme'

export const Wrapper = styled.section`
  max-width: 100rem;
  margin: 0 auto 15rem;
  padding: 8px 0;
  @media (max-width: 1100px) {
    max-width: 86rem;
  }
  @media (max-width: 960px) {
    overflow-x: hidden;
    max-width: 88rem;
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

  .slick-dots {
    display: flex !important;
    justify-content: center;
    align-items: center;
    margin: 1.6rem 0 0;
    padding: 1rem 0;
    list-style-type: none;

    .slick-active {
      transform: scale(1);
    }

    li {
      margin: 0 0.5rem;
    }

    button {
      display: block;
      width: 1rem;
      height: 1rem;
      padding: 0;

      border: none;
      border-radius: 100%;
      background-color: ${theme.colors.grayDisabled};

      text-indent: -9999px;
    }

    li.slick-active button {
      background: ${theme.colors.cyan};
    }
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
  font-size: ${theme.font.sizes.font32};
  font-weight: ${theme.font.weight.bold};
  line-height: 110%;
  @media (max-width: 920px) {
    font-size: ${theme.font.sizes.font32};
  }
  @media (max-width: 570px) {
    font-size: ${theme.font.sizes.font24};
  }
`
export const Divider = styled.div`
  max-width: 10rem;
  height: 0.1rem;
  margin: 2.4rem auto 5.6rem;
  border-radius: 0.05rem;

  background: linear-gradient(99.25deg, #e843c4 0%, #ffbf00 100%, #ffbf00 100%);
`

export const SlickArrowButton = styled.button`
  background: transparent;
  border: none;
`
