import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import AboutPage from './pages/AboutPage'
import BookingPage from './pages/BookingPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import PricesPage from './pages/PricesPage'
import ServicesPage from './pages/ServicesPage'
import ThalgoPage from './pages/ThalgoPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rolam" element={<AboutPage />} />
          <Route path="/kezelesek" element={<ServicesPage />} />
          <Route path="/thalgo" element={<ThalgoPage />} />
          <Route path="/arak" element={<PricesPage />} />
          <Route path="/kapcsolat" element={<ContactPage />} />
          <Route path="/idopontfoglalas" element={<BookingPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
