import { z } from 'zod'

import useMatomo from './useMatomo'
import { useAddEmailToList } from './mutations/useAddEmailToList'

export const commonSendInBlueListIds = {
  general: 8,
  waitingList: 12
}

export type CommonSendInBlueListIds = keyof typeof commonSendInBlueListIds

type HandleSubmitWithToastProps = {
  event: React.FormEvent<Element>
  sendInBlueListId: number | CommonSendInBlueListIds
  onSuccess?: () => void
  onError?: (error: unknown) => void
}

function useSubscribe() {
  const { trackEvent } = useMatomo()

  function handleEventMatomo(category: string, name: string) {
    trackEvent({
      category: category,
      action: `${category}-${name}`,
      name: name
    })
  }

  const { mutateAsync, ...rest } = useAddEmailToList()

  async function handleSubmitWithToast({
    event,
    sendInBlueListId,
    onSuccess,
    onError
  }: HandleSubmitWithToastProps) {
    event.preventDefault()

    const submissionSchema = z.object({
      target: z.any() // I will use "any" here because it might not always come a HTMLInputElement and also to comply with any code that might use this hook
    })

    const eventResult = submissionSchema.safeParse(event)

    if (!eventResult.success) {
      sendError(eventResult.error)
      return
    }

    const email = eventResult.data.target[0].value

    function sendError(error: unknown) {
      if (onError) onError(error)
    }

    handleEventMatomo('subscribe', email)

    await mutateAsync(
      { sendInBlueListId, email },
      {
        onSuccess,
        onError: error => {
          if (error instanceof Error) {
            sendError(error)
            return
          }

          sendError('Unknown error')
        }
      }
    )
  }

  return {
    handleSubmitWithToast,
    ...rest
  }
}

export default useSubscribe
