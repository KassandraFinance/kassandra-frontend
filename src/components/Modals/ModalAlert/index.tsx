import Image from 'next/image'
import React from 'react'

import Button from '../../Button'

import errorIcon from '../../../../public/assets/notificationStatus/error.svg'
import kacyError from '../../../../public/assets/images/kassandra-error2.svg'
import closeIcon from '../../../../public/assets/utilities/close-icon.svg'

import * as S from './styles'

interface IModalAlertProps {
  setIsModalError: React.Dispatch<React.SetStateAction<boolean>>;
  errorText: string;
  solutionText?: string;
}

const ModalAlert = ({
  setIsModalError,
  errorText,
  solutionText
}: IModalAlertProps) => {
  function handleCloseModal() {
    setIsModalError(false)
  }

  return (
    <S.Backdrop onClick={handleCloseModal}>
      <S.Container>
        <S.ModalHeader>
          <S.TitleWrapper>
            <Image src={errorIcon} />
            Error
          </S.TitleWrapper>

          <S.CloseBtn type="button" onClick={handleCloseModal}>
            <Image src={closeIcon} alt="Close" width={12} height={12} />
          </S.CloseBtn>
        </S.ModalHeader>

        <S.ModalBody>
          <Image src={kacyError} />

          <S.ErrorHeading>Something has gone wrong</S.ErrorHeading>

          <S.Text>{`[ethjs-query] while formatting outputs from RPC ‘{“value”:{“code”:-32602,“message”:“transaction could not be decoded: unsigned transactions not supported”}}’`}</S.Text>

          <S.SolutionHeading>Possible solution</S.SolutionHeading>

          <S.Text>Try doing something</S.Text>

          <Button
            text="Okay"
            backgroundSecondary
            fullWidth
            onClick={handleCloseModal}
          />
        </S.ModalBody>
      </S.Container>
    </S.Backdrop>
  )
}

export default ModalAlert
