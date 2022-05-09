import styled from 'styled-components'

export const SharedImage = styled.div`
  width: 100.1rem;
  height: 50.6rem;
  padding-top: 3rem;
  padding-left: 3rem;
  padding-right: 3rem;
  margin: 0 auto;

  background-color: #2d152b;

  display: grid;
  grid-template-rows: auto 1fr auto;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 2.2rem;

  h1 {
    font-size: 4rem;
    font-weight: 300;
  }
`

export const Detail = styled.div`
  padding: 0.8rem 1rem;

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
  color: 'white' | 'green';
}

const colors = {
  green: '#5ee56b',
  white: '#FFFFFF'
}

// eslint-disable-next-line prettier/prettier
export const InfoValue = styled.div<InfoValueProps>`
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

  background-color: #2d152b;
`
export const SocialMedia = styled.div`
  display: flex;
  gap: 0.8rem;

  font-size: 1.8rem;
  font-weight: 300;
`

// Small

// import styled from 'styled-components'

// export const SharedImage = styled.div`
//   width: 50.7rem;
//   height: 25.3rem;
//   padding-top: 2rem;
//   padding-left: 2rem;
//   padding-right: 2rem;

//   background-color: #2d152b;

//   display: grid;
//   grid-template-rows: auto 1fr auto;
// `

// export const Header = styled.header`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `

// export const Title = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 0.8rem;

//   h1 {
//     font-size: 2rem;
//     font-weight: 300;
//   }
// `

// export const Detail = styled.div`
//   padding: 0.4rem 0.6rem;

//   background: rgba(0, 0, 0, 0.19);
//   border-radius: 1rem;

//   font-size: 0.9rem;
//   font-weight: 300;
// `

// export const HorizontalLine = styled.div`
//   width: 6rem;
//   height: 2px;
//   background-color: rgba(255, 255, 255, 0.3);
// `

// export const UserInfo = styled.div`
//   display: flex;
//   gap: 1.8rem;

//   h2 {
//     font-size: 1.4rem;
//     font-weight: 700;
//   }
// `

// export const Profile = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 1.8rem;
// `

// export const ProfileImage = styled.div`
//   width: 4rem;
//   height: 4rem;

//   background-color: red;
//   border-radius: 50%;
// `

// export const ProfileAddress = styled.p`
//   font-size: 1.2rem;
//   font-weight: 300;
// `

// export const Main = styled.main`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   margin-top: 1rem;
// `

// export const InfoContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 1.6rem;
// `

// export const Info = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 1.1rem;
// `
// export const InfoTitle = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 1.3rem;

//   span {
//     font-size: 1.8rem;
//     font-weight: 300;
//   }
// `

// export const InfoValue = styled.div`
//   font-weight: 500;
//   color: #5ee56b;
//   font-size: 5.6rem;
// `

// export const Assets = styled.div`
//   font-size: 1.8rem;
//   font-weight: 300;
// `

// export const AssetsContainer = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 2.4rem;

//   margin-top: 1.6rem;
// `

// export const ChartContainer = styled.div`
//   width: 100%;
//   max-width: 50.7rem;
//   /* height: 100%; */
// `

// export const Footer = styled.footer`
//   display: flex;
//   gap: 1.6rem;

//   padding-top: 1.6rem;
//   padding-bottom: 1.6rem;
//   margin-top: 2rem;

//   background-color: #2d152b;
// `
// export const SocialMedia = styled.div`
//   display: flex;
//   gap: 0.8rem;

//   font-size: 1.8rem;
//   font-weight: 300;
// `
