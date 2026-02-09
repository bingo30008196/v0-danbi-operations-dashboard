"use client"

import { useState } from "react"
import { CheckCircle2, Circle, ListChecks } from "lucide-react"

const initialActions = [
  { id: 1, label: "PF-Kit 긴급 발주 (재고 2개)", checked: false },
  { id: 2, label: "딸기 농가 한파 문자 발송", checked: false },
  { id: 3, label: "발근고 관주 처방 안내 발송", checked: false },
]

export function ActionsCard() {
  const [actions, setActions] = useState(initialActions)

  function toggleAction(id: number) {
    setActions((prev) =>
      prev.map((a) => (a.id === id ? { ...a, checked: !a.checked } : a))
    )
  }

  return (
    <section className="rounded-2xl bg-card border border-border p-6 shadow-2xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.5)]">
      <div className="flex items-center gap-3 mb-6">
        <ListChecks className="h-6 w-6 text-primary" />
        <h2 className="text-xl font-bold text-foreground">
          {"오늘의 추천 액션 Top 3"}
        </h2>
      </div>
      <ul className="space-y-3">
        {actions.map((action) => (
          <li key={action.id}>
            <button
              type="button"
              onClick={() => toggleAction(action.id)}
              className="flex w-full items-center gap-4 rounded-xl bg-secondary/50 border border-border px-5 py-4 text-left transition-all duration-200 hover:bg-secondary/80 group cursor-pointer"
            >
              {action.checked ? (
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
              ) : (
                <Circle className="h-6 w-6 text-muted-foreground shrink-0 group-hover:text-primary/60 transition-colors" />
              )}
              <span
                className={`text-base font-medium transition-all duration-200 ${
                  action.checked
                    ? "line-through text-muted-foreground"
                    : "text-foreground"
                }`}
              >
                {action.label}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
