import Image from 'next/image'
import React from 'react'

import Button from '../../Button'

import errorIcon from '../../../../public/assets/notificationStatus/error.svg'
import kacyError from '../../../../public/assets/images/kassandra-error2.svg'
import closeIcon from '../../../../public/assets/utilities/close-icon.svg'

import * as S from './styles'

interface IModalAlertProps {
  errorText: string;
  solutionText?: string;
  setModalError: React.Dispatch<React.SetStateAction<string>>;
}

const ModalAlert = ({
  setModalError,
  errorText,
  solutionText = ''
}: IModalAlertProps) => {
  function handleCloseModal() {
    setModalError('')
  }

  return (
    <>
      <S.Backdrop onClick={handleCloseModal}></S.Backdrop>
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

          <S.Text>{errorText}</S.Text>

          {solutionText.length > 0 && (
            <>
              <S.SolutionHeading>Possible solution</S.SolutionHeading>

              <S.Text>Try doing something</S.Text>
            </>
          )}

          <Button
            text="Okay"
            backgroundSecondary
            fullWidth
            onClick={handleCloseModal}
          />
        </S.ModalBody>
      </S.Container>
    </>
  )
}

export default ModalAlert
