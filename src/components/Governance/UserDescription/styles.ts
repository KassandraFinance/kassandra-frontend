import styled from 'styled-components'
import theme from '../../../styles/theme'

export const UserDescription = styled.div`
  display: flex;
  width: 100%;

  background: rgba(255, 255, 255, 0.04);
  border: 0.1rem solid rgba(255, 255, 255, 0.2);
  border-radius: 1.2rem;

  @media (max-width: 650px) {
    flex-direction: column;
  }
`

export const BarBottom = styled.div`
  @media (max-width: 650px) {
    border: 0.1rem solid rgba(255, 255, 255, 0.2);
    width: 90%;
    margin: 0 auto;
  }
`

export const UserInfo = styled.div`
  display: flex;

  padding-top: 3.2rem;
  padding-left: 3.2rem;
  padding-bottom: 3.2rem;

  @media (max-width: 650px) {
    padding-top: 3.2rem;
    padding-left: 3.2rem;
    padding-bottom: 1.3rem;
  }
`

export const UserInfoContent = styled.div`
  margin-top: 1.2rem;

  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;

    padding-right: 3rem;
    margin-top: 0;
  }

  > span {
    min-width: 7.2rem;
  }

  > button {
    display: none;
    @media (max-width: 650px) {
      display: flex;
      justify-content: center;

      width: 100px;
      margin-top: 1rem;

      background-color: transparent;
      border: none;

      color: #ffffff;
      font-size: ${theme.font.sizes.font14};
      font-weight: ${theme.font.weight.light};

      > img {
        margin-left: 0.8rem;
      }
    }
  }
`

export const UserProfileContent = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-left: 1.6rem;
  padding-right: 3.2rem;

  border-right: 0.1rem solid rgba(255, 255, 255, 0.2);

  @media (max-width: 650px) {
    border: none;
    margin-left: 0;
  }

  p {
    margin-bottom: 0.8rem;

    @media (max-width: 650px) {
      padding-top: 0.6rem;
      margin-bottom: 1.3rem;
    }

    color: #ffffff;
    font-size: ${theme.font.sizes.font20};
    font-weight: ${theme.font.weight.medium};
  }

  ul {
    display: flex;

    margin-bottom: 1.3rem;
    margin-top: 0.5rem;
    gap: 0.8rem;
  }
`

export const EditInfoButton = styled.button`
  display: flex;
  gap: 0.8rem;

  background-color: transparent;
  border: none;

  color: #ffffff;
  font-size: ${theme.font.sizes.font14};
  font-weight: ${theme.font.weight.light};

  cursor: pointer;

  @media (max-width: 650px) {
    display: none;
  }
`

export const UserAddressContent = styled.span`
  display: flex;
  align-items: center;

  width: 100%;
  margin-bottom: 0.8rem;
  gap: 1rem;

  font-size: ${theme.font.sizes.font14};
  font-weight: ${theme.font.weight.light};

  button {
    background-color: transparent;
    border: 0;

    cursor: pointer;
  }
`

export const ManagerInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.2rem;

  .titleManagerInfo {
    display: flex;
    margin-bottom: 0.8rem;

    color: #c4c4c4;
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.medium};

    > span {
      margin-left: 0.8rem;
    }
  }
`

// eslint-disable-next-line prettier/prettier
export const DescriptionManagerInfo = styled.p`
  color: #ffffff;
  font-size: ${theme.font.sizes.font16};
  font-weight: ${theme.font.weight.light};
  line-height: 2.1rem;
`
interface IisSeeMoreProps {
  isSeeMore: boolean;
}

// eslint-disable-next-line prettier/prettier
export const ButtonSeeMore = styled.button<IisSeeMoreProps>`
  position: relative;

  width: 7rem;
  margin-left: 1rem;
  border: 0;

  color: #ffffff;
  background-color: transparent;

  font-size: 1.1rem;
  font-family: ${theme.font.family};
  font-weight: ${theme.font.weight.medium};

  text-align: start;
  cursor: pointer;

  > span {
    position: absolute;
    right: -0.1rem;

    img {
      ${props =>
        props.isSeeMore ? `transform: rotate(180deg)` : `transform: rotate(0)`}
    }
  }
`

export const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 2.4rem;
  width: 2.4rem;

  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0);
  border-radius: 50%;

  transition: border ${theme.transition.default};

  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  img {
    height: 1.6rem;
    width: 1.6rem;
  }
`
