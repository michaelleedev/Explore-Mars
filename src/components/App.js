import "../styles/index.css";
import Navbar from './NavbarComponent.js'
import Carousel from './Carousel.js'
import Description from './HomeDescription.js'
import Newsletter from './Newsletter.js'


function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Description />
      <Newsletter />
    </div>
  );
}

export default App;
