import * as cheerio from 'cheerio'
import GithubSlugger from 'github-slugger'

export const getHeadingsFromMarkdown = (postHTML: string) => {
  const $ = cheerio.load(postHTML)
  const slugger = new GithubSlugger()
  const h2s: {
    id: string
    content: string
  }[] = []

  $('h2').each((i, element) => {
    h2s.push({
      id: slugger.slug($(element).text()),
      content: $(element).text()
    })
  })

  return h2s
}

export const getSlugByTitle = (title: string) => {
  return title
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/_/g, '')
}
