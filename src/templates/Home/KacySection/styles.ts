import styled from 'styled-components'

export const KacySectionContainer = styled.section`
  position: relative;

  display: flex;
  align-items: center;
  gap: 8rem;

  padding-inline: 2.4rem;
  margin-top: 31.8rem;
  margin-bottom: 15.9rem;

  @media (max-width: 992px) {
    flex-direction: column-reverse;
    gap: 7.4rem;

    margin-top: 23.8rem;
    margin-bottom: 9.7rem;
  }

  @media (max-width: 576px) {
    padding-inline: 1.6rem;
    margin-top: 12.4rem;
    margin-bottom: 0;
  }
`

export const ImgWrapper = styled.div`
  position: absolute;

  display: none;

  z-index: -1;

  @media (max-width: 576px) {
    top: -15rem;
    left: 0;
    display: block;
  }
`
