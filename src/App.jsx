import { useEffect,useState } from "react"
import ContactUs from "./components/contactus/ContactUs"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import HeroSection from "./components/herosection/HeroSection"
import MainContent from "./components/maincontent/MainContent"

function App() {
  const [scrollbtn, setscrollbtn] = useState(false) //control display of scroll to the top btn 

useEffect(() => {
  window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    setscrollbtn(true)
  }else{
    setscrollbtn(false)
  }
})},) //


  return (
    <div id="top" className="container">
      <Header />
      <div className="Secdivider" />
      <HeroSection />
      <div className="Secdivider" />
      <MainContent />
      <div className="Secdivider" />
      <ContactUs />
      <div className="Secdivider" />
      <Footer />
      {scrollbtn &&<a href="#top" className="top">
        <button className="icon-keyboard_arrow_up scroll2top"></button>
      </a>}

    </div>
  );
}

export default App
