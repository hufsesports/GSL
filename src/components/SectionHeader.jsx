import React from 'react'
import { palette } from '../App'

export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-8 md:mb-10">
      <div className="mb-3 text-xs font-semibold uppercase tracking-[0.28em]" style={{ color: palette.secondaryBrown }}>
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl" style={{ color: palette.secondaryDark }}>
        {title}
      </h2>
      <p className="mt-3 max-w-2xl text-sm md:text-base" style={{ color: palette.secondaryGray }}>
        {subtitle}
      </p>
    </div>
  )
}
