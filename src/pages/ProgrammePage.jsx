import React from 'react'
import PageShell from '../components/PageShell'
import SectionHeader from '../components/SectionHeader'
import PlaceholderCard from '../components/PlaceholderCard'
import { palette } from '../App'

export default function ProgrammePage() {
  return (
    <PageShell eyebrow="Programme" title="교육과정" subtitle="모듈형 카드, 프로그램 다이어그램, 연간 타임라인을 중심으로 교육 구조를 직관적으로 보여줍니다." soft>
      <SectionHeader eyebrow="Programme" title="교육과정" subtitle="모듈형 카드, 프로그램 다이어그램, 연간 타임라인을 중심으로 교육 구조를 직관적으로 보여줍니다." />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <PlaceholderCard title="커리큘럼" desc="모듈별 구성" />
        <PlaceholderCard title="외국어 연수" desc="프로그램" />
        <PlaceholderCard title="해외 연수" desc="프로그램" />
        <PlaceholderCard title="특별 강연" desc="프로그램" />
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-[1.12fr_0.88fr]">
        <div className="rounded-[2rem] border bg-white p-8" style={{ borderColor: 'rgba(157,159,162,0.16)' }}>
          <div className="text-xs font-semibold uppercase tracking-[0.24em]" style={{ color: palette.secondaryBrown }}>Programme Diagram</div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[["교육", "Academic"], ["경험", "Experience"], ["네트워크", "Network"]].map(([title, sub]) => (
              <div key={title} className="rounded-[1.5rem] p-6 text-center" style={{ backgroundColor: palette.primarySoft }}>
                <div className="text-base font-semibold" style={{ color: palette.secondaryDark }}>{title}</div>
                <div className="mt-2 text-sm" style={{ color: palette.secondaryGray }}>{sub}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 h-px w-full" style={{ backgroundColor: 'rgba(157,159,162,0.16)' }} />
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="rounded-2xl p-4" style={{ backgroundColor: 'rgba(218,218,211,0.28)' }}>
                <div className="text-xs font-semibold tracking-[0.24em]" style={{ color: palette.secondaryBrown }}>0{i}</div>
                <div className="mt-4 h-3 w-4/5 rounded-full" style={{ backgroundColor: 'rgba(157,159,162,0.20)' }} />
                <div className="mt-3 h-3 w-3/5 rounded-full" style={{ backgroundColor: 'rgba(157,159,162,0.14)' }} />
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border p-8" style={{ borderColor: 'rgba(157,159,162,0.16)', backgroundColor: 'rgba(255,255,255,0.72)' }}>
          <div className="text-xs font-semibold uppercase tracking-[0.24em]" style={{ color: palette.secondaryBrown }}>Annual Timeline</div>
          <div className="mt-8 space-y-5">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold text-white" style={{ backgroundColor: palette.primary }}>{i}</div>
                <div className="h-3 flex-1 rounded-full" style={{ backgroundColor: 'rgba(157,159,162,0.18)' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  )
}
