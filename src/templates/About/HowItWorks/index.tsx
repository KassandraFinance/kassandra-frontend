import React from 'react'

import * as S from './styles'

const HowItWorks = () => {
  return (
    <S.Container>
      <S.Divider />
      <S.Title>Tokenomics of $KACY</S.Title>
      <S.ScheduleGraphWrapper>
        <S.ScheduleTitle>
          <S.TitleandIcon>
            <S.Icon src={'/assets/about-howitworks-schedulegraph.svg'} />
            <h3>Release schedule</h3>
          </S.TitleandIcon>
          <S.Link
            href="https://drive.google.com/file/d/12jxIMtBVqaY7bMbLmt52Lo0xDFUURZsb/view?usp=sharing"
            target="_blank"
            rel="noopener noreferral"
          >
            <span>View in Litepaper</span>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.5 16C12.6421 16 16 12.6421 16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 12.6421 4.35786 16 8.5 16Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.5 11.5L11.5 8.5L8.5 5.5"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.5 8.5H11.5"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </S.Link>
        </S.ScheduleTitle>
        <S.ScheduleGraph>
          <img src="assets/tokenomics-chart.svg" alt="" />
        </S.ScheduleGraph>
      </S.ScheduleGraphWrapper>
      <S.DistributionGraphWrapper>
        <S.DistributionTitle>
          <S.TitleandIcon>
            <S.Icon src={'/assets/about-distribution-icon.svg'} />
            <h3>Distribuition</h3>
          </S.TitleandIcon>
          <S.Link
            href="https://drive.google.com/file/d/12jxIMtBVqaY7bMbLmt52Lo0xDFUURZsb/view?usp=sharing"
            target="_blank"
            rel="noopener noreferral"
          >
            <span>View in Litepaper</span>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.5 16C12.6421 16 16 12.6421 16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 12.6421 4.35786 16 8.5 16Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.5 11.5L11.5 8.5L8.5 5.5"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.5 8.5H11.5"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </S.Link>
        </S.DistributionTitle>
      </S.DistributionGraphWrapper>
      <S.DistributionChart>
        <img src="assets/distribution-chart.svg" alt="" />
        <S.DistributionText>
          <h1>Fair and community driven token distribuition</h1>
          <p>
            To create a fully decentralized organization, with a
            well-distributed token, we chose to have a big part of the total
            supply (50%) slowly available through rewards to people that engage
            and help Kassandra in the early stages.
          </p>
        </S.DistributionText>
      </S.DistributionChart>
    </S.Container>
  )
}

export default HowItWorks
