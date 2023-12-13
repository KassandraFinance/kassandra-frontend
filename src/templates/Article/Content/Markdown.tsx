import { memo } from 'react'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { TwitterEmbed, YouTubeEmbed } from 'react-social-media-embed'

import { ImageModalTrigger } from '../ImageModal'
import { HandleSelectImageProps } from '..'
import {
  getEmbedLink,
  handleParseKassandraPoolLink,
  isTwitterUrl,
  isYoutubeUrl
} from '../embedHandlers'

import Card from '@/components/Card'

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
          a: ({ ...props }) => {
            if (props?.href) {
              const value = handleParseKassandraPoolLink(props.href)

              if (value) {
                return (
                  <Card
                    href={value.link}
                    buttonText={(props?.children[0] as string) ?? 'Access Now'}
                    title={
                      value.cardText ||
                      'Insights from a Crypto Portfolios Managers'
                    }
                  />
                )
              }
            }

            return <a target="_blank" {...props} />
          },
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
