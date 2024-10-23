import HeroSection from '../sections/home/HeroSection'
import ClientsInformation from '../sections/home/ClientsInformation'
import Vision from '../sections/home/Vision'
import Design from '../sections/home/Design'
import Pricing from '../sections/home/Pricing'
import Background from '../sections/home/Background'
import Experince from '../sections/home/Experince'
import Question from '../sections/home/Question'
import Footer from '../sections/home/Footer'
import Navbar from '../components/Navbar'
import ScrollToTop from '../ScrollToTop'

const Home = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <div>
        <HeroSection />
        <ClientsInformation />
        <Design />
        <Vision />
        <Pricing />
        <Background />
        <Experince />
        <Question />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
