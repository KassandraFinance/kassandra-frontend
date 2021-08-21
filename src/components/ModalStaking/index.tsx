import React from 'react'
import BigNumber from 'bn.js'
import { useSelector, RootStateOrAny } from 'react-redux'

import useBalance from '../../hooks/useBalance'

import { Kacy } from '../../constants/tokenAddresses'

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
}

const ModalStaking = ({ 
  modalOpen, 
  setModalOpen, 
  otherStakingPools }: IModalStakingProps) => {
  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)
  const [balance, setBalance] = React.useState<BigNumber>(new BigNumber(0))
  const [amountStaking, setAmountStaking] = React.useState<BigNumber>(new BigNumber(0))
  const { getBalanceToken } = useBalance()


  function handleCloseModal() {
    setModalOpen(false)
  }

  function handleKacyAmount(percentage: string | number | BigNumber ) {
    setAmountStaking(balance)
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
      <Backdrop onClick={handleCloseModal} style={{display: modalOpen ? 'block' : 'none'}} />
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
              <input type="number" placeholder="0" value={BNtoDecimal(amountStaking, new BigNumber(18), 6)} />
              <Line />
              <h5>Balance: {BNtoDecimal(balance, new BigNumber(18), 6)}</h5>
            </Amount>
            <ButtonContainer>
              <button type="button" onClick={() => handleKacyAmount(25/100)}>25%</button>
              <button type="button" onClick={() => handleKacyAmount(50/100)}>50%</button>
              <button type="button" onClick={() => handleKacyAmount(75/100)}>75%</button>
              <button type="button" onClick={() => handleKacyAmount(100/100)}>max</button>
            </ButtonContainer>
            <ConfirmButton 
              type="button" 
              otherStakingPools={otherStakingPools}
              onClick={() => setModalOpen(false)}
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