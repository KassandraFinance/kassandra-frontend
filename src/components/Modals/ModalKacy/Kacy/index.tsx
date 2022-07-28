import React from 'react'
import Image from 'next/image'
import BigNumber from 'bn.js'
import Big from 'big.js'

import { useAppSelector } from '../../../../store/hooks'

import { BNtoDecimal } from '../../../../utils/numerals'
import { chains } from '../../../../constants/tokenAddresses'

import Web3Disabled from '../../../Web3Disabled'
import Button from '../../../Button'

import closeIcon from '../../../../../public/assets/utilities/close-icon.svg'
import kacyIcon from '../../../../../public/assets/logos/kacy-96.svg'
import avalancheIcon from '../../../../../public/assets/logos/avalanche.svg'

import * as S from './styles'

interface IKacyProps {
  price: number;
  supply: number;
  kacyStaked: BigNumber;
  kacyUnclaimed: BigNumber;
  kacyWallet: BigNumber;
  kacyTotal: BigNumber;
  setIsModalKacy: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalWallet: React.Dispatch<React.SetStateAction<boolean>>;
}

const Kacy = ({
  price,
  supply,
  kacyStaked,
  kacyUnclaimed,
  kacyWallet,
  kacyTotal,
  setIsModalKacy,
  setIsOpenModal,
  setIsModalWallet
}: IKacyProps) => {
  const userWalletAddress = useAppSelector(state => state.userWalletAddress)
  const chainId = useAppSelector(state => state.chainId)

  const chain =
    process.env.NEXT_PUBLIC_MASTER === '1' ? chains.avalanche : chains.fuji

  const totalSupply = 10000000

  function handleCloseModal() {
    setIsModalKacy(false)
  }
  return (
    <>
      <S.Backdrop onClick={handleCloseModal}></S.Backdrop>
      <S.Container>
        <S.ModalHeader>
          <S.HeaderTitle>Your KACY Stats</S.HeaderTitle>

          <S.CloseBtn type="button" onClick={handleCloseModal}>
            <Image src={closeIcon} alt="Close" width={12} height={12} />
          </S.CloseBtn>
        </S.ModalHeader>

        <S.ModalBody>
          {Number(chainId) !== chain.chainId ? (
            <>
              <S.WebDisabledWrapper>
                <Web3Disabled
                  textButton={`Connect to ${chain.chainName}`}
                  textHeader="Your wallet is set to the wrong network."
                  bodyText={`Please switch to the ${chain.chainName} network to have access to all our staking pools`}
                  type="changeChain"
                />
              </S.WebDisabledWrapper>

              <S.Line />
            </>
          ) : (
            <>
              {userWalletAddress && (
                <>
                  <S.KacyTotalContainer>
                    <S.ImgContainer>
                      <S.ImgWrapper>
                        <Image src={kacyIcon} width={40} height={40} />
                      </S.ImgWrapper>

                      <S.ChainIcon>
                        <Image src={avalancheIcon} width={20} height={20} />
                      </S.ChainIcon>
                    </S.ImgContainer>

                    <S.TotalWrapper>
                      <S.BodyTitle>TOTAL</S.BodyTitle>
                      <S.KacyTotal>{BNtoDecimal(kacyTotal, 18, 2)}</S.KacyTotal>
                      <S.KacyUSDTotal>
                        ~
                        {BNtoDecimal(
                          Big(kacyTotal.toString())
                            .mul(price)
                            .div(Big(10).pow(18)),
                          6,
                          2,
                          2
                        )}{' '}
                        USD
                      </S.KacyUSDTotal>
                    </S.TotalWrapper>
                  </S.KacyTotalContainer>

                  <S.Line />

                  <S.Ul>
                    <S.Li>
                      KACY Staked
                      <S.Value>
                        {BNtoDecimal(kacyStaked, 18, 2)}
                        <span>
                          ~
                          {BNtoDecimal(
                            Big(kacyStaked.toString())
                              .mul(price)
                              .div(Big(10).pow(18)),
                            6,
                            2,
                            2
                          )}{' '}
                          USD
                        </span>
                      </S.Value>
                    </S.Li>
                    <S.Li>
                      Unclaimed
                      <S.Value>
                        {BNtoDecimal(kacyUnclaimed, 18, 2)}
                        <span>
                          ~
                          {BNtoDecimal(
                            Big(kacyUnclaimed.toString())
                              .mul(price)
                              .div(Big(10).pow(18)),
                            6,
                            2,
                            2
                          )}{' '}
                          USD
                        </span>
                      </S.Value>
                    </S.Li>
                    <S.Li>
                      Wallet
                      <S.Value>
                        {BNtoDecimal(kacyWallet, 18, 2)}
                        <span>
                          ~
                          {BNtoDecimal(
                            Big(kacyWallet.toString())
                              .mul(price)
                              .div(Big(10).pow(18)),
                            6,
                            2,
                            2
                          )}{' '}
                          USD
                        </span>
                      </S.Value>
                    </S.Li>
                  </S.Ul>

                  <S.Line />
                </>
              )}
            </>
          )}

          <S.Ul>
            <S.Li>
              Price
              <S.Value>
                {price.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 3
                })}
              </S.Value>
            </S.Li>
            <S.Li>
              Circulant Supply
              <S.Value>{supply.toLocaleString('en-US')}</S.Value>
            </S.Li>
            <S.Li>
              Total Supply
              <S.Value>{totalSupply.toLocaleString('en-US')}</S.Value>
            </S.Li>
          </S.Ul>

          {userWalletAddress ? (
            <Button
              text="Get more KACY"
              backgroundPrimary
              fullWidth
              onClick={() => {
                setIsOpenModal(true)
                setIsModalKacy(false)
              }}
            />
          ) : (
            <Button
              text="Connect Wallet"
              backgroundPrimary
              fullWidth
              onClick={() => {
                setIsModalWallet(true)
                setIsModalKacy(false)
              }}
            />
          )}
        </S.ModalBody>
      </S.Container>
    </>
  )
}

export default Kacy