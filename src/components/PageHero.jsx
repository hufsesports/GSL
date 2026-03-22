import React from 'react'

export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="relative overflow-hidden border-b" style={{ borderColor: 'rgba(157,159,162,0.12)' }}>
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0,45,86,0.96) 0%, rgba(20,110,122,0.86) 100%)' }} />
      <div
        className="absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.16) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 md:py-24">
        <div className="mb-4 inline-flex rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-white/72" style={{ borderColor: 'rgba(255,255,255,0.18)' }}>
          {eyebrow}
        </div>
        <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-sm text-white/72 md:text-lg">{subtitle}</p>
      </div>
    </section>
  )
}
