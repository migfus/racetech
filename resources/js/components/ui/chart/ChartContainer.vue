<script setup lang="ts">
import type { ChartConfig } from './types'

defineProps<{
    config: ChartConfig
}>()
</script>

<template>
    <div class="w-full" data-slot="chart-container">
        <slot />
    </div>
</template>
