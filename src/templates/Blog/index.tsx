import { Tag } from '@/components/Blog/Tag'
import IconButton from '@/components/IconButton'
import { DiscordIcon } from '@/components/Icons/Discord'

const Blog = () => {
  return (
    <div>
      <p>Template do blog</p>
      <Tag variant="primary" shape="rounded" size="medium">
        Tag
      </Tag>
      <IconButton icon={<DiscordIcon />} />
    </div>
  )
}

export default Blog
