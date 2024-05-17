import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import {BannerComponent } from './components/Banner'

function App() {

  return (
    <>
<Router>
  <BannerComponent/>
  <NavBar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
  </Routes>
</Router>
    </>
  )
}

export default App
