import Image from 'next/image'
import React from 'react'

import { useAppSelector, useAppDispatch } from '../../../store/hooks'
import { removeModalAlertText } from '../../../store/reducers/modalAlertText'

import Button from '../../Button'

import errorIcon from '../../../../public/assets/notificationStatus/error.svg'
import kacyError from '../../../../public/assets/images/kassandra-error2.svg'
import closeIcon from '../../../../public/assets/utilities/close-icon.svg'

import * as S from './styles'

const ModalAlert = () => {
  const dispatch = useAppDispatch()
  const errorText = useAppSelector(state => state.modalAlertText.errorText)
  const solutionText = useAppSelector(
    state => state.modalAlertText.solutionText
  )

  function handleCloseModal() {
    dispatch(removeModalAlertText())
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

          {solutionText && (
            <>
              <S.SolutionHeading>Possible solution</S.SolutionHeading>

              <S.Text>{solutionText}</S.Text>
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
