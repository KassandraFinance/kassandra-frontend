import React from 'react'

import * as S from './styles'

const Change = () => {
  return (
    <S.Change>
      <S.Title>
        <img src="assets/iconbar.svg" alt="-" />
        <h2>Change</h2>
      </S.Title>
      <table>
        <thead>
          <tr>
            <th>1 day</th>
            <th>1 week</th>
            <th>1 month</th>
            <th>3 months</th>
            <th>1 year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1,34%</td>
            <td>1,34%</td>
            <td>1,34%</td>
            <td>1,34%</td>
            <td>1,34%</td>
          </tr>
        </tbody>
      </table>
    </S.Change>
  )
}

export default Change
