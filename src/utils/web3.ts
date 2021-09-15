import Web3 from 'web3'
import BigNumber from 'bn.js'
import { EventData } from 'web3-eth-contract'
import { Subscription } from 'web3-core-subscriptions'

const web3 = new Web3(Web3.givenProvider)

type SubscribeOptions = {
  filter?: {
    [key: string]:
      | number
      | string
      | BigNumber
      | number[]
      | string[]
      | BigNumber[]
  },
  fromBlock?: number | string | BigNumber,
  topics?: string[]
}

export type EventCallback = (error: Error, result: EventData) => void

export interface EventSubscribe {
  (callback?: EventCallback): Subscription<EventCallback>;
  (
    options?: SubscribeOptions,
    callback?: EventCallback
  ): Subscription<EventCallback>;
}

export interface Events {
  [key: string]: EventSubscribe;
}

export default web3
