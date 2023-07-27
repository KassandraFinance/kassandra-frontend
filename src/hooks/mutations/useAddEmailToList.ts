import { useMutation } from '@tanstack/react-query'
import {
  CommonSendInBlueListIds,
  commonSendInBlueListIds
} from '../useSubscribe'

export const useAddEmailToList = () => {
  const mutation = useMutation({
    mutationFn: async ({
      sendInBlueListId,
      email
    }: {
      sendInBlueListId: number | CommonSendInBlueListIds
      email: string
    }) => {
      const addContactResponse = await fetch(
        `/api/email/addEmailToContactsAndList`,
        {
          method: 'POST',
          headers: {
            accept: 'application/json',
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            listId:
              typeof sendInBlueListId !== 'number'
                ? commonSendInBlueListIds[sendInBlueListId]
                : sendInBlueListId,
            email
          })
        }
      )

      const addContactData = await addContactResponse.json()

      if (!addContactResponse.ok) throw addContactData
    }
  })

  return mutation
}
