import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import {BannerComponent } from './components/Banner'
import { FooterComp } from './components/Footer'

function App() {

  return (
    <>
<Router>
  <BannerComponent/>
  <NavBar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
  </Routes>
  <FooterComp/>
</Router>
    </>
  )
}

export default App
