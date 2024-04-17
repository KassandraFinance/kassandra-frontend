import { NewsletterHeader } from './Header'
import { NewsletterLatestNews } from './LatestNews'
import * as S from './styles'

export function Newsletter() {
  return (
    <S.Wrapper>
      <NewsletterHeader />
      <NewsletterLatestNews />
    </S.Wrapper>
  )
}
