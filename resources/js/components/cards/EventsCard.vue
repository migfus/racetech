<script setup lang="ts">
import {
    Item,
    ItemContent,
    ItemDescription,
    ItemGroup,
    ItemMedia,
    ItemTitle,
} from '@/components/ui/item'
import Label from '../ui/label/Label.vue'
import { Badge } from '@/components/ui/badge'

const events = [
    {
        title: 'Gahi Marathon 2026',
        location: 'Davao City',
        image_url:
            'https://www.racetechph.com/assets/img/gahi-marathon-2026.jpg',
        created_at: 'Aug 30',
    },
    {
        title: 'Tagum Run Series Leg 2',
        location: 'Tagum City',
        image_url: 'https://www.racetechph.com/assets/img/FeatureRace1.jpg',
        created_at: 'Sept 2',
    },
    {
        title: 'Adobo Trail Run 2026',
        location: 'Davao City',
        image_url:
            'https://www.racetechph.com/assets/img/adobo-trail-run-2026.jpg',
        created_at: 'Dec 2',
    },
]
</script>

<template>
    <div class="flex w-full flex-col gap-2">
        <Label>Upcoming Events</Label>
        <ItemGroup class="gap-2">
            <Item
                v-for="event in events"
                :key="event.title"
                as-child
                variant="muted"
                role="listitem"
            >
                <a href="#">
                    <ItemMedia variant="image">
                        <img
                            :src="event.image_url"
                            :alt="event.title"
                            width="32"
                            height="32"
                            class="object-cover"
                        />
                    </ItemMedia>
                    <ItemContent>
                        <ItemTitle class="flex w-full justify-between">
                            <p class="line-clamp-1">{{ event.title }}</p>
                            <ItemDescription class="flex-none text-xs">
                                {{ event.created_at }}
                            </ItemDescription>
                        </ItemTitle>

                        <ItemDescription class="flex justify-between gap-1">
                            <p class="truncate">{{ event.location }}</p>

                            <div class="flex gap-1">
                                <Badge size="xs" variant="outline">24k</Badge>
                                <Badge size="xs" variant="outline">12k</Badge>
                                <Badge size="xs" variant="outline">5k</Badge>
                            </div>
                        </ItemDescription>
                    </ItemContent>
                </a>
            </Item>
        </ItemGroup>
    </div>
</template>
