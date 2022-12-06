import IndexPage from 'components/IndexPage'
import { usePreview } from 'lib/sanity.preview'
import {
  type Leistung,
  type Post,
  type Settings,
  indexQuery,
  leistungenQuery,
  settingsQuery,
} from 'lib/sanity.queries'

export default function PreviewIndexPage({ token }: { token: null | string }) {
  const posts: Post[] = usePreview(token, indexQuery) || []
  const leistungen: Leistung[] = usePreview(token, leistungenQuery) || []
  const settings: Settings = usePreview(token, settingsQuery) || {}

  return (
    <IndexPage
      preview
      posts={posts}
      leistungen={leistungen}
      settings={settings}
    />
  )
}
