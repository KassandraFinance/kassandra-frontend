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

export function confirmCancelUnstake(txReceipt?: TransactionReceipt) {
  if (txReceipt?.status) {
    ToastSuccess("Cancel unstake confirmed")
    return
  }
  ToastError("Failed to cancel unstake")
}

export function confirmInvest(txReceipt?: TransactionReceipt) {
  if (txReceipt?.status) {
    ToastSuccess("Invest confirmed")
    return
  }
  ToastError("Failed to invest")
}

export function confirmSwap(txReceipt?: TransactionReceipt) {
  if (txReceipt?.status) {
    ToastSuccess("Swap confirmed")
    return
  }
  ToastError("Failed to swap")
}