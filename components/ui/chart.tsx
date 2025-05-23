// components/ui/chart.tsx
import type * as React from "react"

export const Chart = () => {
  return <div>Chart Component</div>
}

export const ChartContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="chart-container">{children}</div>
}

export const ChartTooltip = () => {
  return <div>ChartTooltip Component</div>
}

export const ChartTooltipContent = () => {
  return <div>ChartTooltipContent Component</div>
}

export const ChartLegend = () => {
  return <div>ChartLegend Component</div>
}

export const ChartLegendContent = () => {
  return <div>ChartLegendContent Component</div>
}

export const ChartStyle = () => {
  return <div>ChartStyle Component</div>
}
