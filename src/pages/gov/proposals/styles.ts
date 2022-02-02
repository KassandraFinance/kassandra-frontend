import styled from 'styled-components'
import theme from '../../../styles/theme'

import * as VotingPowerStyles from '../../../components/VotingPower/styles'
import * as VoteCardStyle from '../../../components/Governance/VoteCard/styles'
import * as ButtonStyles from '../../../components/Button/styles'
import * as ExternalLinkStyles from '../../../components/ExternalLink/styles'

export const BackgroundVote = styled.div`
  background: url('/assets/background-governance-page.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  box-shadow: inset 0px -20px 20px 0px #151117;
  padding: 0 0 80px;
`
export const VoteContent = styled.div`
  max-width: 1140px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    padding: 0 32px;
  }
  @media (max-width: 768px) {
    padding: 0 24px;
  }

  @media (max-width: 540px) {
    padding: 0 16px;
  }
`
export const DesktopScreen = styled.div`
  @media (max-width: 768.5px) {
    display: none;
  }
`
export const MobileScreen = styled.div`
  @media (min-width: 768.5px) {
    display: none;
  }
`
export const TitleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
export const TitleAndAuthor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const CardTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 2.4rem;

  @media (max-width: 670px) {
    flex-direction: column-reverse;
  }
`
export const ProposeAuthorCard = styled.div`
  background: #ffffff0a;
  border: 1px solid #fcfcfc26;
  border-radius: 0.8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 5.6rem;
  margin-top: 1.6rem;
  padding: 2rem 1.6rem;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 2.4rem;
  }
  @media (max-width: 728px) {
    padding: 1.6rem;
  }
  @media (max-width: 705px) {
    padding: 0.8rem;
  }
  @media (max-width: 670px) {
    max-width: 100%;
  }
  p {
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.bold};
    letter-spacing: 0.08rem;

    margin-right: 1.6rem;
    @media (max-width: 768px) {
      font-size: ${theme.font.sizes.font14};
    }
  }
  span {
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
    letter-spacing: 0.07rem;

    margin-left: 1.2rem;
  }
`
export const VotingPowerAndLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 670px) {
    align-items: flex-start;
    max-width: 100%;
  }
  ${VotingPowerStyles.VotingPower} {
    margin-bottom: 1.2rem;
    @media (max-width: 768px) {
      width: 348px;
      max-width: 100%;
    }
    @media (max-width: 670px) {
      width: 100%;
    }
  }
  ${ExternalLinkStyles.Link} {
    font-size: ${theme.font.sizes.font14};
    @media (max-width: 670px) {
      font-size: ${theme.font.sizes.font12};
    }
  }
`
export const VoteCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 2.4rem;

  max-width: 100%;
  margin-top: 4rem;
  @media (max-width: 815px) {
    ${VoteCardStyle.ActionWrapper} {
      flex-direction: column;

      ${ButtonStyles.Wrapper} {
        width: 100%;
        margin-bottom: 1.6rem;
      }
    }
  }
  @media (max-width: 670px) {
    flex-direction: column;
    row-gap: 1.6rem;
  }
`
export const ProposalInfo = styled.div`
  display: flex;
  flex-direction: column;

  margin: 8rem auto 0;
  max-width: 1140px;

  @media (max-width: 1200px) {
    padding: 0 32px;
  }
  @media (max-width: 768px) {
    padding: 0 24px;
  }
  @media (max-width: 540px) {
    padding: 0 16px;
  }
`
export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1.25fr 0.75fr;
    grid-gap: 3.2rem;
  }
`
export const ProposalTitleWrapper = styled.div`
  display: flex;
  h1 {
    font-size: ${theme.font.sizes.font18};
    font-weight: ${theme.font.weight.bold};
    margin-left: 0.8rem;
  }
`
export const DescriptionTable = styled.section`
  background: #ffffff0a;
  border: 1px solid #ffffff3b;
  border-radius: 1.2rem;

  margin: 4rem auto 0;
  padding: 1.6rem;
  width: 100%;
  @media (min-width: 1024px) {
    margin: 4.8rem auto 0;
  }
`
export const Table = styled.table`
  width: 100%;
`
export const TableHead = styled.div`
  margin-bottom: 1.6rem;
`
export const TableTitle = styled.th`
  font-size: ${theme.font.sizes.font16};
  font-weight: ${theme.font.weight.bold};
`
export const TableBody = styled.tbody``
export const TableDescriptionWrapper = styled.div`
  border-top: 1px solid #ffffff4d;

  display: flex;
  flex-direction: column;
  padding: 1.6rem 0;
`
export const DescriptionSubTitle = styled.td`
  font-size: ${theme.font.sizes.font14};
  font-weight: ${theme.font.weight.bold};
`
export const DescriptionText = styled.td`
  font-size: ${theme.font.sizes.font12};
  font-weight: ${theme.font.weight.light};
  line-height: 1.6rem;
  letter-spacing: 0.06rem;

  padding: 1.6rem 0;
`
export const InfoTable = styled.table`
  background: #ffffff0a;
  border: 1px solid #ffffff3b;
  border-radius: 1.2rem;

  margin: 1.6rem auto 0;
  padding: 1.6rem;
  width: 100%;
  @media (min-width: 1024px) {
    margin: 4.8rem auto 0;
  }
  @media (width: 768px) {
    margin: 3.2rem auto 0;
  }
`
export const TableInfoWrapper = styled.div`
  border-top: 1px solid #ffffff4d;
`
export const DataWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.2rem;
  &:first-child {
    margin-top: 2.4rem;
  }
`
export const TextKey = styled.span`
  font-size: ${theme.font.sizes.font12};
  font-weight: ${theme.font.weight.bold};
`
export const TextValue = styled.span`
  font-size: ${theme.font.sizes.font12};
  font-weight: ${theme.font.weight.light};
`
export const InfoLinkWrapper = styled.div`
  background: #ffffff0a;
  border: 1px solid transparent;
  border-radius: 1.2rem;

  display: flex;
  justify-content: center;

  margin-top: 1.6rem;
  padding: 1.6rem;
`
export const Link = styled.a`
  color: #c4c4c4;
  line-height: ${theme.font.sizes.font14};
  font-size: ${theme.font.sizes.font14};
  text-decoration: none;

  display: flex;
  align-items: center;

  cursor: pointer;
  transition: 0.15s;
  span {
    display: flex;
  }
  svg {
    margin-left: ${theme.spacings.space8};
  }
  &:hover {
    color: ${theme.colors.cyan};
    > svg {
      path {
        stroke: ${theme.colors.cyan};
      }
    }
  }
`
export const ProposalDetails = styled.div`
  display: flex;
  flex-direction: column;

  margin: 8rem 0 0;
`
export const DetailsSubTitle = styled.td`
  font-size: ${theme.font.sizes.font14};
  font-weight: ${theme.font.weight.bold};
`
export const DetailsText = styled.td`
  font-size: ${theme.font.sizes.font12};
  font-weight: ${theme.font.weight.light};
  line-height: 1.6rem;
  letter-spacing: 0.06rem;

  padding: 0.8rem 6.4rem 2.4rem;
`
