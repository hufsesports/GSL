import React from 'react'
import { palette } from '../App'

export default function PlaceholderCard({ title, desc, tall = false }) {
  return (
    <div className="group rounded-[2rem] border bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg" style={{ borderColor: 'rgba(157,159,162,0.16)' }}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-base font-semibold" style={{ color: palette.secondaryDark }}>
            {title}
          </div>
          <div className="mt-2 text-sm" style={{ color: palette.secondaryGray }}>
            {desc}
          </div>
        </div>
        <div className="h-10 w-10 rounded-2xl transition duration-300 group-hover:scale-105" style={{ background: 'linear-gradient(135deg, rgba(20,110,122,0.16), rgba(0,45,86,0.08))' }} />
      </div>
      <div className={`mt-6 rounded-[1.25rem] transition duration-300 group-hover:opacity-90 ${tall ? 'h-40' : 'h-24'}`} style={{ backgroundColor: 'rgba(218,218,211,0.7)' }} />
    </div>
  )
}
