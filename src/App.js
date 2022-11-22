import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Error from './pages/error/Error'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import About from './pages/About/About'
import HouseSheet from './pages/HouseSheet/HouseSheet'

function App() {
  document.title = 'Kasa - Location de maison et appartements'
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sheet/:id" element={<HouseSheet />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
