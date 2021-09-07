import styled from 'styled-components'

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