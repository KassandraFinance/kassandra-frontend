const regXHeader = /(?<flag>#{1,6})\s+(?<content>.+)/g

export const getHeadingsFromMarkdown = (postMD: string) =>
  Array.from(postMD.matchAll(regXHeader)).map(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ({ groups: { flag, content } }: any) => ({
      heading: `h${flag.length}`,
      content
    })
    // eslint-disable-next-line prettier/prettier
  ) as {
    heading: string
    content: string
  }[]

export const getSlugByTitle = (title: string) => {
  return title
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/_/g, '')
}
