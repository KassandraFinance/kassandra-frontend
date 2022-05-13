import styled from 'styled-components'

export const SharedImage = styled.div`
  position: relative;

  width: 100.1rem;
  height: 50.6rem;
  padding-top: 3rem;
  margin: 0 auto;

  display: grid;
  grid-template-rows: auto 1fr auto;

  background-color: rgba(31, 41, 55, 1);

  /* background-image: url('/assets/bg-products.png');
  background-repeat: no-repeat;
  background-size: 100rem;
  background-position-x: 50%; */
  /* box-shadow: rgb(21, 17, 23) 0px -20px 20px 0px inset; */
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 3rem;
`

export const Title = styled.div`
  display: flex;
  align-items: center;

  h1 {
    margin-left: 1.8rem;
    margin-right: 1.6rem;

    font-size: 4rem;
    font-weight: 300;
  }
`

export const Detail = styled.div`
  padding: 0.8rem 1rem;
  margin-right: 2rem;

  background: rgba(0, 0, 0, 0.19);
  border-radius: 1rem;

  font-size: 1.8rem;
  font-weight: 300;
`

export const HorizontalLine = styled.div`
  width: 11.9rem;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.3);
`

export const UserInfo = styled.div`
  display: flex;
  gap: 1.8rem;

  h2 {
    font-size: 3rem;
    font-weight: 700;
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 1.8rem;
`

export const ProfileImage = styled.div`
  width: 4rem;
  height: 4rem;

  background-color: red;
  border-radius: 50%;
`

export const ProfileAddress = styled.p`
  font-size: 2.4rem;
  font-weight: 300;
`

export const Main = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 1rem;
  padding: 0 3rem;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`
export const InfoTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1.3rem;

  span {
    font-size: 1.8rem;
    font-weight: 300;
  }
`

interface InfoValueProps {
  color: 'white' | 'green' | 'red';
}

const colors = {
  green: '#5ee56b',
  white: '#FFFFFF',
  red: '#EA3224'
}

// eslint-disable-next-line prettier/prettier
export const InfoValue =
  styled.div <
  InfoValueProps >
  `
  font-weight: 500;
  color: ${({ color }) => colors[color]};
  font-size: 5.6rem;
`

export const Assets = styled.div`
  font-size: 1.8rem;
  font-weight: 300;
`

export const AssetsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;

  margin-top: 1.6rem;
`

export const ChartContainer = styled.div`
  width: 100%;
  max-width: 54.7rem;
`

export const Footer = styled.footer`
  display: flex;
  gap: 1.6rem;

  padding-top: 1.6rem;
  padding-bottom: 1.6rem;
  margin-top: 2rem;
  padding: 1.6rem 3rem;

  background-color: #2d152b;
`

export const SocialMedia = styled.div`
  display: flex;
  gap: 0.8rem;

  font-size: 1.8rem;
  font-weight: 300;
`

export const BackgroundContainer = styled.div`
  position: absolute;
  bottom: 0;
  top: 0;

  svg {
    width: 100.1rem;
    height: 100%;
  }
`
