import React from 'react'
import { Link } from 'react-router-dom'
import { menu, palette } from '../App'

export default function Footer() {
  return (
    <footer className="border-t px-6 py-10 lg:px-10" style={{ borderColor: 'rgba(157,159,162,0.16)', backgroundColor: 'white' }}>
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-sm font-semibold tracking-[0.16em]" style={{ color: palette.secondaryDark }}>
            GSL
          </div>
          <div className="mt-2 text-sm" style={{ color: palette.secondaryGray }}>
            Global Sports Leadership Programme
          </div>
        </div>
        <div className="flex flex-wrap gap-3 text-sm" style={{ color: palette.secondaryGray }}>
          {menu.map((item) => (
            <Link key={item.href} to={item.href} className="rounded-full px-3 py-1.5 transition duration-300 hover:bg-black/5">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
