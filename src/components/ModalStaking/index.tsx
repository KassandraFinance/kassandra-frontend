import React from 'react'
import BigNumber from 'bn.js'

import web3 from '../../utils/web3'
import { BNtoDecimal } from '../../utils/numerals'
import { confirmStake } from '../../utils/confirmTransactions'

import { Kacy } from '../../constants/tokenAddresses'

import useBalance from '../../hooks/useBalance'
import useStakingContract from '../../hooks/useStakingContract'

import * as S from './styles'

 interface IModalStakingProps {
	modalOpen: boolean
	// eslint-disable-next-line prettier/prettier
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
  const [multiplier, setMultiplier] = React.useState<number>(0)
	const { getBalanceToken } = useBalance()
	const { stake } = useStakingContract()


	function handleKacyAmount(percentage: BigNumber ) {
		const kacyAmount = percentage.mul(balance).div(new BigNumber(100))
		setAmountStaking(kacyAmount)
	}

	async function get() {
		const balanceKacy = await getBalanceToken(Kacy)
		setBalance(balanceKacy)
	}

	React.useEffect(() => {
		get()
	}, [modalOpen])

  React.useEffect(()=>{
    setMultiplier(0);
    handleKacyAmount(new BigNumber(0))
  }, [modalOpen])

	return (
		<>
			<S.Backdrop onClick={() =>  setModalOpen(false)} style={{display: modalOpen ? 'block' : 'none'}} />
			<S.BorderGradient
				modalOpen={modalOpen}
				otherStakingPools={otherStakingPools}
			>
				<S.BackgroundBlack>
					<S.InterBackground otherStakingPools={otherStakingPools}>
						<span>Stake in Pool</span>
						<button
							type="button"
							onClick={() => setModalOpen(false)}><img src="assets/close.svg"
							alt=""
						/> </button>
					</S.InterBackground>
					<S.Main>
						<S.Amount>
							<span>$KACY Amount</span>
							{/* <input type="number" placeholder="0" value={BNtoDecimal(amountStaking, new BigNumber(18), 6)} /> */}
							<input
								type="number"
								placeholder="0"
								step="any"
								min="0"
								onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                  setMultiplier(0);
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
							<S.Line />
							<h5>Balance: {BNtoDecimal(balance, new BigNumber(18), 6)}</h5>
						</S.Amount>
						<S.ButtonContainer>

							<button
                style={{background: multiplier === 25 ? '#26DBDB' : 'transparent', color: multiplier === 25 ? '#000' : '#fff'}}
                type="button"
                onClick={() => {
                  multiplier === 25 ? setMultiplier(0) : setMultiplier(25);
                  multiplier === 25 ? handleKacyAmount(new BigNumber(0)) : handleKacyAmount(new BigNumber(25))}}
                >25%</button>

							<button style={{background: multiplier === 50 ? '#26DBDB' : 'transparent', color: multiplier === 50 ? '#000' : '#fff'}}
                type="button"
                onClick={() => {
                  multiplier === 50 ? setMultiplier(0) : setMultiplier(50);
                  multiplier === 50 ? handleKacyAmount(new BigNumber(0)) : handleKacyAmount(new BigNumber(50))}}
                >50%</button>

							<button
                style={{background: multiplier === 75 ? '#26DBDB' : 'transparent', color: multiplier === 75 ? '#000' : '#fff'}}
                type="button"
                onClick={() => {
                  multiplier === 75 ? setMultiplier(0) : setMultiplier(75);
                  multiplier === 75 ? handleKacyAmount(new BigNumber(0)) : handleKacyAmount(new BigNumber(75))}}
                >75%</button>

							<button
                style={{background: multiplier === 100 ? '#26DBDB' : 'transparent', color: multiplier === 100 ? '#000' : '#fff'}}
                type="button"
                onClick={() => {
                  multiplier === 100 ? setMultiplier(0) : setMultiplier(100);
                  multiplier === 100 ? handleKacyAmount(new BigNumber(0)) : handleKacyAmount(new BigNumber(100))}}
                >max</button>

						</S.ButtonContainer>
						<S.ConfirmButton
							type="button"
							disabled={amountStaking.toString() === '0'}
							otherStakingPools={otherStakingPools}
							onClick={() => {
								setModalOpen(false)
								stake(pid, amountStaking, confirmStake, "Pending stake")
								setAmountStaking(new BigNumber(0))
							}
						}
						>
							Confirm
						</S.ConfirmButton>

						<S.GetKacy href='https://app.uniswap.org' target="_blank" rel="noopener noreferrer" onClick={() => setModalOpen(false)}>Get KACY</S.GetKacy>

					</S.Main>
				</S.BackgroundBlack>
			</S.BorderGradient>
		</>
	)
}

export default ModalStaking
