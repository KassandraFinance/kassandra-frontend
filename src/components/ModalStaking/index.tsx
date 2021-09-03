import React from 'react'
import BigNumber from 'bn.js'
import web3 from '../../utils/web3'

import useBalance from '../../hooks/useBalance'

import { Kacy } from '../../constants/tokenAddresses'

import useStakingContract from '../../hooks/useStakingContract'

import { 
  Backdrop,
  BorderGradient,
  BackgroundBlack,
  InterBackground,
  Main,
  Amount,
  Line,
  ButtonContainer,
  ConfirmButton,
  GetKacyButton
 } from './styles'
import { BNtoDecimal } from '../../utils/numerals'

 interface IModalStakingProps {
  modalOpen: boolean
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  otherStakingPools: boolean
  pid: number
}

const ModalStaking = ({ 
  modalOpen, 
  setModalOpen, 
  otherStakingPools,
  pid }: IModalStakingProps) => {
  const [balance, setBalance] = React.useState<BigNumber>(new BigNumber(0))
  const [amountStaking, setAmountStaking] = React.useState<BigNumber>(new BigNumber(0))
  const { getBalanceToken } = useBalance()
  const { stake } = useStakingContract()


  function handleKacyAmount(percentage: BigNumber ) {
    const kacyAmount = percentage.mul(balance).div(new BigNumber(100))
    setAmountStaking(kacyAmount)
  }

  function handleConfirm () {
    stake(pid, amountStaking)
  }

  async function get() {
    const balanceKacy = await getBalanceToken(Kacy)
    setBalance(balanceKacy)
  }

  React.useEffect(() => {
    get()
  }, [modalOpen])

  return (
    <>
      <Backdrop onClick={() => setModalOpen(false)} style={{display: modalOpen ? 'block' : 'none'}} />
      <BorderGradient 
        modalOpen={modalOpen} 
        otherStakingPools={otherStakingPools}
      >
        <BackgroundBlack>
          <InterBackground otherStakingPools={otherStakingPools}>
            <span>Stake in Pool</span>
            <button type="button" onClick={() => setModalOpen(false)}><img src="assets/close.svg" alt="" /> </button>
          </InterBackground>
          <Main>
            <Amount>
              <span>$KACY Amount</span>
              {/* <input type="number" placeholder="0" value={BNtoDecimal(amountStaking, new BigNumber(18), 6)} /> */}
              <input
                type="number"
                placeholder="0"
                step="any"
                min="0"
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                  const target = e.target as HTMLInputElement
                  // don't allow negative numbers
                  if (e.key === '-') {
                    e.preventDefault()
                  }
                  // Blink bug makes the value come empty if pressing the decimal symbol that is not that of the current locale
                  else if (e.key === '.' || e.key === ',') {
                    // first time value will be ok, if pressing twice it zeroes, we ignore those
                    if (target.value.length > 0 && target.value.search(/[,.]/) === -1) {
                      target.dataset.lastvalue = target.value
                    }
                  }
                  else if (e.key === 'Backspace' || e.key === 'Delete') {
                    target.dataset.lastvalue = '0'
                  }
                }}
                onChange={
                  (e: React.ChangeEvent<HTMLInputElement>) => {
                    // getArrayTokens()
                    let { value } = e.target

                    if (value.length === 0) {
                      value = e.target.dataset.lastvalue as string
                    }

                    setAmountStaking(new BigNumber(web3.utils.toWei(value)))
                  }
                }
                value={BNtoDecimal(amountStaking, new BigNumber(18), 6)}
              />
              <Line />
              <h5>Balance: {BNtoDecimal(balance, new BigNumber(18), 6)}</h5>
            </Amount>
            <ButtonContainer>
              <button type="button" onClick={() => handleKacyAmount(new BigNumber(25))}>25%</button>
              <button type="button" onClick={() => handleKacyAmount(new BigNumber(50))}>50%</button>
              <button type="button" onClick={() => handleKacyAmount(new BigNumber(75))}>75%</button>
              <button type="button" onClick={() => handleKacyAmount(new BigNumber(100))}>max</button>
            </ButtonContainer>
            <ConfirmButton 
              type="button" 
              otherStakingPools={otherStakingPools}
              onClick={() => {
                setModalOpen(false)
                handleConfirm()
                setAmountStaking(new BigNumber(0))
              } 
            }
            >
              Confirm
            </ConfirmButton>
            <GetKacyButton type="button" onClick={() => setModalOpen(false)}>Get KACY</GetKacyButton>
          </Main>
        </BackgroundBlack>
      </BorderGradient>
    </>
  )
}

export default ModalStaking