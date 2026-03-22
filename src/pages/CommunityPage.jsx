import React from 'react'
import PageShell from '../components/PageShell'
import SectionHeader from '../components/SectionHeader'
import { palette } from '../App'

export default function CommunityPage() {
  return (
    <PageShell eyebrow="Community" title="커뮤니티" subtitle="공지, 뉴스레터, 아카이브, SNS를 하나의 허브로 구성한 페이지입니다." soft>
      <SectionHeader eyebrow="Community" title="커뮤니티" subtitle="공지, 뉴스레터, 아카이브, SNS를 하나의 허브로 구성한 페이지입니다." />
      <div className="flex flex-wrap gap-3">
        {['공지', '뉴스레터', '사진', '영상'].map((tab, i) => (
          <div key={tab} className="rounded-full px-4 py-2 text-sm font-medium" style={{ backgroundColor: i === 0 ? palette.primary : 'rgba(218,218,211,0.7)', color: i === 0 ? 'white' : palette.secondaryDark }}>
            {tab}
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="overflow-hidden rounded-[1.5rem] border bg-white" style={{ borderColor: 'rgba(157,159,162,0.14)' }}>
            <div className="h-44" style={{ backgroundColor: 'rgba(218,218,211,0.7)' }} />
            <div className="p-5">
              <div className="h-3 w-4/5 rounded-full" style={{ backgroundColor: 'rgba(157,159,162,0.22)' }} />
              <div className="mt-3 h-3 w-2/5 rounded-full" style={{ backgroundColor: 'rgba(157,159,162,0.16)' }} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="rounded-full px-6 py-3 text-sm font-semibold text-white" style={{ backgroundColor: palette.primary }}>
          더 보기
        </button>
      </div>
    </PageShell>
  )
}
