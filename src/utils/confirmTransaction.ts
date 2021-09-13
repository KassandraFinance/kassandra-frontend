import { TransactionReceipt } from 'web3-core'

import { ToastError, ToastSuccess  } from '../components/Toastify/toast'

export function confirmClaim(txReceipt?: TransactionReceipt) {
	if (txReceipt?.status) {
		ToastSuccess("Reward Claimed")
		return
	}
	ToastError("Failed to claim reward")
}
