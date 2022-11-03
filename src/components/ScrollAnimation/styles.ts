import styled from 'styled-components'

export const Wrapper = styled.div`
  .scroll-anchor {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }

  .icon-scroll {
    height: 3.9rem;
    width: 2.4rem;
    border: 0.2rem solid white;
    border-radius: 1.2rem;
    margin: 0px auto;

    position: relative;
  }

  .circle-wrap {
    width: 0.5rem;
    height: 1rem;
    background-color: white;
    margin: 0 auto;
    border-radius: 0.6rem;
    margin-top: 0.6rem;
  }

  .icon-scroll > * {
    position: absolute;
    display: block;
    top: 15%;
    left: 50%;
    width: 0.5rem;
    height: 1rem;
    background: white;
    border-radius: 0.6rem;
    animation: ani-mouse 2.5s linear infinite;
    transform: translateX(-50%);
  }

  span {
    display: block;
    margin-top: 0.8rem;

    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #ffffff;
    font-size: 1.4rem;
  }

  @keyframes ani-mouse {
    0% {
      opacity: 1;
      top: 0rem;
    }
    15% {
      opacity: 1;
      top: 16%;
    }
    50% {
      opacity: 0;
      top: 18%;
    }
    100% {
      opacity: 0;
      top: 16%;
    }
  }
`
