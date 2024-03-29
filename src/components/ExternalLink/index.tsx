import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useMatomo from '@/hooks/useMatomo'

import * as S from './styles'

interface IExternalLinkProps {
  onClick?: React.MouseEventHandler
  hrefNext?: string
  hrefLink?: string
  text: string
}

const ExternalLink = ({
  onClick,
  hrefNext,
  hrefLink,
  text
}: IExternalLinkProps) => {
  const { trackEvent } = useMatomo()
  const router = useRouter()

  return (
    <>
      {hrefNext ? (
        <Link href={hrefNext}>
          <S.Link
            onClick={() => {
              onClick
              trackEvent({
                category: router.pathname,
                action: `click-on-link | ExternalLink-${hrefNext} | ${router.pathname}`,
                name: text
              })
            }}
          >
            <span>{text}</span>
            <span className="icon">
              <svg
                width="14"
                height="14"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.5 16C12.6421 16 16 12.6421 16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 12.6421 4.35786 16 8.5 16Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.5 11.5L11.5 8.5L8.5 5.5"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.5 8.5H11.5"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </S.Link>
        </Link>
      ) : (
        <S.Link
          onClick={() => {
            onClick
            trackEvent({
              category: router.pathname,
              action: `click-on-link | ExternalLink-${hrefLink} | ${router.pathname}`,
              name: text
            })
          }}
          href={hrefLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>{text}</span>
          <span className="icon">
            <svg
              width="14"
              height="14"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.5 16C12.6421 16 16 12.6421 16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 12.6421 4.35786 16 8.5 16Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.5 11.5L11.5 8.5L8.5 5.5"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.5 8.5H11.5"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </S.Link>
      )}
    </>
  )
}

export default ExternalLink
