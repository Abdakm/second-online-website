import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import ScrollToTop from './ScrollToTop'

export default function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  const [theme, setTheme] = useState('light')

  useEffect(() => {
    if(theme === 'dark'){
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className='max-w-screen-2xl mx-auto select-none'>
      <Home />
    </div>
  );
}
