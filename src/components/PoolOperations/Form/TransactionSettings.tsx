import React from 'react'
import Image from 'next/image'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import infoGray from '../../../../public/assets/utilities/info-gray.svg'
import gearButton from '../../../../public/assets/icons/gearButton.svg'

import * as S from './styles'

interface Slippage {
  value: string;
  custom: string;
  isCustom: boolean;
}

interface Inputs {
  slippage: Slippage;
  setSlippage: React.Dispatch<React.SetStateAction<Slippage>>;
}

const TransactionSettings = ({
  slippage,
  setSlippage,
}: Inputs) => {
  const [isModalSettings, setIsModalSettings] = React.useState<boolean>(false)

  function handleCloseModal() {
    setIsModalSettings(false)
  }

  const handleFormattedOptionsValue = (value: string) => {
    const SlippageValue = Number(value)

    return SlippageValue.toFixed(1)
  }


  return (
    <S.TransactionSettings>
      <S.Backdrop
        onClick={handleCloseModal}
        style={{ display: isModalSettings ? 'block' : 'none' }}
      />

      <label>
        Slippage tolerance
        <Tippy content="Slippage allows you to configure how much the price can change against you. Slippages larger than 1% could allow a bad actor to purposely run a transaction before you just so you pay the maximum slippage, this is called frontrunning.">
          <span tabIndex={0}>
            <Image src={infoGray} alt="Explanation" width={16} height={16} />
          </span>
        </Tippy>
      </label>

      <S.TransactionContentOptions>
        <label>{handleFormattedOptionsValue(slippage.value)}%</label>
        <button type="button" onClick={() => setIsModalSettings(!isModalSettings)}>
          <Image src={gearButton.src} alt="gear button" width={20} height={20} />
        </button>

        {isModalSettings ? (
          <fieldset>
            <S.TransactionOptions>
              <S.TransactionOption>
                <input
                  id="slip01"
                  type="radio"
                  name="slippageTolerance"
                  checked={!slippage.isCustom && slippage.value === '0.1'}
                  onChange={() => setSlippage(prev => ({
                    ...prev,
                    value: "0.1",
                    isCustom: false
                  }))}
                />
                <label htmlFor="slip01">
                  0.1%
                </label>
              </S.TransactionOption>
              <S.TransactionOption>
                <input
                  id="slip05"
                  type="radio"
                  name="slippageTolerance"
                  checked={!slippage.isCustom && slippage.value === '0.5'}
                  onChange={() => setSlippage(prev => ({
                    ...prev,
                    value: "0.5",
                    isCustom: false
                  }))}
                />
                <label htmlFor="slip05">
                  0.5%
                </label>
              </S.TransactionOption>
              <S.TransactionOption>
                <input
                  id="slip10"
                  type="radio"
                  name="slippageTolerance"
                  checked={!slippage.isCustom && slippage.value === '1'}
                  onChange={() => setSlippage(prev => ({
                    ...prev,
                    value: "1",
                    isCustom: false
                  }))}
                />
                <label htmlFor="slip10">
                  1.0%
                </label>
              </S.TransactionOption>
              <S.TransactionOption>
                <input
                  id="slipCustom"
                  type="radio"
                  name="slippageTolerance"
                  checked={slippage.isCustom}
                  onChange={() => setSlippage(prev => ({
                    ...prev,
                    value: slippage.custom,
                    isCustom: true
                  }))}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      document.getElementById("slipCustomInput")?.focus()
                    }
                  }}
                />
                <Tippy content="Custom slippage, values larger than 1% could potentially allow frontrunning — when a bad actor purposely run a transaction before you just so you pay the maximum slippage.">
                  <input
                    tabIndex={-1}
                    id="slipCustomInput"
                    type="number"
                    step="0.1"
                    className="custom"
                    placeholder={slippage.custom}
                    min={0}
                    max={100}
                    onFocus={() => {
                      // eslint-disable-next-line prettier/prettier
                      const radio = document.getElementById("slipCustom") as HTMLInputElement

                      if (radio) {
                        radio.checked = true
                      }
                    }}
                    onChange={(e) => setSlippage({
                      custom: e.target.value || '2.0',
                      value: e.target.value || '2.0',
                      isCustom: true
                    })}
                  />
                </Tippy>
                <span>%</span>
                <label htmlFor="slipCustom">
                  Custom slippage, current value: {slippage.custom}%. Press enter to edit.
                </label>
                <label htmlFor="slipCustomInput">
                  Custom slippage percentage
                </label>
              </S.TransactionOption>
            </S.TransactionOptions>
          </fieldset>
        )
          :
          (<></>)
        }
      </S.TransactionContentOptions>
    </S.TransactionSettings>
  )
}

export default TransactionSettings
