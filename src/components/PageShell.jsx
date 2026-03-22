import React from 'react'
import PageHero from './PageHero'

export default function PageShell({ eyebrow, title, subtitle, children, soft = false }) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div className="px-6 py-24 lg:px-10" style={{ backgroundColor: soft ? 'rgba(218,218,211,0.32)' : 'white' }}>
        <div className="mx-auto max-w-7xl">{children}</div>
      </div>
    </>
  )
}
