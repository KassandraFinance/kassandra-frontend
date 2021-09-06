import styled from 'styled-components'

export const Background = styled.div`
  background: linear-gradient(90deg, #200A1B 0%, #000000 50%);
`

export const Hero = styled.section`
  height: calc(100vh - 110px);
  padding: 0 32px;
  display: grid;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  max-width: 1520px;
  @media (max-width: 770px) {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 160px);
  }
  @media (max-width: 600px) {
    height: calc(100vh - 140px);
  }
  @media (max-width: 370px) {
    height: calc(100vh - 160px);
  }
  h1 {
    font-size: 112px;
    font-weight: 400;
    line-height: 94px;
    @media (max-width: 1200px) {
      font-size: 80px;
      line-height: 70px;
    }
    @media (max-width: 960px) {
      font-size: 70px;
      line-height: 60px;
    }
    @media (max-width: 770px) {
      font-size: 60px;
      margin-bottom: 32px;
    }
    @media (max-width: 600px) {
      font-size: 50px;
    }
    @media (max-width: 420px) {
      font-size: 36px;
      margin-bottom: 0;
    }
  }
  h3 {
    font-size: 24px;
    font-weight: 300;
    margin: 32px 0;
    max-width: 600px;
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
  }
  .kassandra {
    max-height: 700px;
  }
  .h3-desktop {
    @media (max-width: 770px) {
      display: none;
    }
  }
  .h3-mobile {
    text-align: center;
    margin: 0 auto;
    h3 {
      margin: 8px 0 32px;
      font-size: 18px;
    @media (min-width: 375px) {
      margin: 8px 0 16px;
    }
    }
    @media (min-width: 771px) {
      display: none;
    }
  }
  .withepaper {
    background: transparent;
    border: 1px solid #26DBDB;
    border-radius: 6px;
    color: #fcfcfc;
    text-decoration: none;
    font-size: 20px;

    height: 52px;
    padding: 12px 32px;
    cursor: pointer;
    transition-duration: 300ms;
    &:hover {
      background-color: #26DBDB;
      color: #211426;
    }
    @media (max-width: 600px) {
      font-size: 16px;
      height: 48px;
    }
  }
  img {
    max-width: 560px;
    width: 100%;

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
    }
  }

  a {
    background: linear-gradient(264.12deg, #E843C4 -179.71%, #020887 205.21%);
    border: none;
    border-radius: 6px;
    color: #fcfcfc;
    text-decoration: none;
    font-size: 20px;

    height: 52px;
    padding: 12px 32px;
    cursor: pointer;
    @media (max-width: 600px) {
      font-size: 16px;
      height: 48px;
    }
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 460px;
  @media (max-width: 770px) {
    margin: 0 auto;
  }
  @media (max-width: 560px) {
    max-width: 400px;
  }
  @media (max-width: 440px) {
    flex-direction: column;
    height: 110px;
  }
`

export const Products = styled.section`
  padding: 40px 32px;
  h1 {
    font-size: 44px;
    font-weight: 500;
    text-align: center;
  }
  p {
    font-size: 24px;
    max-width: 700px;
    margin: 44px auto 32px;
    text-align: center;
  }
  .heim-container {
    border: none;
    border-radius: 50px;
    box-shadow:
      inset 0px 48.9702px 70.3162px -45.2033px rgba(255, 255, 255, 0.7),
      inset 0px 8.78952px 13.8121px -5.02258px rgba(255, 255, 255, 0.5),
      inset 0px -102.963px 85.3839px -80.3614px rgba(96, 68, 145, 0.3),
      inset 0px 123.053px 125.565px -60.271px rgba(202, 172, 255, 0.3), inset 0px 5.02258px 22.6016px rgba(154, 146, 210, 0.3),
      inset 0px 1.25565px 50.2258px rgba(227, 222, 255, 0.2);

    display: grid;
    grid-template-columns: 380px auto;
    justify-items: center;

    padding: 40px 16px;
    position: relative;
    .top-social-index {
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media (max-width: 420px) {
        flex-direction: column;
      }
    }
    .arrow-right {
      color: #26DBDB;
      font-size: 16px;
      text-decoration: none;
      @media (max-width: 420px) {
        margin: 20px 0;
      }
      &:hover {
        text-decoration: underline;
      }
      img {
        margin-left: 8px;
      }
    }
    @media (max-width: 880px) {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }
  @media (max-width: 375px) and (max-height: 800px) {
    padding-top: 100px;
  }
  @media (max-width: 370px) {
    padding-top: 120px;
  }
  @media (max-width: 320px) {
    padding-top: 180px;
  }
  .heim-grid-left {
    text-align: left;
    h3 {
      font-size: 36px;
      font-weight: 400;
    }
    p {
      font-size: 24px;
      margin: 16px 0;
      text-align: left;
    }
    .first-paragraph {
      font-weight: 300;
    }
    .second-paragraph {
      font-weight: 400;
    }
    @media (max-width: 960px) {
      h3 {
        font-size: 28px;
      }
      p {
        font-size: 18px;
      }
    }
    @media (max-width: 880px) {
      h3 {
        font-size: 32px;
      }
      p {
        font-size: 22px;
      }
    }
    @media (max-width: 540px) {
      h3 {
        font-size: 20px;
      }
      p {
        font-size: 16px;
      }
    }
  }
  .more-icon {
    display: block;
    margin: 16px auto;
  }
  .more-text {
    text-align: center;
    margin: 16px auto;
  }
`

export const ClassProducts = styled.section`
  padding: 40px 32px 80px;
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
    @media (max-width: 1160px) {
      grid-template-columns: 1fr;
      justify-items: center;
    }
    .img-token {
      display: block;
      width: 100%;
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
    padding: 80px 32px 200px;
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