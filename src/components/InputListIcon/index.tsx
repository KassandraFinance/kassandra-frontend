import Image from 'next/image'
import React from 'react'

import Overlay from '@/components/Overlay'

import arrowDownThin from '@assets/utilities/arrow-down-thin.svg'

import * as S from './styles'

export type DataListType = {
  icon: JSX.Element
  name: string
  id: string
}

interface IInputListIconProps {
  dataList: DataListType[]
  selected: string
  title?: string
  ignoreItem?: string
  onClick: (data: DataListType) => void
}

const InputListIcon = ({
  dataList,
  selected,
  title,
  ignoreItem,
  onClick
}: IInputListIconProps) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  function handleClick(data: DataListType) {
    onClick(data)
  }

  const selectedItem = dataList.find(item => item.id === selected)

  return (
    <S.InputListIcon>
      {isOpen && <Overlay onClick={() => setIsOpen(false)} />}

      <S.Datalist
        id="range"
        height={dataList.length}
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <S.Option>
          <S.IconBig>{selectedItem?.icon}</S.IconBig>

          <S.TextContainer>
            {title && <S.Text>{title}</S.Text>}
            <S.Wrapper>
              <S.Text>
                {selectedItem?.name ? selectedItem.name : 'Select'}
              </S.Text>
              <S.IconWrapper isOpen={isOpen}>
                <Image src={arrowDownThin} width={5} height={8.57} />
              </S.IconWrapper>
            </S.Wrapper>
          </S.TextContainer>
        </S.Option>

        {dataList.flatMap(data => {
          if (data.id !== ignoreItem)
            return (
              <S.Option key={data.id} onClick={() => handleClick(data)}>
                <S.IconSmall>{data.icon}</S.IconSmall>

                <S.Text>{data.name}</S.Text>
              </S.Option>
            )
        })}
      </S.Datalist>
    </S.InputListIcon>
  )
}

export default InputListIcon
