import React from 'react'
import Link from 'next/link'

import * as S from './styles'

interface IExternalLinkProps {
  onClick?: React.MouseEventHandler;
  hrefNext?: string;
  hrefLink?: string;
  text: string;
}

const ExternalLink = ({
  onClick,
  hrefNext,
  hrefLink,
  text
}: IExternalLinkProps) => {
  return (
    <>
      {hrefNext ? (
        <Link href={hrefNext}>
          <S.Link onClick={onClick}>
            <span>{text}</span>
            <svg
              width="17"
              height="17"
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
          </S.Link>
        </Link>
      ) : (
        <S.Link
          onClick={onClick}
          href={hrefLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>{text}</span>
          <svg
            width="17"
            height="17"
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
        </S.Link>
      )}
    </>
  )
}

export default ExternalLink
