import * as S from './styles'

interface ICallToActionEndPageProps {
  text: string
  children: JSX.Element
}

const CallToActionEndPage = ({ text, children }: ICallToActionEndPageProps) => (
  <S.CallToActionEndPage>
    <p>{text}</p>
    {children}
  </S.CallToActionEndPage>
)

export default CallToActionEndPage
