import styled, { css } from 'styled-components'

export const ClassProducts = styled.section`
    ${({ theme }) => css`
    padding: 80px 32px;
    text-align: center;
    max-width: 1520px;
    margin: 0 auto;

    @media (max-width: 330px) {
      padding: 80px 20px;
    }

    h1 {
      font-size: ${theme.font.sizes.font40};
      font-weight: ${theme.font.weight.medium};
      margin-bottom: ${theme.spacings.space48}
;
      @media (max-width: 600px) {
        font-size: ${theme.font.sizes.font24};
        font-weight: ${theme.font.weight.medium};
        margin-bottom: 16px;
      }
    }
    p {
      font-size: ${theme.font.sizes.font24};
      font-weight: ${theme.font.weight.light};
      text-align: center;
      margin: 0 auto;
      @media (max-width: 600px) {
        font-size: ${theme.font.sizes.font16};
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
        font-size: ${theme.font.sizes.font24};
        font-weight: ${theme.font.weight.medium};
      }

      p {
        font-size: ${theme.font.sizes.font18};
        font-weight: ${theme.font.weight.light};
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
          font-size: ${theme.font.sizes.font16};
          max-width: 260px;
        }
      }
      @media (max-width: 1000px) {
        width: 380px;

        h3 {
          font-size: ${theme.font.sizes.font24};
        }
        p {
          font-size: ${theme.font.sizes.font18};
          max-width: 300px;
        }
      }
      @media (max-width: 420px) {
        width: 300px;

        h3 {
          font-size: 22px;
        }

        p {
          font-size: ${theme.font.sizes.font16};
          max-width: 260px;
        }
      }
      @media (max-width: 330px) {
        width: 260px;

        h3 {
          font-size: ${theme.font.sizes.font20};
        }

        p {
          font-size: ${theme.font.sizes.font16};
          max-width: 250px;
        }
      }
    }
  `}
`
