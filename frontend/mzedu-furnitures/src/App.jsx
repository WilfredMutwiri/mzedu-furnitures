import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import {BannerComponent } from './components/Banner'
import { FooterComp } from './components/Footer'
import Signup from './components/signup'
import Signin from './components/signin'
import Dashboard from './Dashboard/admiDashboard'
import FeaturedProducts from './pages/FeaturedProducts'

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
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/featuredProducts' element={<FeaturedProducts/>}/>
  </Routes>
  <FooterComp/>
</Router>
    </>
  )
}

export default App
