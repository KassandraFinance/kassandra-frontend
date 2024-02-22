import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 0,
  enableTracing: false,
  debug: false,
  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0.3,
  maxValueLength: 5000,

  integrations: [
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: true
    })
  ]
})
