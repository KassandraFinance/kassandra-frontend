import QuestionCard from '@/components/QuestionCard'

import * as S from './styles'

const FAQ = () => {
  return (
    <S.FAQ>
      <QuestionCard
        question="What is the Kassandra's Manager Incentive Program?"
        answer="The Managers Incentive Program is a new initiative designed to empower our pool managers and enhance the Kassandra platform experience. We offer a range of benefits, including featured placement for your pool, active marketing support, and staking rewards in our native KACY token for pool investors.
        Shaped not just as a reward program but as a partnership, the Managers Incentive Program provides benefits for all members of our community, adding value for investors who will have access to advantageous fund strategies, and for managers who can attract more investors to their featured pools and earn fees for their work."
      />
      <QuestionCard
        question="Who can participate?"
        answer="There are no limitations. If you have the will to manage a tokenized pool, you are welcome to join Kassandra's community on Discord, complete the onboarding process, and put your strategy to the test. Even if your pool idea is not selected for incentives, it will still be featured among the community's pools."
      />
      <QuestionCard
        question="How can I become a featured manager?"
        answer="Fill out our form with all the relevant details about your suggested pool. Provide the name of the pool, outline its strategy, specify the assets that will comprise the pool, and indicate their allocations and management fees. Our team will evaluate community suggestions against market requirements and choose the pools that aligns with the overall requirements and preferences of investors."
      />
      <QuestionCard
        question="What are the benefits of becoming a incentivized manager?"
        answer="In addition to showcasing your pool prominently in our Featured Pools section, capturing global investor attention, our dedicated marketing team will actively promote your pool, amplifying its reach and potential. As the cherry on top, staking rewards in our native token, $KACY, provide passive gains for your investors while benefiting from your pool's strategy. And, of course, you'll earn management fees for maintaining and operating your pool."
      />
      <QuestionCard
        question="Are there any restrictions or guidelines to consider when suggesting my pool?"
        answer="When suggesting your pool, there are a few restrictions and guidelines to consider. The featured assets should be among Kassandra's whitelisted tokens, and the total annual management fee should be below 3% (0.5% for Kassandra). Additionally, the referral fee should fall within the range of 0.3% to 0.8%. It's important to ensure that your pool's strategy aligns with our program's goal of expanding investment fund offerings to cater to the diverse needs of investors, so our team will evaluate your proposal and provide suggestions for refinements, if necessary, to meet the specified criteria."
      />
      <QuestionCard
        question="As an existing manager at Kassandra, do I need to propose a completely new pool?"
        answer="No, you can submit your already created pool to the program by filling out the form with your pool's information."
      />
      <QuestionCard
        question="Is there a minimum investment value required to participate in the program?"
        answer="To ensure optimal performance, it is ideal for the Total Value Locked (TVL) of the pool to reach at least $2,000. However, if you don't have this liquidity available or cannot bring sufficient investors to lock this value, you can still submit your pool idea and discuss it with us. Kassandra may be able to provide the necessary boost to help make your pool a success."
      />
      <QuestionCard
        question="Is there any training or support available for the managers that in the program?"
        answer="In addition to our comprehensive knowledge base documentation designed to assist new investors and managers at Kassandra, we offer personalized support through scheduled calls for one-on-one guidance. You can also join Kassandra's Discord community to directly connect with our team and fellow community members who are enthusiastic about providing assistance and support."
      />
      <QuestionCard
        question="What is deadline for submitting pools suggestions?"
        answer="There is no specific deadline for submitting pool suggestions. We continuously accept and evaluate new ideas for pools. However, please note that the distribution of staking rewards in $KACY among the featured pools occurs every 3 months, as it is subject to a governance voting process."
      />
      <QuestionCard
        question="Can I manage a pool without suggesting any?"
        answer="Yes, you can. We may also suggest pool ideas and look for managers to supervise them, so you can become a featured manager without having to suggest a pool yourself."
      />
    </S.FAQ>
  )
}

export default FAQ
