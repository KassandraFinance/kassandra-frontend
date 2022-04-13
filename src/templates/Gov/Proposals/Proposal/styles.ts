import styled from 'styled-components'
import theme from '../../../../styles/theme'

import * as VotingPowerStyles from '../../../../components/VotingPower/styles'
import * as VoteCardStyle from '../../../../components/Governance/VoteCard/styles'
import * as ButtonStyles from '../../../../components/Button/styles'

export const BackgroundVote = styled.div`
  padding-bottom: 8rem;

  background-image: url('/assets/newbg4.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  box-shadow: inset 0 -2rem 2rem 0 #151117;
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
    height: 8.2rem;
    max-width: 100%;
    padding: 1.6rem 2.4rem;
  }

  @media (max-width: 728px) {
    padding: 1.6rem;
  }

  @media (max-width: 705px) {
    padding: 0.8rem;
  }

  @media (max-width: 670px) {
    height: 5.6rem;
    max-width: 100%;
  }

  p {
    margin-right: 1.6rem;

    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.medium};
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
export const VotingPower = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: 670px) {
    max-width: 100%;
    align-items: flex-start;
  }

  ${VotingPowerStyles.VotingPower} {
    @media (max-width: 768px) {
      width: 34.8rem;
      max-width: 100%;
    }

    @media (max-width: 670px) {
      width: 100%;
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
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
  margin-right: auto;
  margin-bottom: 0;
  margin-left: auto;
  max-width: 114rem;

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
    font-weight: ${theme.font.weight.medium};
    margin-left: 0.8rem;

    @media (min-width: 768px) {
      font-size: ${theme.font.sizes.font24};
      margin-left: 1.6rem;
    }

    @media (min-width: 1024px) {
      font-size: ${theme.font.sizes.font32};
      margin-left: 2rem;
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

  @media (max-width: 540px) {
    border-radius: 0.8rem;
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
  font-weight: ${theme.font.weight.medium};

  @media (min-width: 768px) {
    font-size: ${theme.font.sizes.font18};
  }

  @media (min-width: 1024px) {
    font-size: ${theme.font.sizes.font24};
  }
`

export const DescriptionProposal = styled.div`
  display: block;
  width: 100%;
  white-space: pre-wrap;
  font-size: 1.6rem;
  font-weight: 300 lighter;
  color: #fcfcfc;
  word-wrap: break-word;

  h1 {
    font-size: 2.4rem;
    color: #ffffff;
  }

  h2 {
    font-size: 1.8rem;
    color: #fcfcfc;
  }

  a {
    color: ${theme.colors.cyan};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  code {
    padding: 0.5rem;
    overflow: auto;
    border: none;
    word-wrap: break-word;
    page-break-inside: avoid;
    max-width: 100%;

    background-color: #171d24;
    border-radius: 0.6rem;

    color: #bbc4cb;
    font-family: monospace;
    font-size: 85%;
    line-height: 2.5rem;
  }

  pre {
    padding: 1.6rem;

    background-color: #171d24;
    border-radius: 1rem;

    code {
      display: block;
      white-space: pre-wrap;
      padding: 0;
    }
  }

  img {
    max-width: 100%;
  }

  hr {
    border: solid 0.01rem;
  }
`

export const TableBody = styled.tbody``
export const TableDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.6rem 0;

  p {
    line-height: 2.5rem;
  }

  border-top-width: 0.1rem;
  border-top-style: solid;
  border-top-color: #ffffff4d;

  &:first-child {
    border-top: none;
  }
`
export const DescriptionSubTitle = styled.td`
  font-size: ${theme.font.sizes.font14};
  line-height: 130%;
  font-weight: ${theme.font.weight.medium};
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
  padding: 1.6rem 0;

  font-size: ${theme.font.sizes.font12};
  font-weight: ${theme.font.weight.light};
  line-height: 1.6rem;
  letter-spacing: 0.06rem;

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

  @media (max-width: 540px) {
    border-radius: 0.8rem;
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
  display: flex;
  justify-content: space-between;
  margin-top: 1.2rem;

  line-height: 1.2rem;
  color: #c4c4c4;

  &:first-child {
    margin-top: 1.6rem;
  }
`
export const TextKey = styled.span`
  font-size: ${theme.font.sizes.font12};
  font-weight: ${theme.font.weight.medium};
  letter-spacing: 0.06rem;

  @media (min-width: 768px) {
    font-size: ${theme.font.sizes.font14};
    letter-spacing: 0.07rem;
  }
`

export const TextValue = styled.span`
  font-size: ${theme.font.sizes.font12};
  font-weight: ${theme.font.weight.medium};
  color: #fcfcfc;
  letter-spacing: 0.06rem;

  @media (min-width: 768px) {
    font-size: ${theme.font.sizes.font14};
    line-height: 1.56rem;
    letter-spacing: 0.07rem;
  }
`

export const LinkForum = styled.a`
  border: 0.1rem solid rgba(255, 255, 255, 0.04);
  border-radius: 0.8rem;
  background: rgba(255, 255, 255, 0.04);
  color: ${theme.colors.grayDisabled};

  line-height: ${theme.font.sizes.font16};
  font-size: ${theme.font.sizes.font16};
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 1.6rem;

  padding: 1.6rem 2.4rem;

  transition: border ${theme.transition.default};

  > span {
    font-size: ${theme.font.sizes.font14};
    margin-right: ${theme.spacings.space16};

    @media (min-width: 768px) {
      font-size: ${theme.font.sizes.font16};
    }
  }

  &:hover {
    border: 0.1rem solid rgba(255, 255, 255, 0.5);
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
export const DetailsSubTitle = styled.p`
  font-size: ${theme.font.sizes.font12};
  line-height: 130%;
  font-weight: ${theme.font.weight.medium};

  @media (min-width: 768px) {
    font-size: ${theme.font.sizes.font14};
    letter-spacing: 0.07rem;
    line-height: 1.82rem;
  }

  @media (min-width: 1024px) {
    font-size: ${theme.font.sizes.font18};
    line-height: 2.08rem;
    letter-spacing: 0.08rem;
  }
`
export const DetailsText = styled.span`
  font-size: ${theme.font.sizes.font12};
  line-height: 130%;
  font-weight: ${theme.font.weight.light};

  margin-left: ${theme.spacings.space8};

  word-break: break-all;

  @media (min-width: 768px) {
    font-size: ${theme.font.sizes.font14};
    letter-spacing: 0.07rem;
    line-height: 1.82rem;
  }

  @media (min-width: 1024px) {
    font-size: ${theme.font.sizes.font18};
    line-height: 2.08rem;
    letter-spacing: 0.08rem;
  }
`
export const LinkTargetSnowTrace = styled.a`
  display: flex;
  align-items: center;

  color: ${theme.colors.snow};
  text-decoration: none;

  &:hover {
    span + span {
      color: ${theme.colors.cyan};
    }

    > svg {
      path {
        fill: ${theme.colors.cyan};
      }
    }
  }

  span + span {
    font-weight: ${theme.font.weight.light};
    word-break: break-all;
  }

  > span {
    line-height: 130%;
    font-size: ${theme.font.sizes.font12};
    font-weight: ${theme.font.weight.medium};
    margin-right: ${theme.spacings.space8};

    @media (min-width: 768px) {
      font-size: ${theme.font.sizes.font14};
      letter-spacing: 0.07rem;
      line-height: 1.82rem;
    }

    @media (min-width: 1024px) {
      font-size: ${theme.font.sizes.font18};
      line-height: 2.08rem;
      letter-spacing: 0.08rem;
    }
  }
`
export const ProposalStatus = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 8rem;
  max-width: 114rem;
`
interface IImageProps {
  isAfter: boolean;
  isComplete: boolean;
}
// prettier-ignore
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
  display: flex;
  justify-content: space-between;
  margin-top: 7.2rem;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 3.6rem;
    padding-top: 0;
    padding-right: 4.8rem;
    padding-bottom: 0;
    padding-left: 2.6rem;
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
  margin-top: 2.4rem;
  margin-bottom: 0.4rem;

  font-size: ${theme.font.sizes.font18};
  font-weight: ${theme.font.weight.medium};

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
