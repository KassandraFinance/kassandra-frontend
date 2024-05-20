import type { SvgProps } from '.'

export const ForumIcon = (props: SvgProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="32"
      width="32"
      {...props}
    >
      <path d="M17 12V3a1 1 0 00-1-1H3a1 1 0 00-1 1v14l4-4h10a1 1 0 001-1m4-6h-2v9H6v2a1 1 0 001 1h11l4 4V7a1 1 0 00-1-1z" />
    </svg>
  )
}