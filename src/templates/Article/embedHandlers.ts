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

export const handleParseKassandraPoolLink = (link: string) => {
  const prefix = 'https://app.kassandra.finance/pool/'
  const suffix = '?card='

  const path = link.slice(prefix.length)
  const indexCard = path.indexOf(suffix)

  if (indexCard !== -1) {
    const cardText = path.slice(indexCard + suffix.length)

    return {
      cardText,
      link: prefix + path.slice(0, indexCard)
    }
  }
}

export const isTwitterUrl = (link: string) =>
  link.startsWith('https://twitter.com/')

export const isYoutubeUrl = (link: string) =>
  link.startsWith('https://www.youtube.com/') ||
  link.startsWith('https://youtu.be/')
