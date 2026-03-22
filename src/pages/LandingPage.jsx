import React from 'react'
import { Link } from 'react-router-dom'
import { logoBlocks, palette } from '../App'

export default function LandingPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="h-full w-full" style={{ background: 'linear-gradient(135deg, rgba(0,45,86,0.97) 0%, rgba(0,45,86,0.94) 22%, rgba(20,110,122,0.86) 62%, rgba(20,110,122,0.40) 100%)' }} />
          <div className="absolute inset-0 opacity-[0.16]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)', backgroundSize: '86px 86px' }} />
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 14% 18%, rgba(255,255,255,0.26) 0, transparent 24%), radial-gradient(circle at 82% 18%, rgba(255,255,255,0.16) 0, transparent 22%), radial-gradient(circle at 78% 78%, rgba(255,255,255,0.14) 0, transparent 26%)' }} />
        </div>

        <div className="absolute right-6 top-6 hidden rounded-2xl border px-4 py-2 text-xs font-medium text-white/80 lg:block" style={{ borderColor: 'rgba(255,255,255,0.20)', backgroundColor: 'rgba(255,255,255,0.08)' }}>
          Background Video Placeholder
        </div>

        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-6 py-20 lg:px-10">
          <div className="grid w-full gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="max-w-4xl">
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <div className="inline-flex rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-white/78" style={{ borderColor: 'rgba(255,255,255,0.22)' }}>
                  Global Sports Leadership Programme
                </div>
                <div className="inline-flex rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-white/60" style={{ borderColor: 'rgba(255,255,255,0.14)', backgroundColor: 'rgba(255,255,255,0.04)' }}>
                  International Governance · Leadership · Network
                </div>
              </div>
              <h1 className="text-5xl font-semibold leading-[1.02] tracking-[-0.03em] text-white md:text-7xl xl:text-[5.5rem]">
                Global Sports
                <br />
                Leadership Programme
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/78 md:text-2xl">
                Value Proposition: Education / Network / Career
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/programme" className="rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:opacity-90" style={{ backgroundColor: palette.primary }}>
                  프로그램 보기
                </Link>
                <Link to="/about" className="rounded-full border px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-white/10" style={{ borderColor: 'rgba(255,255,255,0.28)' }}>
                  GSL 소개
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="ml-auto overflow-hidden rounded-[2rem] border backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/10" style={{ borderColor: 'rgba(255,255,255,0.16)', backgroundColor: 'rgba(255,255,255,0.08)' }}>
                <div className="border-b px-6 py-5" style={{ borderColor: 'rgba(255,255,255,0.10)' }}>
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-white/55">Leadership Focus</div>
                </div>
                <div>
                  {[["Education", "Academic Foundation"], ["Network", "Global Connections"], ["Career", "Leadership Pathway"]].map(([title, sub], idx) => (
                    <div key={title} className="flex items-center justify-between border-b px-6 py-5 last:border-b-0 transition duration-300 hover:bg-white/5" style={{ borderColor: 'rgba(255,255,255,0.10)' }}>
                      <div>
                        <div className="text-base font-semibold text-white">{title}</div>
                        <div className="mt-1 text-sm text-white/58">{sub}</div>
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full text-xs font-semibold text-white/70 transition duration-300" style={{ backgroundColor: idx === 1 ? 'rgba(20,110,122,0.38)' : 'rgba(255,255,255,0.08)' }}>
                        0{idx + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b px-6 py-8 lg:px-10" style={{ backgroundColor: palette.primarySoft, borderColor: 'rgba(157,159,162,0.12)' }}>
        <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="text-sm font-medium" style={{ color: palette.secondaryDark }}>
            Logo placeholders
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
            {logoBlocks.map((item) => (
              <div key={item} className="flex h-16 w-28 items-center justify-center rounded-2xl border bg-white text-sm font-semibold tracking-[0.16em]" style={{ borderColor: 'rgba(157,159,162,0.16)', color: palette.secondaryGray }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
