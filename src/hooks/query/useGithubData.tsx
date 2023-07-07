import { useQuery } from '@tanstack/react-query'

import { githubClient } from '@/graphQLClients'

type UseGithubData = {
  dateLastWeek: unknown
  dateLastMonth: unknown
  dateInitLastYar: unknown
  dateInitCurrentYarn: unknown
}

export const fetchGithubData = async ({
  dateLastWeek,
  dateLastMonth,
  dateInitLastYar,
  dateInitCurrentYarn
}: UseGithubData) => {
  return githubClient
    .dataGithub({
      dateLastWeek,
      dateLastMonth,
      dateInitLastYar,
      dateInitCurrentYarn
    })
    .then(res => res)
}

export const useGithubData = ({
  dateLastWeek,
  dateLastMonth,
  dateInitLastYar,
  dateInitCurrentYarn
}: UseGithubData) => {
  return useQuery({
    queryKey: ['github'],
    queryFn: async () =>
      fetchGithubData({
        dateLastWeek,
        dateLastMonth,
        dateInitLastYar,
        dateInitCurrentYarn
      })
  })
}
