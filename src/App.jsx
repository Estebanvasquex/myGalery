import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileContainer from './components/common/avatar/profileContainer'
import ButtonSocialNetworksContainer from './components/common/buttonSocialNetworks/ButtonSocialNetworksContainer'

import Galery from './components/pages/galery/Galery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Galery/>

    </>
  )
}

export default App
