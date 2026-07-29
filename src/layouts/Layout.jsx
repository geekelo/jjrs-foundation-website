import { Outlet } from 'react-router-dom'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import StopBubbleEvents from '../components/StopBubbleEvents'

export default function Layout() {
  return (
    <div className="page">
      <StopBubbleEvents />
      <TopBar />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
