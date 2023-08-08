import { useMutation } from '@tanstack/react-query'

export const useAddEmailToList = () => {
  const mutation = useMutation({
    mutationFn: async (email: string) => {
      const addContactResponse = await fetch(`/api/subscribe`, {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json'
        },
        body: JSON.stringify({ email })
      })

      const addContactData = await addContactResponse.json()

      if (!addContactResponse.ok) throw addContactData
    }
  })

  return mutation
}
