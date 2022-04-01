import Image from 'next/image'

import { IDateProps } from '../DelegateVotingPower'

import * as S from '../styles'

interface IOptionsProps {
  optionsOpen: boolean;
  setOptionsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: any;
  delegateSelected: IDateProps;
  setDelegateSelected: React.Dispatch<React.SetStateAction<IDateProps>>;
  undelegate?: boolean;
}

const Options = ({
  optionsOpen,
  setOptionsOpen,
  data,
  delegateSelected,
  setDelegateSelected,
  undelegate
}: IOptionsProps) => {
  return (
    <>
      <S.BackdropSelect
        onClick={() => {
          if (delegateSelected.nameToken !== '') {
            setDelegateSelected({
              image: '',
              nameToken: '',
              withdrawDelay: '',
              votingPower: ''
            })
            setOptionsOpen(false)
          }
          setOptionsOpen(false)
        }}
        style={{ display: optionsOpen ? 'block' : 'none' }}
      />
      <S.Modal isOpenOption={optionsOpen} undelegate={undelegate}>
        {data.map((item: any, index: number) => (
          <S.Option
            key={index}
            onClick={() => {
              setDelegateSelected(item)
              setOptionsOpen(false)
            }}
          >
            <S.Name>
              <Image src={item.image} width={24} height={24} alt="" />
              <S.WithdrawDelay>
                <p>{item.nameToken}</p>
                <span>{item.withdrawDelay} days withdraw delay</span>
              </S.WithdrawDelay>
            </S.Name>
            <S.VotingPower>
              <p>{item.votingPower}</p>
              <span>Voting power</span>
            </S.VotingPower>
          </S.Option>
        ))}
      </S.Modal>
    </>
  )
}

export default Options
