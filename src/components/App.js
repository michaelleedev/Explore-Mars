import "../styles/index.css";
import Navbar from './NavbarComponent.js'
import Carousel from './Carousel.js'
import Description from './HomeDescription.js'
import Newsletter from './Newsletter.js'
import Footer from './Footer.js'


function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Description />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
