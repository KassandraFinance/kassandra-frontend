import { useQuery } from '@tanstack/react-query'

export const fetchLastBlogPost = async () => {
  const response = await fetch(`/api/get-last-blog-post`)
  const data = await response.json()

  return data?.posts?.data[0] as {
    attributes: {
      slug: string
    }
  }
}

export const useLastBlogPost = () => {
  return useQuery({
    queryKey: ['last-blog-post'],
    queryFn: async () => {
      return fetchLastBlogPost()
    }
  })
}
