import React from 'react'

import { IndexDetailsContainer, Table, Tr, Th, Td, Colour } from './styles'

const IndexDetails = () => (
    <IndexDetailsContainer>
      <h1>Details</h1>
      <Table>
        <thead>
          <Tr>
            <Th>Colour</Th>
            <Th>Name</Th>
            <Th>Value/Token</Th>
            <Th>Allocation</Th>
            <Th>Change 24h</Th>
          </Tr>
        </thead>
        <tbody>
          <Tr>
            <Colour />
            <Td>BTC</Td>
            <Td>3.789,00 BTC</Td>
            <Td>40%</Td>
            <Td style={{color: '#EB5757' || '#6FCF97'}} >-3.26</Td>
          </Tr>
        </tbody>
      </Table>
    </IndexDetailsContainer>
  )


export default IndexDetails