<script setup lang="ts">
import type { ChartConfig } from './types'

defineProps<{
    config?: ChartConfig
    hideLabel?: boolean
}>()
</script>

<template>
    <div class="rounded-md border bg-popover px-3 py-2 text-sm text-popover-foreground shadow-md">
        <slot />
    </div>
</template>
