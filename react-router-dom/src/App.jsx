import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import NotFoundPage from './pages/NotFoundPage'
import TeamAbout from './pages/TeamAbout'
import CompanyAbout from './pages/CompanyAbout'
import ProductDetails from './pages/ProductDetails'

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path='team' element={<TeamAbout/>}/>
          <Route path='company' element={<CompanyAbout/>}/>
        </Route>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/product-details/:id" element={<ProductDetails/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </div>
  )
}

export default App
