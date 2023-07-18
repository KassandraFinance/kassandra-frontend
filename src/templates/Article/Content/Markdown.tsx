import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { ImageModalTrigger } from '../ImageModal'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import { HandleSelectImageProps } from '..'
import { getEmbedLink, isTwitterUrl, isYoutubeUrl } from '../embedHandlers'
import { TwitterEmbed, YouTubeEmbed } from 'react-social-media-embed'
import { memo } from 'react'

type MarkdownProps = {
  content: string
  handleSelectImage: ({ event, imageData }: HandleSelectImageProps) => void
}

export const MarkdownContent = memo(
  ({ content, handleSelectImage }: MarkdownProps) => {
    return (
      <ReactMarkdown
        rehypePlugins={[rehypeRaw, rehypeSlug]}
        components={{
          a: ({ ...props }) => <a target="_blank" {...props} />,
          blockquote: ({ children, ...props }) => (
            <span className="content-quote" {...props}>
              {children}
            </span>
          ),
          img: ({ ...props }) => (
            <ImageModalTrigger
              tabIndex={0}
              onClick={event =>
                handleSelectImage({
                  event,
                  imageData: {
                    // eslint-disable-next-line react/prop-types
                    url: props?.src,
                    // eslint-disable-next-line react/prop-types
                    alt: props?.alt
                  }
                })
              }
            >
              <img {...props} tabIndex={-1} />
            </ImageModalTrigger>
          ),
          p: ({ ...props }) => {
            const embedLink = getEmbedLink(props)
            if (embedLink) {
              if (isTwitterUrl(embedLink)) {
                return <TwitterEmbed url={embedLink} width="100%" />
              }

              if (isYoutubeUrl(embedLink)) {
                return <YouTubeEmbed url={embedLink} width="100%" />
              }

              return <p {...props}></p>
            }
            return <p {...props}></p>
          }
        }}
      >
        {content}
      </ReactMarkdown>
    )
  },
  (prevProps, nextProps) => {
    return prevProps.content === nextProps.content
  }
)

MarkdownContent.displayName = 'Markdown'
