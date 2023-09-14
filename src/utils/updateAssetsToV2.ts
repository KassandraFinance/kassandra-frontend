import Big from 'big.js'

type WeightsV2 = {
  __typename?: 'WeightGoalPoint' | undefined
  start_timestamp: number
  end_timestamp: number
  weights: {
    __typename?: 'WeightGoal' | undefined
    weight_normalized: any
    asset: {
      __typename?: 'Asset' | undefined
      token: {
        __typename?: 'Token' | undefined
        id: string
      }
    }
  }[]
}

export type UnderlyingAssetsInfoType = {
  __typename?: 'Asset' | undefined
  balance: string
  weight_normalized: string
  weight_goal_normalized: string
  token: {
    __typename?: 'Token' | undefined
    id: string
    name: string
    logo?: string | null | undefined
    symbol: string
    decimals: number
    wraps?:
      | {
          __typename?: 'Token' | undefined
          id?: string
          decimals?: number
          symbol?: string
          name?: string
          logo?: string | null | undefined
        }
      | null
      | undefined
  }
}

export function getWeightsNormalizedV2(
  weights: WeightsV2[],
  underlying_assets: UnderlyingAssetsInfoType[]
): UnderlyingAssetsInfoType[] | undefined {
  if (weights.length <= 0) return

  const currentTime = new Date().getTime() / 1000
  const startTime = weights[0].start_timestamp
  const endTime = weights[0].end_timestamp
  if (startTime <= currentTime && endTime > currentTime && weights.length > 1) {
    const assetsV2 = weights[0].weights.map(weight => {
      const startWeight =
        weights[1].weights.find(
          _weight => _weight.asset.token.id === weight.asset.token.id
        )?.weight_normalized ?? '0'
      const endWeight = weight.weight_normalized

      const asset = underlying_assets.find(
        asset => asset.token.id === weight.asset.token.id
      )
      let weight_normalized: string
      if (asset) {
        weight_normalized = Big(endWeight)
          .sub(startWeight)
          .div(endTime - startTime)
          .mul(currentTime - startTime)
          .add(startWeight)
          .toFixed()
      } else {
        throw new Error()
      }
      return { ...asset, weight_normalized }
    })
    return assetsV2
  } else if (weights.length >= 1) {
    let weigthsIndex = 0
    if (
      startTime > currentTime &&
      endTime > currentTime &&
      weights.length > 1
    ) {
      weigthsIndex = 1
    }

    const assetsV2 = weights[weigthsIndex].weights.map(weight => {
      const asset = underlying_assets.find(
        asset => asset.token.id === weight.asset.token.id
      )
      if (asset) {
        asset.weight_normalized = weight.weight_normalized
      } else {
        throw new Error()
      }
      return asset
    })
    return assetsV2
  }
}
