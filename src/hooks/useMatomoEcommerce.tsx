import { useCallback } from 'react'
import { useMatomo } from '@datapunt/matomo-tracker-react'

function useMatomoEcommerce() {
  const { pushInstruction, trackPageView, trackEvent } = useMatomo()

  const trackProductPageView = useCallback(
    (
      contractAddress: string,
      poolName: string,
      categories?: string | string[]
    ) => {
      pushInstruction(
        'setEcommerceView',
        contractAddress, // Product SKU
        poolName, // Product Name
        categories
      )
      trackPageView({})
    },
    [pushInstruction, trackPageView]
  )

  const trackCategoryPageView = useCallback(
    (categories: string | string[]) => {
      pushInstruction('setEcommerceView', false, false, categories)
      trackPageView({})
    },
    [pushInstruction, trackPageView]
  )

  const trackBuying = useCallback(
    (
      contractAddress: string,
      poolName: string,
      amountInUSD: number,
      categories?: string | string[]
    ) => {
      pushInstruction(
        'addEcommerceItem',
        contractAddress, // Product SKU
        poolName, // Product name
        categories,
        amountInUSD
      )
    },
    [pushInstruction]
  )

  const trackCancelBuying = useCallback(() => {
    pushInstruction('clearEcommerceCart')
  }, [pushInstruction])

  const trackBought = useCallback(
    (transactionId: string, amountInUSD: number, feeInUSD: number) => {
      pushInstruction(
        'trackEcommerceOrder',
        transactionId, // (Required) orderId
        amountInUSD + feeInUSD, // (Required) grandTotal (revenue)
        amountInUSD, // (Optional) subTotal
        feeInUSD // (optional) tax
      )
    },
    [pushInstruction]
  )

  const trackEventFunction = (
    action: string,
    name: string,
    category: string
  ) => {
    trackEvent({ action, name, category })
  }

  return {
    trackProductPageView,
    trackCategoryPageView,
    trackBuying,
    trackCancelBuying,
    trackBought,
    trackEventFunction
  }
}

export default useMatomoEcommerce
