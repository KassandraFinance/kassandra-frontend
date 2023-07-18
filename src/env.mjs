import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  client: {
    NEXT_PUBLIC_MASTER: z.string().default('0'),
    NEXT_PUBLIC_GIT_HUB_TOKEN: z.string(),
    NEXT_PUBLIC_NODE_ENV: z.string().default('development'),
    NEXT_PUBLIC_CLARITY: z.string().default('')
  },
  server: {
    NODE_ENV: z.string().default('development'),
    BREVO_API_KEY: z.string().nonempty(),
    BREVO_ID: z.string().nonempty(),
    STRAPI_API_KEY: z.string().nonempty(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_GIT_HUB_TOKEN: process.env.NEXT_PUBLIC_GIT_HUB_TOKEN,
    NEXT_PUBLIC_MASTER: process.env.NEXT_PUBLIC_MASTER,
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_NODE_ENV: process.env.NEXT_PUBLIC_NODE_ENV,
    NEXT_PUBLIC_CLARITY: process.env.NEXT_PUBLIC_CLARITY,
    BREVO_API_KEY: process.env.BREVO_API_KEY,
    BREVO_ID: process.env.BREVO_ID,
    STRAPI_API_KEY: process.env.STRAPI_API_KEY
  }
})
