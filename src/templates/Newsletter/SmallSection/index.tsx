import NewButton from '@/components/NewButton'
import * as S from './styles'

interface SmallSectionProps {
  title: string
  text: string
}

export function NewsletterSmallSection({ title, text }: SmallSectionProps) {
  return (
    <S.SmallSection>
      <S.SmallSectionImage />
      <S.SmallSectionContent>
        <S.SmallSectionText>
          <S.H3>{title}</S.H3>
          <S.Text>{text}</S.Text>
        </S.SmallSectionText>
        <NewButton
          background="ghost"
          text="Read More"
          size="large"
          fullWidth
          className="ghostButton"
        />
      </S.SmallSectionContent>
    </S.SmallSection>
  )
}
