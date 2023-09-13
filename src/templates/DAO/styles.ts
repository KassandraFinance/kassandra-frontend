import styled from 'styled-components'

export const Wrapper = styled.div`
  background-image: url('/assets/images/1920-dao-bg.png');
  background-image: image-set(
    url('/assets/images/1920-dao-bg.webp') type('image/webp'),
    url('/assets/images/1920-dao-bg.png') type('image/png')
  );
  background-repeat: no-repeat;
  background-size: auto;
  background-position: left top;

  @media (max-width: 992px) {
    background: url('/assets/images/768px-dao-bg.png');
    background-image: image-set(
      url('/assets/images/768px-dao-bg.webp') type('image/webp'),
      url('/assets/images/768px-dao-bg.png') type('image/png')
    );
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left top;
  }

  @media (max-width: 576px) {
    background: url('/assets/images/360px-dao-bg.png');
    background-image: image-set(
      url('/assets/images/360px-dao-bg.webp') type('image/webp'),
      url('/assets/images/360px-dao-bg.png') type('image/png')
    );
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left top;
  }

  .button {
    flex-direction: row-reverse;
    gap: 0.8rem;
  }
`

export const HeroWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const Button = styled.a`
  display: flex;
  padding: 1.6rem 3.2rem;
  gap: 1.6rem;

  max-width: 22.2rem;
  width: 100%;
  height: 4.8rem;
  margin: 0 auto;

  background: linear-gradient(93.84deg, #e843c4 0.12%, #0c3ddc 100%);
  border-radius: 0.4rem;
  font-size: 1.6rem;
  cursor: pointer;
`
