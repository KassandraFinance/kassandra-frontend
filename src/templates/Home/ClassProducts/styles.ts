import styled from 'styled-components'
import theme from '../../../styles/theme'

export const ClassProducts = styled.section`
  max-width: 960px;
  margin: 0 auto 160px;
  padding: 0 32px;

  text-align: center;

  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    margin: 0 auto 80px;
  }

  h1 {
    font-size: ${theme.font.sizes.font48};
    font-weight: ${theme.font.weight.black};
    line-height: 104%;

    margin-bottom: ${theme.spacings.space24};

    @media (max-width: 960px) {
      font-size: ${theme.font.sizes.font36};
      text-align: left;
    }
    @media (max-width: 760px) {
      font-size: ${theme.font.sizes.font32};
    }
    @media (max-width: 450px) {
      font-size: ${theme.font.sizes.font24};
    }
  }
  p {
    width: 100%;

    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.normal};
    letter-spacing: 4px;
    color: #f79640;
  }
  span {
    max-width: 750px;
    margin: 0 auto;

    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};
    line-height: 155%;
    @media (max-width: 960px) {
      text-align: left;
    }
  }
`
export const Divider = styled.div`
  border: 1px solid #f79640;

  width: 98px;
  margin: 25px auto;
`
export const Image = styled.div`
  text-align: center;
  margin-top: 150px;
  @media (max-width: 680px) {
    display: none;
  }
  img {
    max-width: 100%;
  }
`
export const ImageDescription = styled.div`
  margin-top: 35px;

  display: flex;
  justify-content: space-between;
  @media (max-width: 680px) {
    display: none;
  }
`
export const DescriptionContainer = styled.div`
  max-width: 160px;

  flex-direction: column;
  display: flex;

  color: ${theme.colors.snow};
  p {
    font-size: ${theme.font.sizes.font12};
    letter-spacing: 4px;
    margin-bottom: 12px;
  }
  span {
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
    line-height: 122.5%;
  }
  @media (max-width: 960px) {
    max-width: 130px;

    span {
      font-size: ${theme.font.sizes.font12};
    }
  }
`
