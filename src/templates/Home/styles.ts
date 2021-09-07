import styled from 'styled-components'

export const ClassProducts = styled.section`
  padding: 40px 32px 80px;
  text-align: center;
  max-width: 1520px;
  margin: 0 auto;
  h1 {
    font-size: 44px;
    font-weight: 400;
    margin-bottom: 48px;
    @media (max-width: 600px) {
      font-size: 24px;
      font-weight: 500;
      margin-bottom: 16px;
    }
  }
  p {
    font-size: 24px;
    text-align: center;
    margin: 0 auto;
    @media (max-width: 600px) {
      font-size: 16px;
    }
  }
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    margin-top: 48px;
    @media (max-width: 1200px) {
      gap: 32px;
    }
    @media (max-width: 1020px) {
      grid-template-columns: 1fr;
      gap: 48px;
      justify-items: center;
    }
  }
  li {
    border-radius: 12px;
    color: #fafafa;
    backdrop-filter: blur(85.689px);
    width: 380px;

    &:first-child {
      box-shadow:
        inset 0px 37.1319px 53.3176px -34.2756px rgba(38, 219, 219, 0.7),
        inset 0px 6.6647px 10.4731px -3.8084px rgba(38, 219, 219, 0.5),
        inset 0px -78.0722px 64.7428px -60.9344px rgba(96, 68, 145, 0.3),
        inset 0px 93.3058px 95.21px -45.7008px rgba(202, 172, 255, 0.3),
        inset 0px 3.8084px 17.1378px rgba(154, 146, 210, 0.3),
        inset 0px 0.9521px 38.084px rgba(227, 222, 255, 0.2);
    }
    &:nth-child(2) {
      box-shadow: inset 0px 37.1319px 53.3176px -34.2756px rgba(255, 191, 0, 0.7), inset 0px 6.6647px 10.4731px -3.8084px rgba(255, 191, 0, 0.5), inset 0px -78.0722px 64.7428px -60.9344px rgba(96, 68, 145, 0.3), inset 0px 93.3058px 95.21px -45.7008px rgba(202, 172, 255, 0.3), inset 0px 3.8084px 17.1378px rgba(154, 146, 210, 0.3), inset 0px 0.9521px 38.084px rgba(227, 222, 255, 0.2);
    }
    &:nth-child(3) {
      box-shadow: inset 0px 37.1319px 53.3176px -34.2756px rgba(232, 67, 196, 0.7), inset 0px 6.6647px 10.4731px -3.8084px rgba(232, 67, 196, 0.5), inset 0px -78.0722px 64.7428px -60.9344px rgba(96, 68, 145, 0.3), inset 0px 93.3058px 95.21px -45.7008px rgba(202, 172, 255, 0.3), inset 0px 3.8084px 17.1378px rgba(154, 146, 210, 0.3), inset 0px 0.9521px 38.084px rgba(227, 222, 255, 0.2);
    }
    img {
      padding: 40px 0 48px;
    }

    h3 {
      font-size: 24px;
      font-weight: 500;
    }

    p {
      font-size: 18px;
      font-weight: 300;
      text-align: center;

      max-width: 300px;
      margin: 24px auto 40px;
    }
    @media (max-width: 1240px) {
      width: 360px;
    }
    @media (max-width: 1180px) {
      width: 300px;

      h3 {
        font-size: 22px;
      }

      p {
        font-size: 16px;
        max-width: 260px;
      }
    }
    @media (max-width: 1000px) {
      width: 380px;

      h3 {
        font-size: 24px;
      }
      p {
        font-size: 18px;
        max-width: 300px;
      }
    }
    @media (max-width: 420px) {
      width: 300px;

      h3 {
        font-size: 22px;
      }

      p {
        font-size: 16px;
        max-width: 260px;
      }
    }
    @media (max-width: 330px) {
      width: 260px;

      h3 {
        font-size: 20px;
      }

      p {
        font-size: 16px;
        max-width: 250px;
      }
    }
  }
`

export const Token = styled.section`
  padding: 40px 32px;
  text-align: center;

  h1 {
    font-size: 44px;
    font-weight: 400;
    margin-bottom: 48px;
    @media (max-width: 600px) {
      font-size: 24px;
      font-weight: 500;
      margin-bottom: 16px;
    }
  }
  p {
    font-size: 24px;
    max-width: 760px;
    text-align: center;
    margin: 0 auto;
    @media (max-width: 600px) {
      font-size: 16px;
    }
  }
  .grid-details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    max-width: 1520px;
    margin: 0 auto;
    @media (max-width: 1160px) {
      grid-template-columns: 1fr;
      justify-items: center;
    }
    .img-token {
      display: block;
      max-width: 100%;
      height: 100%;
      @media (max-width: 1160px) {
        margin-top: 48px;
        margin-bottom: 80px;
        max-width: 400px;
      }
      @media (max-width: 600px) {
        display: none;
      }
    }
    .img-token-96 {
      display: none;
      width: 100%;
      @media (max-width: 600px) {
        display: block;
        margin-top: 24px;
        margin-bottom: 24px;
      }
    }
    div {
      text-align: left;
      h3 {
        font-size: 32px;
        font-weight: 400;
        margin-bottom: 24px;
        @media (max-width: 600px) {
          font-size: 18px;
          text-align: center;
          margin-bottom: 16px;
        }
      }
      p {
        font-size: 24px;
        text-align: left;
        margin-bottom: 24px;
        @media (max-width: 600px) {
          font-size: 18px;
          font-weight: 300;
          text-align: center;
          margin-bottom: 16px;
        }
      }
      ul {
        margin-bottom: 48px;
      }
      li {
        font-size: 24px;
        margin: 8px 0;
        &::before {
          content: '';
          display: inline-block;
          background-color: #FCFCFC;
          width: 6px;
          height: 6px;
          border-radius: 3px;
          margin: 0 20px 4px 16px;
          @media (max-width: 390px) {
            width: 4px;
            height: 4px;
            border-radius: 2px;
            margin: 0 8px 2px 8px;
          }
        }
        @media (max-width: 600px) {
          font-size: 16px;
          font-weight: 300;
        }
        @media (max-width: 390px) {
          font-size: 15px;
        }
      }
      a {
        background: linear-gradient(264.12deg, #020887 -197.65%, #26DBDB 272.42%);
        border: none;
        border-radius: 6px;
        color: #fcfcfc;
        text-decoration: none;
        font-size: 20px;

        height: 52px;
        padding: 12px 32px;
        cursor: pointer;
        @media (max-width: 1160px) {
          display: block;
          margin: 0 auto;
          text-align: center;
        }
        @media (max-width: 390px) {
          width: 100%;
        }
      }
    }
  }
`

export const KassandraSuccess = styled.section`
  padding: 80px 32px 80px;
  @media (min-width: 1880px) {
    padding: 80px 0 240px;
  }
  @media (min-width: 2200px) {
    padding: 80px 0 320px;
  }
  h1 {
    font-size: 44px;
    font-weight: 400;
    text-align: center;
    @media (max-width: 600px) {
      font-size: 24px;
    }
  }
  p {
    font-size: 24px;
    text-align: center;
    max-width: 1000px;
    margin: 48px auto;
    @media (max-width: 800px) {
      font-size: 18px;
    }
    @media (max-width: 500px) {
      font-size: 16px;
    }
  }
  img {
    margin: 0;
  }
  .successgrid {
    display: flex;
    max-width: 1520px;
    margin: 0 auto;
    @media (max-width: 1024px) {
      flex-direction: column;
      max-width: 700px;
      margin: auto;
    }
    .successitem {
      text-align: center;
      padding: 60px;
      background-repeat: no-repeat;
      background-image: url(/assets/group-success-tl.svg), url(/assets/group-success-tr.svg);
      background-position: 0 0, 100% 0;
      p {
        font-size: 15px;
      }
      &:first-child {
        background-image: url(/assets/group-success-tl.svg), url(/assets/group-success-bl.svg), url(/assets/group-success-br.svg);
        background-position: 0 0, 0 100%, 100% 100%;
      }
      &:last-child {
        background-image: url(/assets/group-success-tr.svg), url(/assets/group-success-bl.svg), url(/assets/group-success-br.svg);
        background-position: 100% 0, 0 100%, 100% 100%;
      }
      @media (max-width: 1024px) {
        background-image: url(/assets/group-success-br.svg), url(/assets/group-success-tr.svg);
        background-position: 100% 100%, 100% 0;
        &:first-child {
          background-image: url(/assets/group-success-tl.svg), url(/assets/group-success-bl.svg), url(/assets/group-success-tr.svg);
          background-position: 0 0, 0 100%, 100% 0;
        }
        &:last-child {
          background-image: url(/assets/group-success-tl.svg), url(/assets/group-success-bl.svg), url(/assets/group-success-br.svg);
          background-position: 0 0, 0 100%, 100% 100%;
        }
      }
    }
  }
  &::after {
    content: '';
    display: block;
    background: url('../../../public/assets/waves.svg') center no-repeat;
    background-size: cover;
    max-width: 100%;
    width: 100vw;
    height: 200px;
    margin-top: 60px;

    position: absolute;
    left: 0;
    @media (min-width: 1400px) {
      margin-top: 20px;
      height: 280px;
    }
    @media (min-width: 1880px) {
      margin-top: 60px;
    }
    @media (min-width: 2200px) {
      margin-top: 120px;
      height: 320px;
    }
    @media (min-width: 2400px) {
      margin-top: 100px;
      height: 360px;
    }
    @media (max-width: 1000px) {
      height: 200px;
    }
    @media (max-width: 540px) {
      height: 120px;
    }
  }
`

export const KassandraArchitecture = styled.section`
  text-align: center;
  padding: 40px 32px;
  h1 {
    font-size: 44px;
    font-weight: 500;
    text-align: center;
    @media (max-width: 800px) {
      font-size: 32px;
    }
    @media (max-width: 500px) {
      font-size: 24px;
    }
  }
  p {
    font-size: 24px;
    text-align: center;
    max-width: 1000px;
    margin: 48px auto;
    @media (max-width: 800px) {
      font-size: 18px;
    }
    @media (max-width: 500px) {
      font-size: 16px;
    }
  }
  .img-kassandra-architecture {
    max-width: 100%;
  }
  .grid-paragraph {
    display: grid;
    grid-template-columns: 4fr 5fr;
    gap: 80px;
    margin: 64px 0;
    @media (max-width: 800px) {
      grid-template-columns: 1fr;
      gap: 0px;
    }
    p {
      font-size: 18px;
      text-align: left;
      margin: 8px 0;
      @media (max-width: 800px) {
        font-size: 16px;
      }
      @media (max-width: 500px) {
        font-size: 15px;
      }
    }
  }
`

export const Supporters = styled.section`
    padding: 40px 32px 0;
  h1 {
    font-size: 44px;
    font-weight: 500;
    text-align: center;
    @media (max-width: 600px) {
      font-size: 24px;
    }
  }

  p {
    font-size: 24px;
    max-width: 700px;
    margin: 36px auto 0;
    text-align: center;
    @media (max-width: 600px) {
      font-size: 16px;
      max-width: 280px;
      margin: 16px auto 0;
    }
  }
  .grid-supporters {
    display: flex;
    justify-items: center;
    align-items: center;
    padding: 64px 0;
    a {
      flex: auto;
      text-align: center;
      img {
        height: 50px;
        width: 100%;
      }
    }
    @media (max-width: 800px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 40px;
    }
    @media (max-width: 600px) {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }
`