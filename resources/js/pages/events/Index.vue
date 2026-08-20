<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import PlaceholderPattern from '@/components/PlaceholderPattern.vue'

import { dashboard } from '@/routes'
import EventsCard from '@/components/cards/EventsCard.vue'
import SummaryProfileCard from '@/components/cards/SummaryProfileCard.vue'
import FriendRecommendationCard from '@/components/cards/FriendRecommendationCard.vue'
import SearchCard from '@/components/cards/SearchCard.vue'

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
        class="mx-auto flex h-full max-w-7xl flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4"
    >
        <div class="grid auto-rows-min gap-4 lg:grid-cols-3">
            <div class="flex flex-col gap-4 lg:col-span-2">
                <SearchCard />
            </div>
            <div class="relative flex flex-col gap-4">
                <SummaryProfileCard />
                <EventsCard />
                <FriendRecommendationCard />
            </div>
        </div>
    </div>
</template>
