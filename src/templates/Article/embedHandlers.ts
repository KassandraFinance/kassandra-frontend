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
  const domain = 'https://app.kassandra.finance/pool/'
  const query = '?card='

  const path = link.slice(domain.length)
  const indexCard = path.indexOf(query)

  if (indexCard !== -1) {
    const cardText = path.slice(indexCard + query.length)

    return {
      cardText,
      link: query + path.slice(0, indexCard)
    }
  }
}

export const isTwitterUrl = (link: string) =>
  link.startsWith('https://twitter.com/')

export const isYoutubeUrl = (link: string) =>
  link.startsWith('https://www.youtube.com/') ||
  link.startsWith('https://youtu.be/')
