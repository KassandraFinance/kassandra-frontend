import Authors from '@/components/Authors'
import { Tag } from '@/components/Blog/Tag'
import IconButton from '@/components/IconButton'
import { DiscordIcon } from '@/Icons'

const Blog = () => {
  return (
    <div>
      <p>Template do blog</p>
      <Tag variant="primary" shape="rounded" size="medium">
        Tag
      </Tag>
      <IconButton icon={<DiscordIcon />} />
      <div style={{ width: '350px' }}>
        <Authors
          writers={[
            {
              biography: 'asdas',
              id: 'test',
              name: 'Heimdall',
              profilePicture: {
                url: 'https://github.com/nicholascostadev.png'
              },
              socials: [
                {
                  link: 'https://github.com/nicholascosta04',
                  type: 'TWITTER',
                  username: 'nicholascosta04'
                },
                {
                  link: 'https://twitter.com/nicholascostadev',
                  type: 'GITHUB',
                  username: 'nicholascostadev'
                }
              ]
            }
          ]}
        />
      </div>
    </div>
  )
}

export default Blog
