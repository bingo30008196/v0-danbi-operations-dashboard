import { DashboardHeader } from "@/components/dashboard/header"
import { WeatherSection } from "@/components/dashboard/weather-card"
import { InventoryCard } from "@/components/dashboard/inventory-card"
import { ActionsCard } from "@/components/dashboard/actions-card"
import { SalesCard } from "@/components/dashboard/sales-card"
import { EmergencyCard } from "@/components/dashboard/emergency-card"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-6">
        <WeatherSection />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InventoryCard />
          <ActionsCard />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SalesCard />
          <EmergencyCard />
        </div>
      </main>
    </div>
  )
}
