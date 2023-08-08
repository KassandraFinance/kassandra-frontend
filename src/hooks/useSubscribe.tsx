import { z } from 'zod'

import useMatomo from './useMatomo'
import { useAddEmailToList } from './mutations/useAddEmailToList'

type HandleSubmitWithToastProps = {
  event: React.FormEvent<Element>
  onSuccess?: () => void
  onError?: (error: Error) => void
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

    function sendError(error: Error) {
      if (onError) onError(error)
    }

    handleEventMatomo('subscribe', email)

    await mutateAsync(email, {
      onSuccess,
      onError: error => {
        sendError(error as Error)
      }
    })
  }

  return {
    handleSubmitWithToast,
    ...rest
  }
}

export default useSubscribe
