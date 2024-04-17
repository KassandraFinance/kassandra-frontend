import NewButton from '@/components/NewButton'
import * as S from './styles'

interface BigSectionProps {
  title: string
  text: string
}

export function NewsletterBigSection({ title, text }: BigSectionProps) {
  return (
    <S.BigSection>
      <S.BigSectionContent>
        <S.BigSectionText>
          <S.H3>{title}</S.H3>
          <S.Text>{text}</S.Text>
        </S.BigSectionText>
        <NewButton background="ghost" text="Read More" size="large" />
      </S.BigSectionContent>
      <S.BigSectionImage />
    </S.BigSection>
  )
}
