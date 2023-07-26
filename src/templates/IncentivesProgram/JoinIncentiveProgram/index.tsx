import Button from '@/components/Button'

import * as S from './styles'

const JoinIncentiveProgram = () => {
  return (
    <S.JoinIncentiveProgram>
      <S.Title>Join Kassandra&rsquo;s Incentive Program</S.Title>
      <S.ButtonWrapper>
        <Button
          className="join"
          backgroundPrimary
          text="Submit Your Pool"
          as="a"
          href="https://tally.so/r/3XrKdz"
          target="_blank"
        />
      </S.ButtonWrapper>
    </S.JoinIncentiveProgram>
  )
}

export default JoinIncentiveProgram
