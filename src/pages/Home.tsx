import Navbar from "../components/layout/files/Navbar"
import Footer from "../components/layout/files/Footer"
import HeroBanner from "../components/HeroBanner/files/HeroBanner"
import ProductSection from "../components/product/files/ProductSection"


function Home() {
  return (
    <div>
        <Navbar/>
        <HeroBanner/>
        <ProductSection/>
        <Footer/>
    </div>
  )
}

export default Home