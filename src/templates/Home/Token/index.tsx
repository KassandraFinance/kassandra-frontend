import React from 'react'

import * as S from './styles'

const Token = () => {
  return (
    <S.Token>
      <h1>Be part of the Kassandra ecosystem with $KACY </h1>
      <p>Take the lead and join the first decentralized fund manager through our decentralized governance protocol</p>
      <S.Details>
        <img className="img-token" src="assets/token.svg" alt="" />
        <img className="img-token-96" src="assets/token-96.svg" alt="" />
        <S.Description>
          <h3>The $KACY Token</h3>
          <p>The protocol governance token responsible for:</p>
          <ul>
            <li><span>Approving</span> code changes and updates </li>
            <li>Deploying <span>new</span> investment products</li>
            <li><span>Curating</span> whitelists for investable assets</li>
            <li>Adjusting <span>parameters</span> and <span>fees</span></li>
          </ul>
          <a href="https://twitter.com/dao_kassandra" target="_blank" rel="noopener noreferrer">Join the $KACY community</a>
        </S.Description>
      </S.Details>
    </S.Token>
  )
}

export default Token