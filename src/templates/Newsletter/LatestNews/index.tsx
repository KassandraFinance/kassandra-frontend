import MapPinIcon from '@/Icons/MapPin'
import * as S from './styles'
import { NewsletterSmallSection } from '../SmallSection'
import { NewsletterBigSection } from '../BigSection'

const fakeContent = [
  {
    title: 'TriCrypto Update 1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    title: 'TriCrypto Update 2',
    text: 'Lorem ipsum dolor sit amet 2, consectetur adipiscing elit 2...'
  },
  {
    title: 'TriCrypto Update 3',
    text: 'Lorem ipsum dolor sit amet 3, consectetur adipiscing elit 3...'
  },
  {
    title: 'TriCrypto Update 4',
    text: 'Lorem ipsum dolor sit amet 4, consectetur adipiscing elit 4...'
  }
]

export function NewsletterLatestNews() {
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <MapPinIcon />
        <S.H2>Latest News</S.H2>
      </S.TitleWrapper>

      <S.NewsWrapper>
        <NewsletterBigSection
          title={fakeContent[0].title}
          text={fakeContent[0].text}
        />
        <S.SmallSectionWrapper>
          {fakeContent.slice(1).map((content, index) => (
            <NewsletterSmallSection
              key={index}
              title={content.title}
              text={content.text}
            />
          ))}
        </S.SmallSectionWrapper>
      </S.NewsWrapper>
    </S.Wrapper>
  )
}
