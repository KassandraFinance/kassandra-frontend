import Profile from '../../templates/Profile'
import NotFound from '../../templates/404'

export default function Index() {
  return process.env.NEXT_PUBLIC_VOTE === '1' ||
    process.env.NEXT_PUBLIC_VOTE === '2' ? (
    <Profile />
  ) : (
    <NotFound />
  )
}
