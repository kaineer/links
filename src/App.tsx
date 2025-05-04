import './App.css'
import { linkPage } from "../package.json"
import { LinkPage } from './pages/LinkPage';
import avatarUrl from './assets/avatar.jpg'

function App() {
  const { profile, links,  icons } = linkPage;

  profile.url = avatarUrl;

  return (
    <LinkPage
      profile={ profile }
      links={ links }
      icons={ icons }
    />
  )
}

export default App
