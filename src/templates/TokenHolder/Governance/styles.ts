import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5.6rem;

  margin: 12rem 1.6rem;

  max-width: 112rem;

  @media (min-width: 860px) {
    margin: 18rem auto;
    padding: 0 1.6rem;

    /* align-items: center;
    flex-direction: row; */

    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }

  .button {
    flex-direction: row-reverse;
    gap: 0.8rem;
  }
`

export const Text = styled.div`
  span {
    @media (max-width: 860px) {
      display: block;
      text-align: center;
    }
  }

  h2 {
    @media (max-width: 640px) {
      font-size: 2.4rem;
      line-height: 3.2rem;

      margin-bottom: 2.4rem;
      margin-top: 1.6rem;
    }

    @media (max-width: 860px) {
      font-size: 3.2rem;
      line-height: 3.52rem;

      text-align: center;

      margin-bottom: 2.4rem;
      margin-top: 1.6rem;
    }

    margin: 1.6rem 0;
  }

  p {
    @media (max-width: 640px) {
      font-size: 1.4rem;
      line-height: 2.4rem;

      text-align: left;

      margin-bottom: 2.4rem;
    }

    @media (max-width: 860px) {
      font-size: 1.6rem;
      line-height: 2.4rem;

      text-align: center;

      margin-bottom: 2.4rem;
    }

    text-align: left;
    margin-bottom: 3.2rem;
  }

  button {
    @media (max-width: 860px) {
      margin: 0 auto;
      display: block;
    }
  }
`

export const Image = styled.div`
  position: relative;

  width: 100%;
  max-width: 54rem;
  height: 44.1rem;
  margin: 0 auto;

  background: linear-gradient(
    180deg,
    #d9d9d9 50%,
    rgba(217, 217, 217, 0.1) 99.03%
  );
  border-radius: 6.18868px;

  @media (max-width: 550px) {
    width: 100%;
    height: 27rem;
  }
`

export const Button = styled.button`
  padding: 1.5rem 3.2rem;
  background-color: ${({ theme }) => theme.colors.blue};
`
