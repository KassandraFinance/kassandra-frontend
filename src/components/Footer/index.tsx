import Link from 'next/link'
import React from 'react'

import * as S from './styles'

const Footer = () => (
  <S.Footer>
    <S.Container>
      <S.Divider />
      <S.UpperContainer>
        <ul>
          <li>
            <h4>Company</h4>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Partners</Link>
          </li>
        </ul>
        <ul>
          <li>
            <h4>Products</h4>
          </li>
          <li>
            <Link href="/">Kassandra DAO</Link>
          </li>
          <li>
            <Link href="/heim">$HEIM Index</Link>
          </li>
        </ul>
        <ul>
          <li>
            <h4>Legal</h4>
          </li>
          <li>
            <Link href="/">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/">Terms of Service</Link>
          </li>
        </ul>
      </S.UpperContainer>
      <S.Divider />

      <S.LowerContainer>
        <S.LowerLeft>
          <img
            src="/assets/kassandra-footer.svg"
            alt="kassandra"
            width="266"
            height="26"
          />
          <span>© 2021-{new Date().getFullYear()} Kassandra.</span>
        </S.LowerLeft>
        <S.LowerRight>
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
          <S.Certified>
            <span>Audited By</span>
            <img src="/assets/Certik.svg" alt="Certik" />
          </S.Certified>
        </S.LowerRight>
      </S.LowerContainer>
      <S.LowerContainerMobile>
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
        <S.LowerLeft>
          <img
            src="/assets/kassandra-footer.svg"
            alt="kassandra"
            width="266"
            height="26"
          />
          <span>© 2021-{new Date().getFullYear()} Kassandra.</span>
        </S.LowerLeft>
        <S.Certified>
          <span>Audited By</span>
          <img src="/assets/Certik.svg" alt="Certik" />
        </S.Certified>
      </S.LowerContainerMobile>
    </S.Container>
  </S.Footer>
)

export default Footer
