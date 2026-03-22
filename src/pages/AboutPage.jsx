import React from 'react'
import PageShell from '../components/PageShell'
import SectionHeader from '../components/SectionHeader'
import PlaceholderCard from '../components/PlaceholderCard'
import { logoBlocks, palette } from '../App'

export default function AboutPage() {
  return (
    <PageShell eyebrow="About" title="GSL 소개" subtitle="소개, 운영기관, 구성원을 중심으로 프로그램의 정체성을 간결하게 보여주는 페이지입니다.">
      <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <div>
          <SectionHeader eyebrow="About" title="GSL 소개" subtitle="소개, 운영기관, 구성원을 중심으로 프로그램의 정체성을 간결하게 보여주는 페이지 구조입니다." />
          <div className="rounded-[2rem] border p-8" style={{ borderColor: 'rgba(157,159,162,0.16)', backgroundColor: 'rgba(218,218,211,0.24)' }}>
            <div className="text-xs font-semibold uppercase tracking-[0.24em]" style={{ color: palette.secondaryBrown }}>Welcome Block</div>
            <div className="mt-6 h-44 rounded-[1.5rem]" style={{ backgroundColor: 'rgba(255,255,255,0.72)' }} />
            <div className="mt-6 space-y-3">
              <div className="h-3 w-5/6 rounded-full" style={{ backgroundColor: 'rgba(157,159,162,0.22)' }} />
              <div className="h-3 w-4/6 rounded-full" style={{ backgroundColor: 'rgba(157,159,162,0.18)' }} />
              <div className="h-3 w-3/6 rounded-full" style={{ backgroundColor: 'rgba(157,159,162,0.16)' }} />
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <PlaceholderCard title="과정장 인사말" desc="소개" />
          <PlaceholderCard title="비전 및 미션" desc="핵심 가치" />
          <PlaceholderCard title="운영기관" desc="Why HUFS" />
          <PlaceholderCard title="구성원" desc="교수진 · 참여자" />
        </div>
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div>
          <div className="mb-5 text-xs font-semibold uppercase tracking-[0.24em]" style={{ color: palette.secondaryBrown }}>Partners & Institutions</div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {logoBlocks.map((item) => (
              <div key={item} className="flex h-20 items-center justify-center rounded-[1.5rem] border bg-white text-sm font-semibold tracking-[0.16em]" style={{ borderColor: 'rgba(157,159,162,0.16)', color: palette.secondaryGray }}>{item}</div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border p-8" style={{ borderColor: 'rgba(157,159,162,0.16)', backgroundColor: 'white' }}>
          <div className="text-xs font-semibold uppercase tracking-[0.24em]" style={{ color: palette.secondaryBrown }}>People Layout</div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="rounded-[1.5rem] p-4" style={{ backgroundColor: 'rgba(218,218,211,0.28)' }}>
                <div className="h-28 rounded-2xl" style={{ backgroundColor: 'rgba(255,255,255,0.84)' }} />
                <div className="mt-4 h-3 w-2/3 rounded-full" style={{ backgroundColor: 'rgba(157,159,162,0.22)' }} />
                <div className="mt-3 h-3 w-1/2 rounded-full" style={{ backgroundColor: 'rgba(157,159,162,0.16)' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  )
}
