import styled, { css } from 'styled-components'

export const KassandraSuccess = styled.section`
  ${({ theme }) => css`
    padding: 80px 32px 120px;
    max-width: 1220px;
    margin: 0 auto;
    @media (min-width: 1880px) {
      padding: 80px 0 240px;
    }
    @media (min-width: 2200px) {
      padding: 80px 0 320px;
    }
    h1 {
      font-size: ${theme.font.sizes.font40};
      font-weight: ${theme.font.weight.medium};
      text-align: center;
      @media (max-width: 600px) {
        font-size: ${theme.font.sizes.font24};
      }
    }
    p {
      font-size: ${theme.font.sizes.font24};
      font-weight: ${theme.font.weight.light};
      text-align: center;
      max-width: 1000px;
      margin: 48px auto;
      @media (max-width: 800px) {
        font-size: ${theme.font.sizes.font18};
      }
      @media (max-width: 500px) {
        font-size: ${theme.font.sizes.font16};
      }
    }
    img {
      margin: 0;
    }
  `}
`

export const Success = styled.div`
  display: flex;
  max-width: 1520px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    flex-direction: column;
    max-width: 500px;
    margin: auto;
  }
  &::after {
    content: '';
    display: block;
    background: url(/assets/waves.svg) center no-repeat;
    background-size: cover;
    max-width: 100%;
    width: 100vw;
    height: 200px;
    margin-top: 520px;

    position: absolute;
    left: 0;
    @media (min-width: 1400px) {
      margin-top: 530px;
      height: 280px;
    }
    @media (min-width: 2200px) {
      height: 320px;
    }
    @media (min-width: 2400px) {
      height: 360px;
    }
    @media (max-width: 1030px) {
      margin-top: 1340px;
    }
    @media (max-width: 1000px) {
      height: 200px;
    }
    @media (max-width: 540px) {
      margin-top: 1260px;
      height: 120px;
    }
    @media (max-width: 500px) {
      margin-top: 1300px;
    }
    @media (max-width: 420px) {
      margin-top: 1400px;
    }
    @media (max-width: 370px) {
      margin-top: 1200px;
    }
  }
`

export const SuccessItem = styled.div`
  ${({ theme }) => css`
    text-align: center;
    padding: ${theme.spacings.space32};
    background-repeat: no-repeat;
    background-image: url(/assets/group-success-tl.svg), url(/assets/group-success-tr.svg);
    background-position: 0 0, 100% 0;
    width: 100%;
    h2 {
      font-size: ${theme.font.sizes.font24};
      margin-top: 16px;
      @media (max-width: 600px) {
        font-size: ${theme.font.sizes.font20};
      }
    }
    p {
      font-size: ${theme.font.sizes.font18};
      margin: 20px auto 48px;
      max-width: 280px;
      @media (max-width: 1024px) {
        max-width: 380px;
      }
      @media (max-width: 600px) {
        font-size: ${theme.font.sizes.font16};
      }
      @media (max-width: 370px) {
        font-size: 14px;
        margin: 20px 0 32px;
      }
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
    @media (max-width: 420px) {
      padding: 40px;
    }
    @media (max-width: 370px) {
      padding: 24px;
    }

    img {
      max-width: 150px;
      @media (max-width: 1024px) {
        max-width: 140px;
      }
      @media (max-width: 700px) {
        max-width: 130px;
      }
      @media (max-width: 420px) {
        max-width: 120px;
      }
      @media (max-width: 330px) {
        max-width: 110px;
      }
    }
  `}
`
