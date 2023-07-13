import Authors from '@/components/Authors'
import ArticleCard from '@/components/Blog/ArticleCard'
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
      <div style={{ width: '350px' }}>
        <ArticleCard
          post={{
            banner: {
              alternativeText: 'A',
              url: 'https://github.com/nicholascostadev.png'
            },
            highlighted: false,
            id: 'test',
            isPRO: false,
            publishedAt: '2021-08-01T00:00:00.000Z',
            readingDifficulty: {
              difficultyName: 'Easy'
            },
            readTimeInMinutes: 1,
            slug: 'test',
            title: 'Test',
            writers: [
              {
                id: 'nicholas',
                name: 'Nicholas',
                profilePicture: {
                  url: 'https://github.com/nicholascostadev.png',
                  alternativeText: 'testing'
                }
              }
            ],
            summary: 'dasdasdasdasda',
            tags: [{ name: 'Testing' }]
          }}
        />
      </div>
    </div>
  )
}

export default Blog
