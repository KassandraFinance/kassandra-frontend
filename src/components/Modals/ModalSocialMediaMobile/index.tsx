import React from 'react'
import Image from 'next/image'

import discord from '../../../../public/assets/socialMidia/discord.svg'
import telegram from '../../../../public/assets/socialMidia/telegram.svg'
import twitter from '../../../../public/assets/socialMidia/twitter.svg'
import medium from '../../../../public/assets/socialMidia/medium.svg'
import github from '../../../../public/assets/socialMidia/github.svg'
import kacy64 from '../../../../public/assets/logos/kacy-64.svg'

import * as S from './styles'
import { useRouter } from 'next/router'

interface IModalSocialMediaMobileProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalSocialMediaMobile = ({
  setModalOpen
}: IModalSocialMediaMobileProps) => {
  const router = useRouter()
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
        <S.SocialIcon
          id="aboutMobile"
          onClick={() => {
            setModalOpen(false), router.push('/about')
          }}
        >
          <Image src={kacy64} alt="Github" width={24} height={24} />
          <span>About</span>
        </S.SocialIcon>
      </S.ModalContainer>
    </>
  )
}

export default ModalSocialMediaMobile
