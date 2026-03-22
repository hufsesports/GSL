import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutPage'
import ProgrammePage from './pages/ProgrammePage'
import ApplyPage from './pages/ApplyPage'
import CommunityPage from './pages/CommunityPage'
import AlumniPage from './pages/AlumniPage'

export const palette = {
  primary: 'rgb(20,110,122)',
  primarySoft: 'rgb(218,218,211)',
  secondaryDark: 'rgb(0,45,86)',
  secondaryBrown: 'rgb(141,113,80)',
  secondaryGray: 'rgb(157,159,162)',
}

export const menu = [
  { label: 'GSL 소개', href: '/about' },
  { label: '교육과정', href: '/programme' },
  { label: '모집안내', href: '/apply' },
  { label: '커뮤니티', href: '/community' },
  { label: '동문 네트워크', href: '/alumni' },
]

export const logoBlocks = ['HUFS', 'IOC', 'IF', 'NOC', 'PARTNER']

export default function App() {
  return (
    <div className="min-h-screen bg-white" style={{ color: palette.secondaryDark }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/programme" element={<ProgrammePage />} />
        <Route path="/apply" element={<ApplyPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/alumni" element={<AlumniPage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
      <Footer />
    </div>
  )
}
