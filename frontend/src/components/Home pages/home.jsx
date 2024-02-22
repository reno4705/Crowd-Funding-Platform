import Nav from "../navbar/navbar";
import Carousel from "../carousel/carousel"
import Homecontent from "../home-content/homecontent"
import Groupcard from "../groupcard/groupcard";
import Footer from "../footer/footer";

function Home() {
  return (
    <div className="home-before">
      <Nav />
      <Carousel />
      <Homecontent />
      <Groupcard />
      <Footer />
    </div>
  );
}

export default Home;