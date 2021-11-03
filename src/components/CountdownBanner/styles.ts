import styled from "styled-components";
import theme from "../../styles/theme";


export const Background = styled.div`

  margin: 0 auto 5.4rem;
  @media(max-width: 100rem) {
    text-align: center;
    padding: 1.6rem 1.6rem;
    margin: 0 auto 2.4rem;
  }
`
export const Container = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 81.5rem;
  margin: auto;
  padding: 4rem;

  border: 1px solid rgba(255, 255, 255, 0.13);
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  background: rgba(33, 20, 38, 0.12);

  @media(max-width: 100rem) {
    text-align: center;
    /* padding: 1.6rem 1.6rem; */
  }
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  p{
    font-size: ${theme.font.sizes.font12};
    letter-spacing: 0.4rem;
    color: ${theme.colors.amber};
    margin-bottom: 2.4rem;
  }
  span{
    font-size: ${theme.font.sizes.font16};
    letter-spacing: 0.56rem;
    font-weight: ${theme.font.weight.light};
    color: ${theme.colors.amber};
    margin: 3.8rem 0 2.4rem;
}
`
export const TitleAndImage = styled.div`
  display: flex;
  align-items: flex-end;
  text-align: center;
  margin: 0 auto;
  h1{
    font-size: ${theme.font.sizes.font36};
    font-weight: ${theme.font.weight.black};
    line-height: 110%;
    max-width: 70rem;
    @media(max-width: 44rem) {
      font-size: 2.4rem;
    }
  }
  img {
    max-width: 3rem;
    margin-left: 0.6rem;
  }
`
export const TimerContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  max-width: 100%;
`
export const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 10rem;
  span {
    font-size: 6.4rem;
    letter-spacing: 0.32rem;
    font-weight: ${theme.font.weight.light};
    @media(max-width: 44rem) {
      font-size: 3.6rem;
    }
  }
  p{
    font-size: ${theme.font.sizes.font18};
  }
`
