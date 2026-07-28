import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import HomePage from './pages/HomePage'
import GetInvolvedPage from './pages/GetInvolvedPage'
import CareersPage from './pages/CareersPage'
import TeamPage from './pages/TeamPage'
import JournalPage from './pages/JournalPage'
import SitemapPage from './pages/SitemapPage'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="get-involved" element={<GetInvolvedPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="careers" element={<CareersPage />} />
          <Route path="journal" element={<JournalPage />} />
          <Route path="sitemap" element={<SitemapPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
