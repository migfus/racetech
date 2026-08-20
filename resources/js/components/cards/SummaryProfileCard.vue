<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Icon } from '@iconify/vue'
import Separator from '../ui/separator/Separator.vue'

const summary_stat = [
    {
        title: 'Joined Events',
        value: 3,
    },
    {
        title: 'Teams',
        value: 12,
    },
    {
        title: 'Contributions',
        value: 1000,
    },
]

const teams = [
    {
        name: 'Running Valencia',
        avatar: 'https://images.unsplash.com/photo-1786291382498-74ed2c3a6f9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8aG1lbnZRaFVteE18fGVufDB8fHx8fA%3D%3D',
    },
    {
        name: 'Malaybalay City',
        avatar: 'https://images.unsplash.com/photo-1719734659173-a7bd6656fb72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8aG1lbnZRaFVteE18fGVufDB8fHx8fA%3D%3D',
    },
]

const tags = [
    {
        name: 'Road Runner',
        icon: 'lucide:sport-shoe',
    },
    {
        name: 'Trail Runner',
        icon: 'lucide:sport-shoe',
    },
    {
        name: 'MTB',
        icon: 'lucide:bike',
    },
    {
        name: 'Road Bike',
        icon: 'lucide:bike',
    },
    {
        name: 'Organizer',
        icon: 'lucide:circle-plus',
    },
    {
        name: 'Photographer',
        icon: 'lucide:camera',
    },
    {
        name: 'Videographer',
        icon: 'lucide:video',
    },
    {
        name: 'Admin',
        icon: 'lucide:circle-star',
    },
    {
        name: 'Volunteer',
        icon: 'lucide:hand-metal',
    },
]
</script>

<template>
    <Card>
        <CardContent class="flex flex-col gap-4">
            <div class="flex flex-col items-center gap-2">
                <img
                    src="https://images.unsplash.com/photo-1786114943268-5b93137ed75f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D"
                    class="size-12 rounded-full object-cover"
                />
                <p>Schwarzenegger R. Belonio</p>
            </div>

            <div class="flex justify-between gap-2">
                <div
                    v-for="item in summary_stat"
                    :key="item.title"
                    class="flex flex-col items-center justify-center"
                >
                    <p class="text-xs text-muted-foreground">
                        {{ item.title }}
                    </p>
                    <p class="text-lg font-bold">{{ item.value }}</p>
                </div>

                <!-- <Separator orientation="vertical" /> -->
            </div>

            <div class="flex flex-wrap gap-2">
                <Badge
                    v-for="item in tags"
                    :key="item.name"
                    variant="secondary"
                >
                    <Icon :icon="item.icon" class="" />
                    <p>{{ item.name }}</p>
                </Badge>
            </div>
        </CardContent>
    </Card>
</template>

<style scoped></style>
