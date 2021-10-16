import styled from 'styled-components'
import theme from '../../../styles/theme'

export const ClassProducts = styled.section`

  display: flex;
  flex-direction: column;
  padding: 130px 32px;
  text-align: center;
  max-width: 960px;
  margin: 0 auto;

  h1 {
    font-size: ${theme.font.sizes.font48};
    font-weight: ${theme.font.weight.black};
    line-height: 104%;
    margin-bottom: ${theme.spacings.space24};

  }
  p {
    width: 100%;
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.normal};
    letter-spacing: 4px;
    color:#F79640;
    text-align: center;
    /* margin: 0 auto; */
  }
  span{
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.normal};
    line-height: 155%;
    max-width: 750px;
    margin: 0 auto;
  }
  @media (max-width: 800px) {
      padding: 80px 20px;

    }
  `

export const Divider = styled.div`
  width: 98px;
  border: 1px solid #F79640;
  margin: 25px auto;
`
export const Image = styled.div`
  text-align: center;
  margin-top: 150px;
  img{
      max-width: 100%;

    }
`
export const ImageDescription = styled.div`
  display: flex;
  margin-top: 35px;
  justify-content: space-between;

`
export const DescriptionContainer = styled.div`
  max-width: 160px;
  color: ${theme.colors.snow};
  flex-direction: column;
  display: flex;
  p{
    font-size: ${theme.font.sizes.font12};
    letter-spacing: 4px;
    margin-bottom: 12px;
  }
  span{
    font-size: ${theme.font.sizes.font14};
    line-height: 122.5%;
  }
  @media(max-width: 960px) {
    max-width: 130px;

    span{
    font-size: ${theme.font.sizes.font12};
  }
  }
`
