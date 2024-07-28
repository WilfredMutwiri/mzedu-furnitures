import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import {BannerComponent } from './components/Banner'
import { FooterComp } from './components/Footer'
import Signup from './components/signup'
import Signin from './components/signin'

function App() {

  return (
    <>
<Router>
  <BannerComponent/>
  <NavBar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/signin' element={<Signin/>}/>
  </Routes>
  <FooterComp/>
</Router>
    </>
  )
}

export default App
