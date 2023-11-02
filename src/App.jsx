import Aboutme from './Component/Aboutme'
import Footer from './Component/Footer'
import Hello from './Component/Hello'
import Navbar from './Component/Navbar'
import Worksandproject from './Component/Worksandproject'
import './App.css'
import Contact from './Component/Contact'
import Technologyandskills from './Component/Technologyandskills'
import ScrollAnimation from './Component/ScrollAnimation'



function App() {
  return (
   <>
   <Navbar />
   <br />
   <br />
   <br />
   <Hello/>
   <br />
   <br />
   <br />
   <Aboutme/>
   <br />
   <br />
   <br />
   <Worksandproject/>
   <Technologyandskills/>
   <Contact/>
   <Footer/>
   {/* <ScrollAnimation /> */}
   </>
  )
}

export default App
