import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  .scroll-anchor {
    display: inline-block;
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
    top: 35%;
    left: 50%;
    width: 0.5rem;
    height: 1rem;
    /* margin: 2rem 0 0 -2px; */
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
      top: 0.5rem;
    }
    15% {
      opacity: 1;
      top: 32%;
    }
    50% {
      opacity: 0;
      top: 30%;
    }
    100% {
      opacity: 0;
      top: 32%;
    }
  }
`
