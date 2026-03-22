import React from 'react'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'
import SectionHeader from '../components/SectionHeader'
import PlaceholderCard from '../components/PlaceholderCard'
import { palette } from '../App'

export default function ApplyPage() {
  return (
    <PageShell eyebrow="Apply" title="모집안내" subtitle="지원 흐름과 CTA가 한눈에 보이도록 구성한 페이지입니다.">
      <div className="grid gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
        <div>
          <SectionHeader eyebrow="Apply" title="모집안내" subtitle="지원 흐름과 CTA가 한눈에 보이도록 구성한 페이지입니다." />
          <div className="rounded-[2rem] p-8 md:p-10" style={{ backgroundColor: palette.secondaryDark }}>
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-white/60">Application CTA</div>
            <div className="mt-4 text-2xl font-semibold text-white md:text-3xl">지원 폼 영역</div>
            <div className="mt-6 space-y-3">
              <div className="h-3 w-4/5 rounded-full bg-white/10" />
              <div className="h-3 w-3/5 rounded-full bg-white/10" />
            </div>
            <Link to="/apply" className="mt-8 inline-flex rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90" style={{ backgroundColor: palette.primary }}>
              지원하기
            </Link>
          </div>
        </div>

        <div className="space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <PlaceholderCard title="모집 공고" desc="안내" />
            <PlaceholderCard title="지원 자격" desc="대상" />
            <PlaceholderCard title="선발 절차" desc="프로세스" />
            <PlaceholderCard title="교육비 및 장학" desc="비용" />
          </div>

          <div className="rounded-[2rem] border bg-white p-8" style={{ borderColor: 'rgba(157,159,162,0.16)' }}>
            <div className="text-xs font-semibold uppercase tracking-[0.24em]" style={{ color: palette.secondaryBrown }}>Application Process</div>
            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {['공고', '지원', '심사', '선발'].map((step, idx) => (
                <div key={step} className="rounded-[1.5rem] p-5 text-center" style={{ backgroundColor: idx === 1 ? 'rgba(20,110,122,0.14)' : 'rgba(218,218,211,0.28)' }}>
                  <div className="text-xs font-semibold tracking-[0.24em]" style={{ color: palette.secondaryBrown }}>0{idx + 1}</div>
                  <div className="mt-3 text-sm font-semibold" style={{ color: palette.secondaryDark }}>{step}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  )
}
