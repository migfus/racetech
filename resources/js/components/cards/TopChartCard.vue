<script setup lang="ts">
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/vue'
import EventData from '../data/EventData.vue'

const users = [
    {
        avatar: 'Gahi Marathon 2026',
        name: 'Davao City',
        time: '2:22:22',
    },
]
</script>

<template>
    <div>
        <Card>
            <CardHeader>
                <CardTitle>
                    <div class="flex items-center gap-2">
                        <img
                            src="https://www.racetechph.com/assets/img/gahi-marathon-2026.jpg"
                            alt="Gahi Marathon 2026"
                        />
                        <p>Gahi Marathon 2026</p>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent class="flex flex-col gap-2">
                <EventData
                    v-for="(item, index) in events"
                    :key="index"
                    :event="item"
                />
            </CardContent>

            <CardFooter class="justify-end">
                <CardAction>
                    <Button size="sm" variant="outline">
                        <Icon icon="lucide:search" />
                        <p>Explore</p>
                    </Button>
                </CardAction>
            </CardFooter>
        </Card>
    </div>
</template>
