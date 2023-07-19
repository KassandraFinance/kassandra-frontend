import React from 'react'
import useMatomoEcommerce from '../../hooks/useMatomoEcommerce'

import * as S from './styles'

const Footer = () => {
  const { trackEventFunction } = useMatomoEcommerce()

  return (
    <S.Footer>
      <S.Container>
        {/* <S.Divider />
      <S.UpperContainer>
        <ul>
          <li>
            <h4>Company</h4>
          </li>
          <li>
            <Link href="/about">About</Link>
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
            <Link href="/products/ahype">$aHYPE Index</Link>
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
      </S.UpperContainer> */}
        <S.Divider />

        <S.LowerContainer>
          <S.LowerLeft>
            <img
              src="/assets/images/kassandra-footer.svg"
              alt="kassandra"
              width="266"
              height="26"
            />
            <span>© 2021-{new Date().getFullYear()} Kassandra.</span>
          </S.LowerLeft>
          <S.LowerRight>
            <ul>
              <li>
                <S.SocialIcon
                  href="https://discord.gg/fAqpbP6tFw"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEventFunction(
                      'click-on-link',
                      'media-social',
                      'footer'
                    )
                  }
                >
                  <img
                    src="/assets/socialMidia/discord.svg"
                    alt="Join our Discord community"
                    width="20"
                    height="20"
                  />
                </S.SocialIcon>
              </li>
              <li>
                <S.SocialIcon
                  href="https://t.me/KassandraDAO"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEventFunction(
                      'click-on-link',
                      'media-social',
                      'footer'
                    )
                  }
                >
                  <img
                    src="/assets/socialMidia/telegram.svg"
                    alt="Join our Telegram group"
                    width="20"
                    height="20"
                  />
                </S.SocialIcon>
              </li>
              <li>
                <S.SocialIcon
                  href="https://github.com/KassandraFinance"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEventFunction(
                      'click-on-link',
                      'media-social',
                      'footer'
                    )
                  }
                >
                  <img
                    src="/assets/socialMidia/github.svg"
                    alt="Access our GitHub repository"
                    width="20"
                    height="20"
                  />
                </S.SocialIcon>
              </li>
              <li>
                <S.SocialIcon
                  href="https://kassandrafoundation.medium.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEventFunction(
                      'click-on-link',
                      'media-social',
                      'footer'
                    )
                  }
                >
                  <img
                    src="/assets/socialMidia/medium.svg"
                    alt="Read our Medium blog"
                    width="20"
                    height="20"
                  />
                </S.SocialIcon>
              </li>
              <li>
                <S.SocialIcon
                  href="https://twitter.com/dao_kassandra"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEventFunction(
                      'click-on-link',
                      'media-social',
                      'footer'
                    )
                  }
                >
                  <img
                    src="/assets/socialMidia/twitter.svg"
                    alt="Follow our Twitter feed"
                    width="20"
                    height="20"
                  />
                </S.SocialIcon>
              </li>
              <li>
                <S.SocialIcon
                  href="http://gov.kassandra.finance/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEventFunction(
                      'click-on-link',
                      'media-social',
                      'footer'
                    )
                  }
                >
                  <img
                    src="/assets/socialMidia/discourse.svg"
                    alt="Follow our Discourse"
                    width="20"
                    height="20"
                  />
                </S.SocialIcon>
              </li>
            </ul>
            <S.Certified>
              <a
                href="https://www.certik.com/projects/kassandra-finance"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEventFunction('click-on-link', 'certik-audit', 'footer')
                }
              >
                <span>Audited By</span>
                <img src="/assets/logos/certik.svg" alt="Certik" />
              </a>
            </S.Certified>
          </S.LowerRight>
        </S.LowerContainer>
        <S.LowerContainerMobile>
          <ul>
            <li>
              <S.SocialIcon
                href="https://discord.com/invite/2uGEvqNnuq"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEventFunction('click-on-link', 'media-social', 'footer')
                }
              >
                <img
                  src="/assets/socialMidia/discord.svg"
                  alt="Join our Discord community"
                  width="20"
                  height="20"
                />
              </S.SocialIcon>
            </li>
            <li>
              <S.SocialIcon
                href="https://t.me/KassandraDAO"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEventFunction('click-on-link', 'media-social', 'footer')
                }
              >
                <img
                  src="/assets/socialMidia/telegram.svg"
                  alt="Join our Telegram group"
                  width="20"
                  height="20"
                />
              </S.SocialIcon>
            </li>
            <li>
              <S.SocialIcon
                href="https://github.com/KassandraFinance"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEventFunction('click-on-link', 'media-social', 'footer')
                }
              >
                <img
                  src="/assets/socialMidia/github.svg"
                  alt="Access our GitHub repository"
                  width="20"
                  height="20"
                />
              </S.SocialIcon>
            </li>
            <li>
              <S.SocialIcon
                href="https://kassandrafoundation.medium.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEventFunction('click-on-link', 'media-social', 'footer')
                }
              >
                <img
                  src="/assets/socialMidia/medium.svg"
                  alt="Read our Medium blog"
                  width="20"
                  height="20"
                />
              </S.SocialIcon>
            </li>
            <li>
              <S.SocialIcon
                href="https://twitter.com/dao_kassandra"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEventFunction('click-on-link', 'media-social', 'footer')
                }
              >
                <img
                  src="/assets/socialMidia/twitter.svg"
                  alt="Follow our Twitter feed"
                  width="20"
                  height="20"
                />
              </S.SocialIcon>
            </li>
            <li>
              <S.SocialIcon
                href="http://gov.kassandra.finance/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEventFunction('click-on-link', 'media-social', 'footer')
                }
              >
                <img
                  src="/assets/socialMidia/discourse.svg"
                  alt="Follow our Discourse"
                  width="20"
                  height="20"
                />
              </S.SocialIcon>
            </li>
          </ul>
          <S.LowerLeft>
            <img
              src="/assets/images/kassandra-footer.svg"
              alt="kassandra"
              width="266"
              height="26"
            />
            <span>© 2021-{new Date().getFullYear()} Kassandra.</span>
          </S.LowerLeft>
          <S.Certified>
            <a
              href="https://www.certik.com/projects/kassandra-finance"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEventFunction('click-on-link', 'certik-audit', 'footer')
              }
            >
              <span>Audited By</span>
              <img src="/assets/logos/certik.svg" alt="Certik" />
            </a>
          </S.Certified>
        </S.LowerContainerMobile>
      </S.Container>
    </S.Footer>
  )
}

export default Footer
