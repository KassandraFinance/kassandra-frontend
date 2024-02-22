import { NextPage } from 'next'
import Error, { ErrorProps } from 'next/error'

import * as Sentry from '@sentry/nextjs'

const CustomErrorComponent: NextPage<ErrorProps> = props => {
  return <Error statusCode={props.statusCode} />
}

CustomErrorComponent.getInitialProps = async contextData => {
  await Sentry.captureUnderscoreErrorException(contextData)

  return Error.getInitialProps(contextData)
}

export default CustomErrorComponent
