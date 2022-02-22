import styled from 'styled-components'
import theme from '../../../../styles/theme'

import * as VotingPowerStyles from '../../../../components/VotingPower/styles'
import * as VoteCardStyle from '../../../../components/Governance/VoteCard/styles'
import * as ButtonStyles from '../../../../components/Button/styles'
import * as ExternalLinkStyles from '../../../../components/ExternalLink/styles'

export const BackgroundVote = styled.div`
  padding-bottom: 8rem;

  background-image: url('/assets/background-governance-page.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  box-shadow: inset 0px -2rem 2rem 0 #151117;
`
export const VoteContent = styled.div`
  max-width: 114rem;
  margin: 0 auto;

  @media (max-width: 1200px) {
    padding: 0 ${theme.spacings.space32};
  }
  @media (max-width: 768px) {
    padding: 0 ${theme.spacings.space24};
  }

  @media (max-width: 540px) {
    padding: 0 ${theme.spacings.space16};
  }
`
export const IntroDesktopScreen = styled.div`
  @media (max-width: 768.5px) {
    display: none;
  }
`
export const IntroMobileScreen = styled.div`
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
  height: 5.6rem;
  margin-top: 1.6rem;
  padding: 2rem 1.6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #ffffff0a;
  border-width: 0.1rem;
  border-style: solid;
  border-color: #fcfcfc26;
  border-radius: 0.8rem;

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
    margin-right: 1.6rem;

    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.bold};
    letter-spacing: 0.08rem;

    @media (max-width: 768px) {
      font-size: ${theme.font.sizes.font14};
    }
  }
  span {
    margin-left: 1.2rem;

    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
    letter-spacing: 0.07rem;
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
      width: 34.8rem;
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
  max-width: 100%;
  margin-top: 4rem;

  display: flex;
  justify-content: space-between;
  column-gap: 2.4rem;

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
  margin-top: 10rem;
  margin-right: auto;
  margin-bottom: 0;
  margin-left: auto;
  max-width: 114rem;

  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    padding: 0 ${theme.spacings.space32};
  }
  @media (max-width: 768px) {
    margin-top: 8rem;
    margin-right: auto;
    margin-bottom: 0;
    margin-left: auto;
    padding: 0 ${theme.spacings.space24};
  }
  @media (max-width: 540px) {
    padding: 0 ${theme.spacings.space16};
  }
`
export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 5fr 3fr;
    grid-gap: 3.2rem;
  }
`
export const ProposalTitleWrapper = styled.div`
  display: flex;
  h1 {
    font-size: ${theme.font.sizes.font18};
    font-weight: ${theme.font.weight.bold};
    margin-left: 0.8rem;

    @media (min-width: 768px) {
      font-size: ${theme.font.sizes.font24};
    }
    @media (min-width: 1024px) {
      font-size: ${theme.font.sizes.font32};
    }
  }
`
export const DescriptionTable = styled.section`
  width: 100%;
  margin-top: 4rem;
  margin-right: auto;
  margin-bottom: 0;
  margin-left: auto;
  padding: 1.6rem;

  background-color: #ffffff0a;
  border-width: 0.1rem;
  border-style: solid;
  border-color: #ffffff3b;
  border-radius: 1.2rem;

  @media (min-width: 1024px) {
    margin-top: 4.8rem;
    margin-right: auto;
    margin-bottom: 0;
    margin-left: auto;
    padding: 2.4rem;
  }
`
export const Table = styled.table`
  width: 100%;
`
export const TableHead = styled.div`
  border-bottom-width: 0.1rem;
  border-bottom-style: solid;
  border-bottom-color: #ffffff4d;
  padding-bottom: 1.6rem;
`
export const TableTitle = styled.th`
  font-size: ${theme.font.sizes.font16};
  font-weight: ${theme.font.weight.bold};

  @media (min-width: 768px) {
    font-size: ${theme.font.sizes.font18};
  }
  @media (min-width: 1024px) {
    font-size: ${theme.font.sizes.font24};
  }
`
export const TableBody = styled.tbody``
export const TableDescriptionWrapper = styled.div`
  padding: 1.6rem 0;

  display: flex;
  flex-direction: column;

  border-top-width: 0.1rem;
  border-top-style: solid;
  border-top-color: #ffffff4d;

  &:first-child {
    border-top: none;
  }
`
export const DescriptionSubTitle = styled.td`
  font-size: ${theme.font.sizes.font14};
  font-weight: ${theme.font.weight.bold};
  letter-spacing: 0.07rem;

  @media (min-width: 1024px) {
    font-size: ${theme.font.sizes.font18};
    letter-spacing: 0.09rem;
  }
  @media (min-width: 768px) {
    font-size: ${theme.font.sizes.font16};
    letter-spacing: 0.08rem;
  }
`
export const DescriptionText = styled.td`
  font-size: ${theme.font.sizes.font12};
  font-weight: ${theme.font.weight.light};
  line-height: 1.6rem;
  letter-spacing: 0.06rem;

  padding: 1.6rem 0;
  @media (min-width: 768px) {
    font-size: ${theme.font.sizes.font14};
    letter-spacing: 0.07rem;
  }
  @media (min-width: 1024px) {
    font-size: ${theme.font.sizes.font16};
    letter-spacing: 0.08rem;
  }
`
export const InfoTable = styled.table`
  width: 100%;
  height: max-content;

  margin-top: 1.6rem;
  margin-right: auto;
  margin-bottom: 0;
  margin-left: auto;

  padding: 1.6rem;

  background-color: #ffffff0a;
  border-width: 0.1rem;
  border-style: solid;
  border-color: #ffffff3b;
  border-radius: 1.2rem;

  @media (width: 768px) {
    margin-top: 3.2rem;
    margin-right: auto;
    margin-bottom: 0;
    margin-left: auto;
  }
  @media (min-width: 1024px) {
    margin-top: 4.8rem;
    margin-right: auto;
    margin-bottom: 0;
    margin-left: auto;
  }
`
export const TableInfoWrapper = styled.div`
  border-top-width: 0.1rem;
  border-top-style: solid;
  border-top-color: #ffffff4d;

  &:first-child {
    border-top: none;
  }
`
export const DataWrapper = styled.div`
  margin-top: 1.2rem;

  display: flex;
  justify-content: space-between;
  &:first-child {
    margin-top: 2.4rem;
  }
`
export const TextKey = styled.span`
  font-size: ${theme.font.sizes.font12};
  font-weight: ${theme.font.weight.bold};
  letter-spacing: 0.06rem;

  @media (min-width: 768px) {
    font-size: ${theme.font.sizes.font14};
    letter-spacing: 0.07rem;
  }
`
export const TextValue = styled.span`
  font-size: ${theme.font.sizes.font12};
  font-weight: ${theme.font.weight.light};
  letter-spacing: 0.06rem;

  @media (min-width: 768px) {
    font-size: ${theme.font.sizes.font14};
    line-height: 18.2px;
    letter-spacing: 0.07rem;
  }
`
export const InfoLinkWrapper = styled.div`
  width: 100%;
  margin-top: 1.6rem;
  padding: 1.6rem;

  display: flex;
  justify-content: center;

  background-color: #ffffff0a;
  border-width: 0.1rem;
  border-style: solid;
  border-color: transparent;

  border-radius: 1.2rem;

  > span {
    font-size: ${theme.font.sizes.font14};
    @media (min-width: 768px) {
      font-size: ${theme.font.sizes.font16};
    }
  }
`
export const Link = styled.a`
  display: flex;
  align-items: center;

  color: #c4c4c4;
  line-height: ${theme.font.sizes.font14};
  font-size: ${theme.font.sizes.font14};
  text-decoration: none;

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
  margin-top: 10rem;

  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-top: 8rem;
  }
`
export const DetailsSubTitle = styled.td`
  font-size: ${theme.font.sizes.font14};
  font-weight: ${theme.font.weight.bold};

  @media (min-width: 1024px) {
    font-size: ${theme.font.sizes.font18};
    letter-spacing: 0.09rem;
  }
`
export const DetailsText = styled.td`
  font-size: ${theme.font.sizes.font12};
  font-weight: ${theme.font.weight.light};
  line-height: 1.6rem;
  letter-spacing: 0.06rem;

  padding: 0.8rem 0 1.6rem 2.4rem;

  @media (min-width: 768px) {
    font-size: ${theme.font.sizes.font14};
    letter-spacing: 0.07rem;
    line-height: 1.82rem;

    padding: 0.8rem 0 2.4rem 2.4rem;
    @media (min-width: 1024px) {
      padding: 0.8rem 0 2.4rem 3.6rem;
      font-size: ${theme.font.sizes.font16};
      line-height: 2.08rem;
      letter-spacing: 0.08rem;
    }
  }
`
export const ProposalStatus = styled.div`
  margin-top: 8rem;
  max-width: 114rem;

  display: flex;
  flex-direction: column;
`
interface IImageProps {
  isAfter: boolean;
  isComplete: boolean;
}
// eslint-disable-next-line prettier/prettier
export const LineBetweenImages = styled.div<IImageProps>`
    background: ${props =>
      props.isComplete
        ? `linear-gradient(0deg, ${theme.colors.amber} -0.02%, ${theme.colors.magenta} 99.99%)`
        : '#45405F'};
    ${props =>
      !props.isAfter &&
      `
      width: 100%;
      height: 0.1rem;
      margin-top: 3.95rem;
      
      display: inline-block;

      @media (max-width: 768px) {
        margin-top: 2.8rem;
      }
      @media (max-width: 480px) {
        width: 0.1rem;
        height: 3.2rem;
        margin-top: 0;
        margin-left: 2rem;
      }
  `}
`
export const Steps = styled.div`
  margin-top: 7.2rem;

  display: flex;
  justify-content: space-between;

  @media (max-width: 480px) {
    margin-top: 3.6rem;

    padding-top: 0;
    padding-right: 4.8rem;
    padding-bottom: 0;
    padding-left: 2.6rem;

    flex-direction: column;
    align-items: flex-start;
  }
`
export const Step = styled.div`
  position: relative;

  min-width: 7.9rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    min-width: ${theme.spacings.space56};
    min-height: ${theme.spacings.space56};
  }
  @media (max-width: 480px) {
    width: 100%;
    height: 4rem;
    margin: -0.9rem 0;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    img {
      width: 4rem;
    }
  }
`

export const StepTitle = styled.div`
  margin-top: 4.4rem;

  font-size: ${theme.font.sizes.font18};
  font-weight: ${theme.font.weight.bold};

  @media (max-width: 768px) {
    margin-top: 2.4rem;

    font-size: ${theme.font.sizes.font14};
  }
  @media (max-width: 480px) {
    margin-top: 0;
  }
`
export const StepDate = styled.div`
  font-size: ${theme.font.sizes.font14};
  font-weight: ${theme.font.weight.light};
  letter-spacing: 0.07rem;
  @media (max-width: 768px) {
    font-size: ${theme.font.sizes.font12};
  }
`
