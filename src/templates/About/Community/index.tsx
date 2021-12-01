import React from 'react'

import * as S from './styles'

//create a functional component that return a styled component Title with join in $KACY community and icons of social media
const Community = () => (
  <S.Container>
    <S.Title>
      Join in $KACY community
      <S.Divider />
    </S.Title>
    <S.Icons>
      <ul>
        <li>
          <a
            href="https://discord.com/invite/2uGEvqNnuq"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/discord-icon.svg"
              alt="Join our Discord community"
              width="32"
              height="32"
            />
          </a>
        </li>
        <li>
          <a
            href="https://t.me/KassandraDAO"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/telegram-icon.svg"
              alt="Join our Telegram group"
              width="32"
              height="32"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/KassandraFinance"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/github-icon.svg"
              alt="Access our GitHub repository"
              width="32"
              height="32"
            />
          </a>
        </li>
        <li>
          <a
            href="https://kassandrafoundation.medium.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/medium-icon.svg"
              alt="Read our Medium blog"
              width="32"
              height="32"
            />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/dao_kassandra"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/twitter-icon.svg"
              alt="Follow our Twitter feed"
              width="32"
              height="32"
            />
          </a>
        </li>
      </ul>
    </S.Icons>
  </S.Container>
)

export default Community
