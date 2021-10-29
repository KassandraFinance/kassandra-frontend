import React from 'react'
import BigNumber from 'bn.js'
import { useSelector, RootStateOrAny } from 'react-redux'

import { BNtoDecimal } from '../../utils/numerals'
import { confirmStake } from '../../utils/confirmTransactions'

import { Kacy, Staking } from '../../constants/tokenAddresses'

import useERC20Contract from '../../hooks/useERC20Contract'
import useStakingContract from '../../hooks/useStakingContract'

import InputTokenValue from '../InputTokenValue'

import * as S from './styles'
import Button from '../Button'

interface IModalStakingProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  pid: number;
  decimals: string;
  stakingToken: string;
}

const ModalStaking = ({
  modalOpen,
  setModalOpen,
  pid,
  decimals,
  stakingToken
}: IModalStakingProps) => {
  const [balance, setBalance] = React.useState<BigNumber>(new BigNumber(0))
  const [amountStaking, setAmountStaking] = React.useState<BigNumber>(new BigNumber(0))
  const [multiplier, setMultiplier] = React.useState<number>(0)
  const [isAmount, setIsAmount] = React.useState<boolean>(false)
 
  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)
  const inputRef = React.useRef<HTMLInputElement>(null)
  const kacyToken = useERC20Contract(stakingToken)
  const kacyStake = useStakingContract(Staking)

  function handleKacyAmount(percentage: BigNumber) {
    const kacyAmount = percentage.mul(balance).div(new BigNumber(100))
    
    if (inputRef.current !== null) {
      inputRef.current.value = BNtoDecimal(kacyAmount, new BigNumber(18), 2).replace(' ', '')
    }
    
    setAmountStaking(kacyAmount)
    setIsAmount(true)
  }

  async function get() {
    const balanceKacy = await kacyToken.balance(userWalletAddress)
    setBalance(balanceKacy)
  }

  React.useEffect(() => {
    if (!isAmount) {
      setMultiplier(0)
    }
    setIsAmount(false)
  }, [amountStaking])

  React.useEffect(() => {
    get()
  }, [modalOpen])

  React.useEffect(() => {
    setMultiplier(0)
    handleKacyAmount(new BigNumber(0))
  }, [modalOpen])

  return (
    <>
      <S.Backdrop 
        onClick={() => setModalOpen(false)} 
        style={{ display: modalOpen ? 'block' : 'none' }}
      />
        <S.Modal modalOpen={modalOpen}>
          <S.InterBackground>
            <span>Stake in Pool</span>
            <button type="button" onClick={() => setModalOpen(false)}>
              <img src="assets/close.svg" alt="" />
            </button>
          </S.InterBackground>
          <S.Main>
            <S.Amount>
              <span>$KACY Amount</span>
              <InputTokenValue
                inputRef={inputRef}
                max={balance.toString(10)}
                decimals={new BigNumber(decimals)}
                setInputValue={setAmountStaking}
              />
              <h5>Balance: {BNtoDecimal(balance, new BigNumber(18), 6)}</h5>
            </S.Amount>
            <S.ButtonContainer>

              <button
                style={{ background: multiplier === 25 ? '#fff' : 'transparent', color: multiplier === 25 ? '#000' : '#fff' }}
                type="button"
                onClick={() => {
                  multiplier === 25 ? setMultiplier(0) : setMultiplier(25)
                  multiplier === 25 ? handleKacyAmount(new BigNumber(0)) : handleKacyAmount(new BigNumber(25))
                }}
              >25%</button>

              <button style={{ background: multiplier === 50 ? '#fff' : 'transparent', color: multiplier === 50 ? '#000' : '#fff' }}
                type="button"
                onClick={() => {
                  multiplier === 50 ? setMultiplier(0) : setMultiplier(50)
                  multiplier === 50 ? handleKacyAmount(new BigNumber(0)) : handleKacyAmount(new BigNumber(50))
                }}
              >50%</button>

              <button
                style={{ background: multiplier === 75 ? '#fff' : 'transparent', color: multiplier === 75 ? '#000' : '#fff' }}
                type="button"
                onClick={() => {
                  multiplier === 75 ? setMultiplier(0) : setMultiplier(75)
                  multiplier === 75 ? handleKacyAmount(new BigNumber(0)) : handleKacyAmount(new BigNumber(75))
                }}
              >75%</button>

              <button
                style={{ background: multiplier === 100 ? '#fff' : 'transparent', color: multiplier === 100 ? '#000' : '#fff' }}
                type="button"
                onClick={() => {
                  multiplier === 100 ? setMultiplier(0) : setMultiplier(100)
                  multiplier === 100 ? handleKacyAmount(new BigNumber(0)) : handleKacyAmount(new BigNumber(100))
                }}
              >max</button>

            </S.ButtonContainer>
            <S.ConfirmButton
              type="button"
              disabled={amountStaking.toString() === '0'}
              onClick={() => {
                setModalOpen(false)
                kacyStake.stake(pid, amountStaking, confirmStake, 'Pending stake')
                setAmountStaking(new BigNumber(0))
              }}
            >
              Confirm
            </S.ConfirmButton>

            <Button
              backgroundBlack
              fullWidth
              size="huge"
              text="Get Kacy"
              href="https://app.uniswap.org"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setModalOpen(false)}
            />
          </S.Main>
        </S.Modal>
    </>
  )
}

export default ModalStaking
