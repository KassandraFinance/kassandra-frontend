import { GetServerSideProps } from 'next'

import { flattenObj } from '@/utils/strapiResponseTransformer'

import { strapiClient } from '@/graphQLClients'
import { PostDataType } from '@/store/reducers/postsSlice'

function generateSiteMap(posts: string[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://www.kassandra.finance/</loc>
     </url>

     <url>
       <loc>https://www.kassandra.finance/investors</loc>
     </url>

     <url>
       <loc>https://www.kassandra.finance/managers</loc>
     </url>

     <url>
      <loc>https://www.kassandra.finance/incentives-program</loc>
    </url>
    <url>
      <loc>https://www.kassandra.finance/dao</loc>
    </url>
    <url>
      <loc>https://www.kassandra.finance/foundation</loc>
    </url>
    <url>
      <loc>https://www.kassandra.finance/blog</loc>
    </url>
     ${posts
       .map(post => {
         return `
    <url>
      <loc>${post}</loc>
    </url>
     `
       })
       .join('')}
   </urlset>
 `
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const data = await strapiClient.SitemapPosts()

  const flatPosts = flattenObj<PostDataType[]>(data.posts)
  const formattedPostsWithURL = flatPosts?.map(
    (post: { slug: string }) =>
      `https://www.kassandra.finance/blog/${post.slug}`
  )
  const sitemap = generateSiteMap(formattedPostsWithURL)

  res.setHeader('Content-Type', 'text/xml')
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=120, stale-while-revalidate=59'
  )
  // we send the XML to the browser
  res.write(sitemap)
  res.end()

  return {
    props: {}
  }
}

export default SiteMap
