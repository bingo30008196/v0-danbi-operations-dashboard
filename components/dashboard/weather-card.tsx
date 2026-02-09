"use client"

import { Thermometer } from "lucide-react"

interface WeatherData {
  city: string
  low: number
  high: number
  diff: number
}

const weatherData: WeatherData[] = [
  { city: "김천", low: -9, high: 5, diff: 14 },
  { city: "김해", low: -7, high: 6, diff: 13 },
  { city: "논산", low: -13, high: 3, diff: 16 },
  { city: "성주", low: -8, high: 4, diff: 12 },
  { city: "상주", low: -10, high: 5, diff: 15 },
]

export function WeatherSection() {
  return (
    <section className="rounded-2xl bg-card border border-border p-6 shadow-2xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.5)]">
      <div className="flex items-center gap-3 mb-6">
        <Thermometer className="h-6 w-6 text-chart-2" />
        <h2 className="text-xl font-bold text-foreground">
          {"오늘의 날씨 (5개 거점)"}
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {weatherData.map((item) => (
          <WeatherItem key={item.city} data={item} />
        ))}
      </div>
    </section>
  )
}

function WeatherItem({ data }: { data: WeatherData }) {
  return (
    <div className="relative rounded-xl bg-gradient-to-br from-[hsl(210,60%,14%)] to-[hsl(220,50%,8%)] border border-[hsl(210,40%,20%)] p-5 flex flex-col items-center gap-3 transition-all duration-300 hover:border-chart-2/40">
      <span className="text-sm font-semibold text-chart-2 tracking-wide">
        {data.city}
      </span>
      <div className="text-center">
        <span className="text-3xl font-extrabold text-foreground tracking-tight">
          {data.low}{"°C"}
        </span>
        <span className="text-muted-foreground mx-1.5 text-lg">{"~"}</span>
        <span className="text-3xl font-extrabold text-foreground tracking-tight">
          {data.high}{"°C"}
        </span>
      </div>
      <span className="text-sm text-muted-foreground">
        {"일교차 "}
        <span className="font-bold text-chart-4">{data.diff}{"°C"}</span>
      </span>
      <span className="inline-flex items-center gap-1.5 rounded-full bg-destructive/20 px-3 py-1 text-xs font-bold text-destructive animate-pulse-glow">
        <span className="h-2 w-2 rounded-full bg-destructive" />
        {"한파"}
      </span>
    </div>
  )
}
