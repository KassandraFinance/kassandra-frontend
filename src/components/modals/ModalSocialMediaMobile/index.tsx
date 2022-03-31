import React from 'react'
import Image from 'next/image'

import discord from '../../../../public/assets/Discord.svg'
import telegram from '../../../../public/assets/telegram.svg'
import twitter from '../../../../public/assets/Twitter.svg'
import medium from '../../../../public/assets/Medium.svg'
import github from '../../../../public/assets/Github.svg'

import * as S from './styles'

interface IModalSocialMediaMobileProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalSocialMediaMobile = ({
  setModalOpen
}: IModalSocialMediaMobileProps) => {
  return (
    <>
      <S.Backdrop onClick={() => setModalOpen(false)} />
      <S.ModalContainer>
        <S.SocialIcon
          href="https://discord.gg/fAqpbP6tFw"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setModalOpen(false)}
        >
          <Image src={discord} alt="discord" />
          <span>Discord</span>
        </S.SocialIcon>
        <S.SocialIcon
          href="https://t.me/KassandraDAO"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setModalOpen(false)}
        >
          <Image src={telegram} alt="telegram" />
          <span>Telegram</span>
        </S.SocialIcon>
        <S.SocialIcon
          href="https://twitter.com/dao_kassandra"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setModalOpen(false)}
        >
          <Image src={twitter} alt="twitter" />
          <span>Twitter</span>
        </S.SocialIcon>
        <S.SocialIcon
          className="medium"
          href="https://kassandrafoundation.medium.com/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setModalOpen(false)}
        >
          <Image className="medium" src={medium} alt="medium" />
          <span>Medium</span>
        </S.SocialIcon>
        <S.SocialIcon
          href="https://github.com/KassandraFinance"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setModalOpen(false)}
        >
          <Image src={github} alt="Github" />
          <span>Github</span>
        </S.SocialIcon>
      </S.ModalContainer>
    </>
  )
}

export default ModalSocialMediaMobile
