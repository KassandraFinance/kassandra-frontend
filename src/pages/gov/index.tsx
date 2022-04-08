import NotFound from '../../templates/404'
import Gov from '../../templates/Gov'

export default function Index() {
  return process.env.NEXT_PUBLIC_VOTE === '2' ? <Gov /> : <NotFound />
}
