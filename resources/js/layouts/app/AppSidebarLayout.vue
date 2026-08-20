<script setup lang="ts">
import AppContent from '@/components/AppContent.vue'
import AppShell from '@/components/AppShell.vue'
import AppSidebar from '@/components/AppSidebar.vue'
import AppSidebarHeader from '@/components/AppSidebarHeader.vue'
import { Toaster } from '@/components/ui/sonner'

import type { BreadcrumbItem } from '@/types'

type Props = {
    breadcrumbs?: BreadcrumbItem[]
}

withDefaults(defineProps<Props>(), {
    breadcrumbs: () => [],
})
</script>

<template>
    <AppShell variant="sidebar">
        <AppSidebarHeader :breadcrumbs="breadcrumbs" />
        <div class="flex min-h-[calc(100svh-4rem)] w-full">
            <AppSidebar />
            <AppContent variant="sidebar" class="overflow-x-hidden">
                <slot />
            </AppContent>
        </div>
        <Toaster />
    </AppShell>
</template>
