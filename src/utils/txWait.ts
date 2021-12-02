import web3 from './web3'
import { TransactionReceipt } from 'web3-core'

export type MetamaskError = (Error & { code: number }) | undefined
export type TransactionCallback = (error: MetamaskError, txHash: string) => void

const sleep = (milliseconds: number) =>
  new Promise(resolve => setTimeout(resolve, milliseconds))

const waitTransaction = async (txHash: string): Promise<TransactionReceipt> => {
  let txReceipt: TransactionReceipt | null = null

  while (txReceipt === null) {
    // eslint-disable-next-line no-await-in-loop
    txReceipt = await web3.eth.getTransactionReceipt(txHash)
    // eslint-disable-next-line no-await-in-loop
    await sleep(500)
  }

  return txReceipt
}

export default waitTransaction
