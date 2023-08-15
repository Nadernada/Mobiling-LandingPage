import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Info from './components/Info'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'

function App() {

  return (
    <div className='bg-blue-400 mx-auto'>
    <Navbar />
    <Hero />
    <Info />
    <AboutUs />
    <Footer />
    </div>
  )
}

export default App
