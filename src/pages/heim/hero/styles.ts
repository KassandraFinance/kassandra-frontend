import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 110px);

  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 770px) {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 180px);
  }
  @media (max-width: 600px) {
    height: calc(100vh - 140px);
  }
  @media (max-width: 370px) {
    height: calc(100vh - 160px);
  }
`

export const Title = styled.h1 `

    font-size: 56px;
    font-weight: 400;
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
      font-size: 24px;
      margin-bottom: 0;

  }
`
export const SubTitle = styled.h3`
    font-size: 31px;
    font-weight: 300;
    margin: 32px 0;
    max-width: 510px;
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

    max-width: 660px;
    /* display: flex;
    justify-content: right; */
    img {

    /* max-width: 765px; */

    /* @media (min-width: 1440px) {
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
    } */
  }
`
export const Link = styled.a `
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
