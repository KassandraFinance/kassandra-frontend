import { useRouter } from 'next/router'

export default function Index() {
  const router = useRouter()
  const { proposal } = router.query
  return <h1>proposal ID {proposal}</h1>
}
