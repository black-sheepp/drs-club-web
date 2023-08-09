import Image from 'next/image'
import Nav from './Components/Nav'
import Cover from './Components/Cover'
import Facility from './Components/Facility'
import Contact from './Components/Contact'
// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
import AboutUs from './Components/AboutUs'
import Schedule from './Components/Schedule'
import Membership from './Components/Membership'
config.autoAddCss = false; 

export default function Home() {
  return (
    <>
    <Nav/>
    <Cover/>
    <Facility/>
    <Membership/>
    <Schedule/>
    <Contact/>
    <AboutUs/>
    </>
  )
}
