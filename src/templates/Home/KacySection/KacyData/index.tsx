import React from 'react'
import useSWR from 'swr'

import Button from '../../../../components/Button'
import SectionSubtitle from '../../../../components/SectionSubtitle'
import KacyCardData from '../KacyCardData'

import * as S from './styles'

type KacyMarketDataType = {
  value: string,
  title: string
}

interface IKacyDataProps {
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const KacyData = ({ setIsOpenModal }: IKacyDataProps) => {
  const [kacyMarketData, setKacyMarketData] = React.useState<
    KacyMarketDataType[]
  >([
    {
      value: '0',
      title: 'Price'
    },
    {
      value: '0',
      title: 'Market Cap'
    },
    {
      value: '10000000',
      title: 'Total Supply'
    },
    {
      value: '0',
      title: 'Circ. Supply'
    }
  ])

  const { data } = useSWR('/api/overview')

  React.useEffect(() => {
    if (data) {
      const price = data.kacyPrice?.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
      })
      const marketCap = data.marketCap?.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
      })
      const totalSup = (10000000).toLocaleString('en-US')
      const circSup = data.supply?.toLocaleString('en-US')

      setKacyMarketData([
        {
          value: price,
          title: 'Price'
        },
        {
          value: marketCap,
          title: 'Market Cap'
        },
        {
          value: totalSup,
          title: 'Total Supply'
        },
        {
          value: circSup,
          title: 'Circ. Supply'
        }
      ])
    }
  }, [data])

  return (
    <S.KacyDataContainer>
      <SectionSubtitle
        text="Be part of the cutting edge of tokenized index funds."
        as="h5"
      />

      <S.Text>
        Our governance token allows you to create portfolios, support your
        favorite strategies, integrate with partners and vote on issues that
        matter to you.
      </S.Text>

      <S.KacyDataCardContainer>
        {kacyMarketData.map(item => {
          return (
            <KacyCardData
              key={item.title}
              value={item.value}
              title={item.title}
            />
          )
        })}
      </S.KacyDataCardContainer>

      <S.BtnWrapper>
        <Button
          size="huge"
          text="Buy $KACY"
          backgroundPrimary
          onClick={() => {
            setIsOpenModal(true)
          }}
        />

        <a
          href="https://discord.gg/fAqpbP6tFw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="huge"
            text="Join Our Discord"
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.3169 1.49285C18.7869 0.802898 17.147 0.292931 15.432 0.00294997C15.4168 1.80807e-05 15.401 0.0019075 15.3868 0.00835695C15.3726 0.0148064 15.3608 0.0254968 15.353 0.0389476C15.143 0.407923 14.909 0.888892 14.7451 1.26887C12.9262 0.997121 11.0771 0.997121 9.25821 1.26887C9.07555 0.847755 8.86957 0.437146 8.64123 0.0389476C8.63349 0.0253312 8.62178 0.014399 8.60767 0.0076098C8.59355 0.000820611 8.5777 -0.00150272 8.56223 0.000950011C6.84828 0.290931 5.20833 0.800898 3.67737 1.49185C3.6642 1.49738 3.65304 1.5068 3.64538 1.51885C0.533465 6.09355 -0.31951 10.5553 0.0994778 14.961C0.100644 14.9718 0.103993 14.9822 0.109322 14.9917C0.114652 15.0011 0.121849 15.0094 0.130477 15.016C1.94682 16.3383 3.9727 17.3456 6.1233 17.9958C6.1383 18.0004 6.15433 18.0004 6.16932 17.9957C6.1843 17.9911 6.19754 17.982 6.2073 17.9698C6.66929 17.3498 7.08128 16.6949 7.43327 16.0069C7.45427 15.9669 7.43427 15.9189 7.39227 15.9029C6.74629 15.6596 6.12039 15.3661 5.52032 15.025C5.50954 15.0188 5.50045 15.0101 5.49388 14.9995C5.4873 14.989 5.48345 14.977 5.48266 14.9646C5.48186 14.9522 5.48416 14.9398 5.48934 14.9286C5.49451 14.9173 5.50241 14.9074 5.51232 14.9C5.63832 14.807 5.76431 14.71 5.88431 14.613C5.89511 14.6043 5.90812 14.5987 5.92189 14.5969C5.93566 14.5952 5.94966 14.5973 5.96231 14.603C9.88919 16.3669 14.1421 16.3669 18.023 14.603C18.0356 14.5969 18.0498 14.5946 18.0637 14.5962C18.0777 14.5978 18.091 14.6032 18.102 14.612C18.222 14.71 18.347 14.807 18.4739 14.9C18.484 14.9073 18.492 14.917 18.4973 14.9282C18.5027 14.9394 18.5052 14.9517 18.5046 14.9641C18.504 14.9765 18.5003 14.9885 18.4939 14.9991C18.4875 15.0098 18.4786 15.0186 18.4679 15.025C17.87 15.3689 17.248 15.6599 16.595 15.9019C16.585 15.9055 16.5758 15.9113 16.5682 15.9187C16.5606 15.9262 16.5546 15.9352 16.5507 15.9451C16.5469 15.9551 16.5451 15.9657 16.5457 15.9764C16.5463 15.987 16.5491 15.9974 16.554 16.0069C16.914 16.6939 17.326 17.3478 17.779 17.9688C17.7884 17.9815 17.8015 17.991 17.8165 17.996C17.8316 18.0011 17.8478 18.0013 17.863 17.9968C20.0173 17.3485 22.0464 16.3407 23.8648 15.016C23.8737 15.0098 23.8811 15.0017 23.8866 14.9924C23.8921 14.9831 23.8956 14.9727 23.8968 14.962C24.3968 9.8683 23.0588 5.44259 20.3479 1.52085C20.3412 1.50811 20.3302 1.49817 20.3169 1.49285ZM8.02025 12.2781C6.83828 12.2781 5.86331 11.2092 5.86331 9.8983C5.86331 8.58639 6.81928 7.51846 8.02025 7.51846C9.23021 7.51846 10.1962 8.59539 10.1772 9.8983C10.1772 11.2102 9.22121 12.2781 8.02025 12.2781ZM15.995 12.2781C14.8121 12.2781 13.8381 11.2092 13.8381 9.8983C13.8381 8.58639 14.7931 7.51846 15.995 7.51846C17.205 7.51846 18.171 8.59539 18.152 9.8983C18.152 11.2102 17.206 12.2781 15.995 12.2781Z"
                  fill="white"
                />
              </svg>
            }
            backgroundBlack
          />
        </a>
      </S.BtnWrapper>
    </S.KacyDataContainer>
  )
}

export default KacyData
