import React from 'react'
import PageShell from '../components/PageShell'
import SectionHeader from '../components/SectionHeader'
import { palette } from '../App'

export default function AlumniPage() {
  return (
    <PageShell eyebrow="Alumni" title="동문 네트워크" subtitle="수료생 프로필과 네트워크를 통해 프로그램의 성과를 보여주는 페이지입니다.">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div>
          <SectionHeader eyebrow="Alumni" title="동문 네트워크" subtitle="수료생 프로필과 네트워크를 통해 프로그램의 성과를 보여주는 페이지입니다." />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="rounded-[1.5rem] border bg-white p-5 shadow-sm" style={{ borderColor: 'rgba(157,159,162,0.14)' }}>
                <div className="h-32 rounded-2xl" style={{ backgroundColor: 'rgba(218,218,211,0.7)' }} />
                <div className="mt-4 h-3 w-2/3 rounded-full" style={{ backgroundColor: 'rgba(157,159,162,0.22)' }} />
                <div className="mt-3 h-3 w-1/2 rounded-full" style={{ backgroundColor: 'rgba(157,159,162,0.16)' }} />
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border p-8" style={{ borderColor: 'rgba(157,159,162,0.16)', backgroundColor: 'rgba(218,218,211,0.22)' }}>
          <div className="text-xs font-semibold uppercase tracking-[0.24em]" style={{ color: palette.secondaryBrown }}>Network Overview</div>
          <div className="mt-8 space-y-4">
            {['국제기구', '스포츠 기관', '산업 파트너', '교육기관'].map((item, i) => (
              <div key={item} className="flex items-center gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold text-white" style={{ backgroundColor: palette.primary }}>{i + 1}</div>
                <div className="h-3 flex-1 rounded-full" style={{ backgroundColor: 'rgba(157,159,162,0.18)' }} />
              </div>
            ))}
          </div>
          <div className="mt-10 h-40 rounded-[1.5rem]" style={{ backgroundColor: 'rgba(255,255,255,0.7)' }} />
        </div>
      </div>
    </PageShell>
  )
}
