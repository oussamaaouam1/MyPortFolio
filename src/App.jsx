import ContactUs from "./components/contactus/ContactUs"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import HeroSection from "./components/herosection/HeroSection"
import MainContent from "./components/maincontent/MainContent"

function App() {


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
      <a href="#top" className="top">
        <button className="icon-keyboard_arrow_up scroll2top"></button>
      </a>
    </div>
  );
}

export default App
