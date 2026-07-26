import Hero from '../components/Hero'
import FeatureGrid from '../components/FeatureGrid'
import PrayerBanner from '../components/PrayerBanner'
import StatsBar from '../components/StatsBar'
import Newsletter from '../components/Newsletter'

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureGrid />
      <PrayerBanner />
      <StatsBar />
      <Newsletter />
    </>
  )
}
