import GrainOverlay from './components/GrainOverlay'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Pledge from './components/Pledge'
import Problem from './components/Problem'
import Atmosphere from './components/Atmosphere'
import HowItWorks from './components/HowItWorks'
import Marketplace from './components/Marketplace'
import Waitlist from './components/Waitlist'
import Footer from './components/Footer'
import { Analytics } from "@vercel/analytics/next"

export default function App() {
  return (
    <>
      <GrainOverlay />
      <Nav />
      <Hero />
      <Pledge />
      <Problem />
      <Atmosphere />
      <HowItWorks />
      <Marketplace />
      <Waitlist />
      <Footer />
    </>
  )
}
