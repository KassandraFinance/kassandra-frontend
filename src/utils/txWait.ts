import web3 from './web3'
import { TransactionReceipt } from 'web3-core'

import { ToastWarning } from '../components/Toastify/toast'

export type CompleteCallback = (
  txReceipt?: TransactionReceipt,
  error?: Error
) => void

const sleep = (milliseconds: number) =>
  new Promise(resolve => setTimeout(resolve, milliseconds))

const waitTransaction =
  (onComplete: CompleteCallback, message?: string) =>
  async (error: Error, txHash: string) => {
    ToastWarning(message || 'Transaction Pending')
    if (error) {
      onComplete(undefined, error)
      return
    }

    let txReceipt: TransactionReceipt | null = null

    while (txReceipt === null) {
      // eslint-disable-next-line no-await-in-loop
      txReceipt = await web3.eth.getTransactionReceipt(txHash)
      // eslint-disable-next-line no-await-in-loop
      await sleep(500)
    }

    onComplete(txReceipt, undefined)
  }

export default waitTransaction
