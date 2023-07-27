import React from 'react'

type UseSectionTitleObserverProps = {
  itemIds: string[]
  heading: 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6'
}

export const useSectionTitleObserver = ({
  itemIds,
  heading
}: UseSectionTitleObserverProps) => {
  const [activeId, setActiveId] = React.useState<string | null>(null)

  React.useEffect(() => {
    if (typeof window === 'undefined') return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.target.nodeName === heading) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: `0% 0% -80% 0%` }
    )
    itemIds.forEach(id => {
      if (document.getElementById(id) !== null)
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, prettier/prettier
        observer.observe(document.getElementById(id)!)
    })
    return () => {
      itemIds.forEach(id => {
        if (document.getElementById(id) !== null)
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          observer.unobserve(document.getElementById(id)!)
      })
    }
  }, [itemIds, heading])

  return activeId
}
