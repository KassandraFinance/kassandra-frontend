import React from 'react'

import * as S from './styles'

const IndexDetails = () => (
  <S.IndexDetailsContainer>
    <h1>Details</h1>
    <S.Table>
      <thead>
        <S.Tr>
          <S.Th>Colour</S.Th>
          <S.Th>Name</S.Th>
          <S.Th>Value/Token</S.Th>
          <S.Th>Allocation</S.Th>
          <S.Th>Change 24h</S.Th>
        </S.Tr>
      </thead>
      <tbody>
        <S.Tr>
          <S.Colour />
          <S.Td>BTC</S.Td>
          <S.Td>3.789,00 BTC</S.Td>
          <S.Td>40%</S.Td>
          <S.Td style={{ color: '#EB5757' || '#6FCF97' }} >-3.26</S.Td>
        </S.Tr>
      </tbody>
    </S.Table>
  </S.IndexDetailsContainer>
)


export default IndexDetails
