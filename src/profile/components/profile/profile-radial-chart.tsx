"use client"

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart
} from "recharts"

import { ChartConfig, ChartContainer } from "@/core/components"



// configuración de la gráfica
const chartConfig = {
  progress: {
    label: "Porcentaje de avance"
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--primary))"
  }
} satisfies ChartConfig

interface Props {
  progress: number
  className?: string
}

/*
  Componente que muestra una gráfica radial que representa el porcentaje de avance
  de un estudiante en su carrera.
*/
export function ProfileRadialChart({
  progress = 0, className = ""
}: Props) {
  const chartData = [
    { browser: "safari", progress, fill: "var(--color-safari)" }
  ]

  return (
    <div className={`w-[200px] h-[200px] ${className}`}>
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square w-[200px] h-[200px]"
      >
        <RadialBarChart
          data={chartData}
          startAngle={90}
          endAngle={90 + (360 * progress) / 100}
          innerRadius={80}
          outerRadius={110}
        >
          <PolarGrid
            gridType="circle"
            radialLines={false}
            stroke="none"
            className="first:fill-muted last:fill-background"
            polarRadius={[86, 74]}
          />
          <RadialBar
            dataKey="progress"
            background
            cornerRadius={10}
            fill={chartData[0].fill}
          />
          <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy ?? 0) - 10}
                        className="fill-foreground text-3xl font-bold -mt-10"
                      >
                        {progress.toLocaleString()}%
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 15}
                        className="fill-muted-foreground"
                      >
                        Porcentaje de avance
                      </tspan>
                    </text>
                  )
                }
                return null
              }}
            />
          </PolarRadiusAxis>
        </RadialBarChart>
      </ChartContainer>
    </div>
  )
}
