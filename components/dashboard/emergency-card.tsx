"use client"

import { Siren } from "lucide-react"

export function EmergencyCard() {
  return (
    <section className="rounded-2xl bg-card border-2 border-destructive/60 p-6 shadow-2xl animate-emergency-border md:col-span-2">
      <div className="flex items-center gap-3 mb-6">
        <Siren className="h-6 w-6 text-destructive" />
        <h2 className="text-xl font-bold text-destructive">{"긴급 알림"}</h2>
        <span className="ml-auto rounded-full bg-destructive/15 px-3 py-1 text-xs font-mono font-semibold text-destructive/80">
          {"EMERG-20260209-001"}
        </span>
      </div>
      <div className="space-y-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
          <h3 className="text-3xl font-extrabold text-destructive tracking-tight">
            {"한파 경보"}
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-base font-bold text-chart-4">
              {"심각"}
            </span>
            <div className="flex gap-0.5" aria-label="심각도 3단계">
              {[1, 2, 3].map((i) => (
                <span key={i} className="text-chart-4 text-lg" role="img" aria-hidden="true">
                  {"!"}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-destructive/5 border border-destructive/20 p-5 space-y-3">
          <p className="text-lg font-semibold text-foreground">
            {"전 지역 한파 — 즉시 대응 필요"}
          </p>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-6 text-sm text-muted-foreground">
            <span>
              {"최저기온: "}
              <span className="font-bold text-destructive">{"-13°C"}</span>
              {" (논산)"}
            </span>
            <span className="hidden sm:inline text-border">|</span>
            <span>
              {"골든타임: "}
              <span className="font-bold text-chart-4">{"오늘 18시까지"}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
