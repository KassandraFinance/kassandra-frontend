import React from 'react'
import Image from 'next/image'
import { useMatomo } from '@datapunt/matomo-tracker-react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import useConnect from '../../hooks/useConnect'

import Button from '../Button'
import { ToastInfo } from '../../components/Toastify/toast'

import close from '../../../public/assets/close.svg'
import theme from '../../styles/theme'
import * as S from './styles'

interface IModalLogOutProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  userWalletAddress: string;
}

const ModalLogOut = ({
  modalOpen,
  setModalOpen,
  userWalletAddress
}: IModalLogOutProps) => {
  const { handleDisconnected } = useConnect()
  const { trackEvent } = useMatomo()

  function matomoEvent(action: string, name: string) {
    trackEvent({
      category: 'modal-logout',
      action,
      name
    })
  }

  return (
    <>
      <S.Backdrop
        onClick={() => setModalOpen(false)}
        style={{ display: modalOpen ? 'block' : 'none' }}
      />
      <S.ModalContainer modalOpen={modalOpen}>
        <S.Top>
          <p>Your wallet</p>
          <S.Close type="button" onClick={() => setModalOpen(false)}>
            <Image src={close} alt="Close" />
          </S.Close>
        </S.Top>
        <Button
          className="connect-wallet"
          icon={
            <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.48356 0.550049C10.3804 0.550049 11.5 1.64157 11.5 3.51004H9.17289V3.5291C8.09287 3.5291 7.21733 4.38272 7.21733 5.4357C7.21733 6.48868 8.09287 7.3423 9.17289 7.3423H11.5V7.51389C11.5 9.35852 10.3804 10.45 8.48356 10.45H3.51644C1.61956 10.45 0.5 9.35852 0.5 7.51389V3.48621C0.5 1.64157 1.61956 0.550049 3.51644 0.550049H8.48356ZM11.0893 4.32988C11.3161 4.32988 11.5 4.50913 11.5 4.73026V6.12208C11.4974 6.34213 11.315 6.51989 11.0893 6.52246H9.21689C8.67013 6.52963 8.19202 6.16465 8.068 5.64543C8.00589 5.32311 8.09308 4.99051 8.30619 4.73677C8.5193 4.48303 8.83654 4.33409 9.17289 4.32988H11.0893ZM9.43689 4.97335H9.256C9.14494 4.97208 9.03798 5.0142 8.95899 5.09032C8.88 5.16644 8.83556 5.27022 8.83556 5.3785C8.83554 5.60568 9.02301 5.79058 9.256 5.79319H9.43689C9.66909 5.79319 9.85733 5.60966 9.85733 5.38327C9.85733 5.15688 9.66909 4.97335 9.43689 4.97335ZM6.21022 2.6902H3.10578C2.87547 2.69019 2.68801 2.87083 2.68533 3.09535C2.68533 3.32253 2.87278 3.50743 3.10578 3.51004H6.21022C6.44243 3.51004 6.63067 3.32651 6.63067 3.10012C6.63067 2.87373 6.44243 2.6902 6.21022 2.6902Z" fill="white" />
            </svg>
          }
          backgroundBlack
          size="medium"
          onClick={() => {
            handleDisconnected()
          }}
          text="Disconnect" />
        <S.Content>
          <p>{userWalletAddress}</p>
          <S.ButtonContainer>
            <CopyToClipboard text={userWalletAddress}>
              <button
                type="button"
                onClick={() => {
                  ToastInfo('Copy address')
                  matomoEvent('click-on-copy', 'copy-address')
                  setModalOpen(false)
                }}
              >
                Copy address
                <svg
                  width="14"
                  height="15"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.00068 12.3334H1.16735C1.01269 12.3387 0.858581 12.3122 0.714603 12.2555C0.570625 12.1988 0.439858 12.113 0.330432 12.0036C0.221007 11.8942 0.135264 11.7634 0.0785358 11.6194C0.0218072 11.4755 -0.00469379 11.3214 0.000680608 11.1667L0.000680608 5.33336C-0.00469379 5.17871 0.0218072 5.0246 0.0785358 4.88062C0.135264 4.73664 0.221007 4.60587 0.330432 4.49645C0.439858 4.38702 0.570625 4.30128 0.714603 4.24455C0.858581 4.18782 1.01269 4.16132 1.16735 4.1667H3.50068V1.83336C3.49531 1.67871 3.52181 1.5246 3.57854 1.38062C3.63526 1.23664 3.72101 1.10587 3.83043 0.996448C3.93986 0.887023 4.07063 0.80128 4.2146 0.744551C4.35858 0.687823 4.51269 0.661322 4.66735 0.666696L10.5007 0.666696C10.6553 0.661322 10.8094 0.687823 10.9534 0.744551C11.0974 0.80128 11.2282 0.887023 11.3376 0.996448C11.447 1.10587 11.5328 1.23664 11.5895 1.38062C11.6462 1.5246 11.6727 1.67871 11.6673 1.83336V7.6667C11.6726 7.82133 11.6461 7.9754 11.5893 8.11934C11.5326 8.26328 11.4468 8.39401 11.3374 8.50342C11.228 8.61283 11.0973 8.69857 10.9533 8.75533C10.8094 8.81209 10.6553 8.83865 10.5007 8.83336H8.16735V11.1667C8.17264 11.3213 8.14608 11.4754 8.08932 11.6193C8.03256 11.7633 7.94681 11.894 7.8374 12.0034C7.728 12.1128 7.59726 12.1986 7.45333 12.2553C7.30939 12.3121 7.15532 12.3387 7.00068 12.3334ZM1.16735 5.33336V11.1667H7.00068V8.83336H4.66735C4.51271 8.83865 4.35864 8.81209 4.2147 8.75533C4.07076 8.69857 3.94003 8.61283 3.83062 8.50342C3.72122 8.39401 3.63547 8.26328 3.57871 8.11934C3.52195 7.9754 3.49539 7.82133 3.50068 7.6667V5.33336H1.16735ZM4.66735 1.83336V7.6667H10.5007V1.83336H4.66735Z"
                    fill={theme.colors.cyan}
                  />
                </svg>
              </button>
            </CopyToClipboard>
            <a
              href={`https://testnet.snowtrace.io/address/${userWalletAddress}`}
              onClick={() => setModalOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Explorer
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.39998 3.19995H2.59998C2.04769 3.19995 1.59998 3.64767 1.59998 4.19995V13.4C1.59998 13.9522 2.04769 14.4 2.59997 14.4H11.8C12.3523 14.4 12.8 13.9522 12.8 13.4V9.59995"
                  stroke="#26DBDB"
                  strokeLinecap="round"
                />
                <path
                  d="M6.04647 9.24647C5.85121 9.44173 5.85121 9.75832 6.04647 9.95358C6.24173 10.1488 6.55832 10.1488 6.75358 9.95358L6.04647 9.24647ZM14.1 2.40002C14.1 2.12388 13.8762 1.90002 13.6 1.90002L9.10002 1.90002C8.82388 1.90002 8.60002 2.12388 8.60002 2.40002C8.60002 2.67617 8.82388 2.90002 9.10002 2.90002L13.1 2.90002L13.1 6.90002C13.1 7.17617 13.3239 7.40002 13.6 7.40002C13.8762 7.40002 14.1 7.17617 14.1 6.90002L14.1 2.40002ZM6.75358 9.95358L13.9536 2.75358L13.2465 2.04647L6.04647 9.24647L6.75358 9.95358Z"
                  fill="#26DBDB"
                />
              </svg>
            </a>
          </S.ButtonContainer>
        </S.Content>
      </S.ModalContainer>
    </>
  )
}

export default ModalLogOut
