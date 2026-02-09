"use client"

import { TrendingUp, AlertTriangle } from "lucide-react"

export function SalesCard() {
  return (
    <section className="rounded-2xl bg-card border border-border p-6 shadow-2xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.5)]">
      <div className="flex items-center gap-3 mb-6">
        <TrendingUp className="h-6 w-6 text-chart-4" />
        <h2 className="text-xl font-bold text-foreground">{"매출 현황"}</h2>
      </div>
      <div className="flex flex-col items-center justify-center rounded-xl bg-chart-4/5 border border-chart-4/20 p-8 gap-3">
        <AlertTriangle className="h-10 w-10 text-chart-4/70" />
        <p className="text-lg font-semibold text-chart-4">
          {"매출 데이터 미연동"}
        </p>
        <p className="text-sm text-muted-foreground">
          {"danbi-analyst 연동 후 활성화 예정"}
        </p>
      </div>
    </section>
  )
}
