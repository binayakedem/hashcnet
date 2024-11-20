import Aos from "aos"
import { useState ,useEffect} from "react"
import { BrowserRouter ,Route, Routes} from "react-router-dom"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import About from "./Pages/Aboutpage"
import Contact from "./Components/Contact"
import Aaacrm from "./Components/Aaacrm"
import Home from './Pages/Home'
import Offerpage from "./Pages/Offerpage"
import Mission from './Pages/Missionpage'
import Secondarynav from "./Components/Secondarynav"
import 'aos/dist/aos.css'
import { FaLevelUpAlt } from "react-icons/fa";
Aos.init();
function App() {
  const [showButton, setShowButton] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
        setScrolling(true);
      } else {
        setShowButton(false);
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <BrowserRouter>
    <Secondarynav/>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/offer' element={<Offerpage/>}/>
      <Route path='/mission' element={<Mission/>}/>
      <Route path='/aaacrm' element={<Aaacrm/>}/>
     </Routes>
     <button
          onClick={scrollToTop}
          className={`fixed right-4 bottom-4 p-4 rounded-full bg-[#162171] text-white transition-all duration-300 ${scrolling ? 'translate-y-0' : '-translate-y-full'} ${showButton ? 'opacity-100' : 'opacity-0'}`}
        >
          <FaLevelUpAlt  />
        </button>
     <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
