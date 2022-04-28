/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.7);

  z-index: 20;

  animation: OpenModalEditInfo 500ms ease;
  @keyframes OpenModalEditInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
interface IModalUserEditInfoProps {
  modalOpen: boolean;
}

export const ModalEditInfo = styled.form<IModalUserEditInfoProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: ${props => (props.modalOpen ? 'block' : 'none')};

  background: #1F2937;
  border-radius: 1.2rem;

  z-index: 21;

  animation: OpenModalEditInfo 500ms ease;
  @keyframes OpenModalEditInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
export const HeaderModalEditInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 2.4rem;

  background-color: rgba(31, 31, 31, 0.72);

  border-bottom: 1px solid #C4C4C4;
  border-top-left-radius: 1.2rem;
  border-top-right-radius: 1.2rem;

  @media (max-width: 768px) {
    padding: 1.8rem;
  }

  p {
    font-size: 1.8rem;
    font-weight: ${theme.font.weight.medium};
  }

  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }
`
export const BodyModalEditInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 2.4rem;
`
export const UserProfileInfoContent = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const UserProfileInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 6rem;

  img {
    border-radius: 100%;
  }

  span {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 1rem;

    label, button {
      padding: 0.6rem 0.6rem;

      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0);
      border-radius: 0.4rem;

      color: #ffffff;
      font-size: 1.6rem;
      font-weight: ${theme.font.weight.light};

      text-align: center;
      transition: 0.2s;
      cursor: pointer;
    }
  }

  #InputFile {
    display: none;
  }

  > div {
    margin-top: 1.6rem;
  }

  p {
    margin-bottom: 1.2rem;

    color: #C4C4C4;
    font-size: 1.4rem;
    font-weight: ${theme.font.weight.medium};
  }

  input {
    width: 27.7rem;
    padding: 1.6rem;

    color: #C4C4C4;
    font-size: 1.6rem;
    font-weight: ${theme.font.weight.light};

    background: #1B1D22;
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 0.8rem;
  }

  @media (max-width: 768px) {
    margin-right: 0;
  }
`

export const UserNameContent = styled.div``

export const UserImageContent = styled.div`
  display: flex;
`

interface IUserSocialMidiaProps {
  isStateSocialMidia: boolean;
}

export const UserSocialMidia = styled.div<IUserSocialMidiaProps>`
  display: ${props => (props.isStateSocialMidia ? 'flex' : 'none')};
  justify-content: flex-start;
  flex-direction: column;

  @media (max-width: 768px) {
    animation: go-back 1s ease;
    @keyframes go-back {
      from {
        transform: translateY(-12%);
      }
      to {
        transform: translateY(0);
      }
    }
  }


  p {
    color: #C4C4C4;
    font-size: 1.4rem;
    font-weight: ${theme.font.weight.medium};

    margin-bottom: 1.2rem;

    @media (max-width: 768px) {
      display: none;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
`

export const SocialIcon = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 3.2rem;
    width: 3.2rem;
    margin-right: 1.6rem;

    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0);
    border-radius: 50%;
  }

  input {
    width: 23.6rem;
    height: 4rem;

    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    padding-left: 1.6rem;

    color: #C4C4C4;
    font-size: 1.6rem;
    font-weight: ${theme.font.weight.light};

    background: #1B1D22;
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 0.8rem;
  }
`

interface IModalManagerInfoProps {
  isStateManagerInfo: boolean;
}

export const ModalManagerInfo = styled.div<IModalManagerInfoProps>`
  display: ${props => (props.isStateManagerInfo ? 'flex' : 'none')};
  flex-direction: column;
  padding-top: 2.4rem;

  @media (max-width: 768px) {
    padding-top: 0;

    animation: go-back 1s ease;
    @keyframes go-back {
      from {
        transform: translateY(-12%);
      }
      to {
        transform: translateY(0);
      }
    }
  }

  p {
    margin-bottom: 1.2rem;

    color: #C4C4C4;
    font-size: 1.4rem;
    font-weight: ${theme.font.weight.medium};

    @media (max-width: 768px) {
      display: none;
    }
  }

  textarea {
    width: 100%;
    min-height: 10rem;
    padding: 1.6rem;

    border: 0;
    border-radius: 0.8rem;
    background: #1B1D22;

    font-family: ${theme.font.family};
    color: #ffffff;
    font-size: 1.6rem;
    font-weight: ${theme.font.weight.light};

    resize: none;

    ::-webkit-scrollbar {
      width: 0.8rem;
    }
    ::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.2);
      border-radius: 1rem;
    }
  }

  span {
    width: 100%;
    margin-top: 0.4rem;

    color: #C4C4C4;
    font-size: 1.6rem;
    font-weight: ${theme.font.weight.light};

    text-align: right;
  }
`

export const UserEditInfoButtons = styled.div`
  display: flex;
  width: 100%;
  gap: 1.6rem;

  padding-top: 3.6rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

interface IUserSocialAndInfoButtonProps {
  isStateSocialMidia: boolean;
}

export const UserSocialAndInfoButton = styled.button<IUserSocialAndInfoButtonProps>`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;

    width: 13rem;
    margin-top: 2rem;
    margin-bottom: ${props => props.isStateSocialMidia ? `1.2rem` : ``};

    color: #C4C4C4;
    font-size: 1.4rem;
    font-weight: ${theme.font.weight.medium};

    background-color: transparent;
    border: 0;

    cursor: pointer;

    #ImageContainer {
      display: flex;
      align-items: center;
      margin-left: 0.8rem;
    }

    img {
      ${props =>
        props.isStateSocialMidia ? `transform: rotate(180deg)` : `transform: rotate(0)`}
    }

  }
`
