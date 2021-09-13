import { TransactionReceipt } from 'web3-core'

import { ToastError, ToastSuccess  } from '../components/Toastify/toast'

export function confirmStake(txReceipt?: TransactionReceipt) {
  if (txReceipt?.status) {
    ToastSuccess("Stake confirmed")
    return
  }
  ToastError("Failed to stake")
}

export function confirmUnstake(txReceipt?: TransactionReceipt) {
  if (txReceipt?.status) {
    ToastSuccess("Unstake confirmed")
    return
  }
  ToastError("Failed to unstake")
}

export function confirmWithdraw(txReceipt?: TransactionReceipt) {
  if (txReceipt?.status) {
    ToastSuccess("Withdraw confirmed")
    return
  }
  ToastError("Failed to withdraw")
}

export function confirmClaim(txReceipt?: TransactionReceipt) {
	if (txReceipt?.status) {
		ToastSuccess("Reward Claimed")
		return
	}
	ToastError("Failed to claim reward")
}
