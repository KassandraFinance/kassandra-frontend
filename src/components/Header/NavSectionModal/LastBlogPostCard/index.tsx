import React from 'react'
import Link from 'next/link'

import { useLastBlogPost } from '@/hooks/query/useLastBlogPost'

import Button from '@/components/Button'

import * as S from './styles'
import { ButtonsWrapper } from '../../styles'

interface ILastBlogPostCardProps {
  onClick?: () => void
}
const LastBlogPostCard = ({ onClick }: ILastBlogPostCardProps) => {
  const { data } = useLastBlogPost()

  return (
    <S.CardBlogPost>
      <p>See our latest blog posts.</p>
      <ButtonsWrapper>
        <Link href={`/blog/${data?.attributes?.slug ?? ''}`} passHref>
          <Button
            as="a"
            backgroundBlack
            text="Access Post"
            className="button-mobile"
            onClick={onClick}
          />
        </Link>
      </ButtonsWrapper>
    </S.CardBlogPost>
  )
}

export default LastBlogPostCard
