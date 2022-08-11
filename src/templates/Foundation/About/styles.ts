import styled from 'styled-components'
import theme from '../../../styles/theme'

export const About = styled.section`
  padding-inline: 2.4rem;

  @media (max-width: 576px) {
    padding-inline: 1.6rem;
  }
`

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  gap: 5.6rem;

  margin-bottom: 6.8rem;

  @media (max-width: 992px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 8.7rem;

    margin-bottom: 8.8rem;
  }
`

export const Text = styled.p`
  width: 45rem;
  margin-bottom: 4.3rem;

  color: ${theme.colors.white};
  font-weight: ${theme.font.weight.light};
  font-size: ${theme.font.sizes.font16};
  line-height: ${theme.font.sizes.font24};

  @media (max-width: 992px) {
    width: clamp(52.2rem, 90%, 59.6rem);
    margin-bottom: 0;
  }

  @media (max-width: 576px) {
    width: 100%;
    padding-inline: 2.4rem;

    font-size: ${theme.font.sizes.font14};
    letter-spacing: 0.05em;
  }
`

export const BulletPoints = styled.ul`
  display: flex;
  gap: 4.4rem;

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 2.4rem;

    width: 100%;
  }
`

export const BulletPointWrapper = styled.li`
  align-items: center;
`

export const BulletPoint = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.6rem;

  width: 13rem;

  @media (max-width: 576px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 100%;
  }
`

export const BulletPointTitle = styled.span`
  color: ${theme.colors.white};
  font-weight: ${theme.font.weight.bold};
  font-size: ${theme.font.sizes.font16};
  line-height: 104%;
`

export const BulletPointLine = styled.div`
  width: 3.5rem;
  height: 0.1rem;
  margin-top: 0.3rem;

  background: linear-gradient(90deg, #e843c4 0%, #ffbf00 100%);
  border-radius: 0.4rem;

  @media (max-width: 992px) {
    margin-top: 1rem;
  }

  @media (max-width: 576px) {
    margin: 0 auto;
    margin-top: 1.6rem;
  }
`

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3.2rem;

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
  }
`

export const CardWrapper = styled.article`
  width: 49.8rem;
  padding: 2.4rem;

  background: rgba(255, 255, 255, 0.04);
  border-radius: 1.2rem;

  @media (max-width: 992px) {
    width: clamp(53.2rem, 90%, 64.4rem);
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`

export const CardTitle = styled.h4`
  margin-bottom: 1rem;

  color: #c4c4c4;
  font-weight: ${theme.font.weight.normal};
  font-size: ${theme.font.sizes.font14};
  line-height: 100%;
  letter-spacing: 0.3em;
  text-transform: uppercase;
`

export const CardText = styled.p`
  color: ${theme.colors.white};
  font-weight: ${theme.font.weight.light};
  font-size: ${theme.font.sizes.font16};
  line-height: ${theme.font.sizes.font24};

  @media (max-width: 576px) {
    font-size: ${theme.font.sizes.font14};
    letter-spacing: 0.05em;
  }
`
