"use client"

import { Package } from "lucide-react"

interface InventoryItem {
  name: string
  stock: number
  badge: string
  badgeType: "urgent" | "recommended"
}

const inventoryItems: InventoryItem[] = [
  {
    name: "PF-Kit 해충종합세트",
    stock: 2,
    badge: "긴급발주",
    badgeType: "urgent",
  },
  {
    name: "PF-1 병해예방",
    stock: 5,
    badge: "발주권장",
    badgeType: "recommended",
  },
]

export function InventoryCard() {
  return (
    <section className="rounded-2xl bg-card border border-border p-6 shadow-2xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.5)]">
      <div className="flex items-center gap-3 mb-6">
        <Package className="h-6 w-6 text-primary" />
        <h2 className="text-xl font-bold text-foreground">{"재고 알림"}</h2>
      </div>
      <ul className="space-y-4">
        {inventoryItems.map((item) => (
          <li
            key={item.name}
            className="flex items-center justify-between rounded-xl bg-secondary/50 border border-border px-5 py-4"
          >
            <div className="flex flex-col gap-1">
              <span className="text-base font-semibold text-foreground">
                {item.name}
              </span>
              <span className="text-sm text-muted-foreground">
                {"남은 재고"}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-extrabold text-foreground">
                {item.stock}
                <span className="text-base font-medium text-muted-foreground ml-1">
                  {"개"}
                </span>
              </span>
              <span
                className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold ${
                  item.badgeType === "urgent"
                    ? "bg-destructive/20 text-destructive animate-pulse-glow"
                    : "bg-chart-4/20 text-chart-4"
                }`}
              >
                {item.badge}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
