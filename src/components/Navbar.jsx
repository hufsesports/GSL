import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { menu, palette } from '../App'

export default function Navbar() {
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md" style={{ borderColor: 'rgba(157,159,162,0.14)' }}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl text-sm font-bold text-white shadow-sm transition duration-300 group-hover:scale-[1.03]" style={{ backgroundColor: palette.primary }}>
            GSL
          </div>
          <div>
            <div className="text-sm font-semibold tracking-[0.18em]" style={{ color: palette.secondaryDark }}>
              GLOBAL SPORTS LEADERSHIP
            </div>
            <div className="text-xs" style={{ color: palette.secondaryGray }}>
              Programme
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {menu.map((item) => {
            const active = location.pathname === item.href
            return (
              <Link
                key={item.href}
                to={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium transition duration-300"
                style={{
                  color: active ? 'white' : palette.secondaryDark,
                  backgroundColor: active ? palette.secondaryDark : 'transparent',
                  boxShadow: active ? '0 8px 24px rgba(0,45,86,0.16)' : 'none',
                }}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <Link
          to="/apply"
          className="rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
          style={{ backgroundColor: palette.primary }}
        >
          지원하기
        </Link>
      </div>
    </header>
  )
}
