import { useAppDispatch } from '@/store/hooks'
import { updateFilters } from '@/store/reducers/articlesFilterSlice'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { z } from 'zod'

const urlArrayValidator = z
  .string()
  .or(z.array(z.string()))
  .transform(val =>
    typeof val === 'string' ? val.split(',').filter(val => val !== '') : val
  )
  .optional()
  .default([])

export const useSyncResearchFilters = () => {
  const router = useRouter()

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!router.isReady) return

    const getInitialStateFromUrl = () => {
      let tags: string[] = []
      let coins: string[] = []
      let isPRO = false

      const tagsResult = urlArrayValidator.safeParse(router.query?.tags)
      const coinsResult = urlArrayValidator.safeParse(router.query?.coins)

      const isPROResult = z
        .string()
        .refine(val => val === 'true')
        .transform(val => val === 'true')
        .safeParse(router.query?.isPRO)

      if (tagsResult.success) {
        tags = tagsResult.data
      }
      if (coinsResult.success) {
        coins = coinsResult.data
      }

      if (isPROResult.success) {
        isPRO = isPROResult.data
      }

      return {
        tags,
        coins,
        isPRO
      }
    }

    const initialArticlesFilter = getInitialStateFromUrl()

    dispatch(updateFilters(initialArticlesFilter))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, router.isReady])
}
