import type { Component } from 'vue'

export type ChartSeriesConfig = {
    label?: string
    color?: string
    icon?: Component
}

export type ChartConfig = Record<string, ChartSeriesConfig>
