"use client"

import { Sprout, Package, Home } from "lucide-react"

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-gradient-to-r from-[hsl(222,47%,4%)] to-[hsl(222,47%,6%)] backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15">
            <Sprout className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-lg font-extrabold text-foreground tracking-tight sm:text-xl">
              {"단비 운영본부"}
            </h1>
            <p className="text-xs text-muted-foreground sm:text-sm">
              {"2026년 2월 9일 일요일"}
            </p>
          </div>
        </div>
        <nav className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl bg-secondary border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-all duration-200 hover:bg-secondary/80 hover:border-primary/30"
          >
            <Package className="h-4 w-4" />
            <span className="hidden sm:inline">{"재고관리"}</span>
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl bg-secondary border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-all duration-200 hover:bg-secondary/80 hover:border-primary/30"
          >
            <Home className="h-4 w-4" />
            <span className="hidden sm:inline">{"홈"}</span>
          </button>
        </nav>
      </div>
    </header>
  )
}
