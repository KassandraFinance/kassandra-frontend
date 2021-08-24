import styled, {css} from "styled-components";
import media from "styled-media-query";


export const Container = styled.div`
${media.lessThan('medium')`
    position: relative;
    margin-bottom: 2.5rem;
`}
  max-width: 1520px;
  display: flex;
  margin: auto;
  /* height: calc(100vh - 110px); */

  position: relative;
  padding: 0 32px;

  display: grid;
  grid-template-columns: 4fr 5fr;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 770px) {
    display: grid;
  grid-template-columns: 4fr 5fr;
    /* height: calc(100vh - 180px); */
  }
  @media (max-width: 600px) {
    /* height: calc(100vh - 140px); */
  }
  @media (max-width: 370px) {
    /* height: calc(100vh - 160px); */
  }
  ${media.lessThan('small')`
    display: flex;
    flex-direction: column;
  `}
`
export const SubTitle = styled.h3`
    font-size: 3.1rem;
    font-weight: 300;
    margin: 32px 0;
    max-width: 100%px;
    @media (max-width: 1200px) {
      font-size: 27px;
    }
    @media (max-width: 960px) {
      font-size: 22px;
    }
    @media (max-width: 600px) {
      max-width: 440px;
    }
    @media (max-width: 420px) {
      font-size: 20px;
      max-width: 360px;
    }
`

export const Image = styled.div`
    position: relative;
    display:flex;
    justify-content: flex-end;
    img {
      max-width: 100%;
      ${media.lessThan('small')`
      display: none;

    `}

    @media (min-width: 1440px) {
      max-width: 100%;
    }
    @media (max-width: 1240px) {
      max-width: 100%;
      min-width: 230px;
    }
    @media (max-width: 770px) {
      max-width: 400px;
    }
    @media (max-width: 600px) {
      max-width: 300px;
      display: none;
    }
  }
`
export const Link = styled.div `
    a{
    background: linear-gradient(264.12deg, #020887 -197.65%, #26DBDB 272.42%);
    border: none;
    border-radius: 6px;
    color: #fcfcfc;
    text-decoration: none;
    font-size: 20px;

    height: 52px;
    padding: 12px 32px;
    cursor: pointer;
  }
`

export const Title = styled.h1`
  ${({theme})=>css`

      font-size: ${theme.font.sizes.xxlarge};
      font-weight: ${theme.font.normal};
      /* line-height: 94px; */

      @media (max-width: 1200px) {
            font-size: 44px;
            /* line-height: 70px; */
          }
          @media (max-width: 960px) {
            font-size: 36px;
            /* line-height: 60px; */
          }
          @media (max-width: 770px) {
            font-size: 36px;

          }
          @media (max-width: 600px) {
            font-size: 36px;
          }
          @media (max-width: 420px) {
            font-size: 2.4rem;
            margin-bottom: 0;
          }
  ` }
`
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 80%;
  ${media.lessThan("medium")`
    max-width: 100%;
    display: flex;
    justify-content: space-between;
  `  }
`

