import TopBar from './components/TopBar'
import Header from './components/Header'
import Hero from './components/Hero'
import FeatureGrid from './components/FeatureGrid'
import PrayerBanner from './components/PrayerBanner'
import StatsBar from './components/StatsBar'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="page">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <FeatureGrid />
        <PrayerBanner />
        <StatsBar />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default App
