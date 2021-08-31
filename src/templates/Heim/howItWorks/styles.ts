import styled, {css} from "styled-components";
import media from "styled-media-query";


export const Container = styled.div`
    position: relative;
    width:100%;
    align-items: center;
    max-width:1440px;
    margin:auto;

  /* ${media.lessThan("small")`
  margin-top: -85%;
  `} */
`
export const SubTitle = styled.h3`
  ${({theme})=>css`

  ${media.lessThan("small")`
      font-size: ${theme.font.sizes.small};
      margin: 16px 0;
    `}
    font-size: ${theme.font.sizes.xlarge};
    font-weight: 300;
    margin: 32px 0;
    max-width: 100%px;
  `}
`

export const Image = styled.div`
  position: static;
  /* margin-top: -10%; */
  margin-bottom: -13%;

  img{
    width: 100%;
    height: auto;
  }
  ${media.lessThan("small")`
  margin-bottom: -13%;
  /* margin-top: -85%; */

  `}
`
export const Link = styled.div `
    a{
    background: linear-gradient(264.12deg, #020887 -197.65%, #26DBDB 272.42%);
    border: none;
    border-radius: 6px;
    color: #fcfcfc;
    text-decoration: none;
    font-size: 20px;

    height: 52px;
    padding: 12px 32px;
    cursor: pointer;
  }
`


export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 80%;
  ${media.lessThan("medium")`
    max-width: 100%;
    display: flex;
    justify-content: space-between;
  `  }
`
export const Text = styled.h3`
  ${({theme})=> css`
    position:absolute;
    text-align: center;
    margin: 20rem;
    font-size: ${theme.font.sizes.xlarge};


    ${media.lessThan('large')`
    font-size: ${theme.font.sizes.large};
    margin: 15rem;
    `}
    ${media.lessThan('medium')`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.normal};

    margin: 10rem;
    `}
    ${media.lessThan('small')`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.normal};
    margin: 4.5rem 1rem;
    `}
  `}
`

