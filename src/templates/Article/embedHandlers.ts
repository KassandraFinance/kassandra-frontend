export const getEmbedLink = (props: Record<string, unknown>) => {
  if (!props) return

  if (
    'children' in props &&
    Array.isArray(props.children) &&
    typeof props.children[0] === 'string'
  ) {
    return props.children[0]
  }

  return
}

export const isTwitterUrl = (link: string) =>
  link.startsWith('https://twitter.com/')

export const isYoutubeUrl = (link: string) =>
  link.startsWith('https://www.youtube.com/') ||
  link.startsWith('https://youtu.be/')
