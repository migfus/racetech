<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import PlaceholderPattern from '@/components/PlaceholderPattern.vue'

import { dashboard } from '@/routes'
import EventsCard from '@/components/cards/EventsCard.vue'
import SummaryProfileCard from '@/components/cards/SummaryProfileCard.vue'
import FriendRecommendationCard from '@/components/cards/FriendRecommendationCard.vue'

defineOptions({
    layout: {
        breadcrumbs: [
            {
                title: 'Dashboard',
                href: dashboard(),
            },
            {
                title: 'Dashboard',
                href: dashboard(),
            },
        ],
    },
})
</script>

<template>
    <Head title="Dashboard" />

    <div
        class="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4"
    >
        <div class="grid auto-rows-min gap-4 md:grid-cols-4">
            <div
                class="relative col-span-2 aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border"
            >
                <PlaceholderPattern />
            </div>
            <div
                class="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border"
            >
                <PlaceholderPattern />
            </div>
            <div class="relative flex flex-col gap-4">
                <SummaryProfileCard />
                <EventsCard />
                <FriendRecommendationCard />
            </div>
        </div>
    </div>
</template>
