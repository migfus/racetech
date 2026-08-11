import type { Component } from 'vue'
import type { ChartConfig } from './types'

export { default as ChartContainer } from './ChartContainer.vue'
export { default as ChartCrosshair } from './ChartCrosshair.vue'
export { default as ChartTooltip } from './ChartTooltip.vue'
export { default as ChartTooltipContent } from './ChartTooltipContent.vue'

export type { ChartConfig, ChartSeriesConfig } from './types'

export function componentToString(
    _config: ChartConfig,
    component: Component,
    props: Record<string, unknown> = {},
): string {
    const componentName =
        typeof component === 'object' && component !== null && 'name' in component
            ? String((component as { name?: unknown }).name ?? '')
            : ''

    const encodedProps = encodeURIComponent(JSON.stringify(props))

    return `<span data-chart-component="${componentName}" data-chart-props="${encodedProps}"></span>`
}
