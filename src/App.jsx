import NavigationBar from "./pages/Navbar/Navbar"
import Hero from "./pages/Hero/Hero"
import Contact from './pages/Contact/Contact'
import Portfolio from './pages/ProjectSection/Portfolio'
import Aboutme from '/src/pages/Aboutme/Aboutme'
import Footer from './pages/Footer/Footer'

function App() {
  return (
    <body>
      <NavigationBar/>
      <Hero/>
      <Aboutme/>
      <Portfolio/>
      <Contact/>
      <Footer/>
   </body>
  )
}

export default App
