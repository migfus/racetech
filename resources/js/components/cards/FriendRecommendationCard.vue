<script setup lang="ts">
import { Plus } from '@lucide/vue'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,
    ItemGroup,
    ItemMedia,
    ItemSeparator,
    ItemTitle,
} from '@/components/ui/item'
import Label from '../ui/label/Label.vue'
import { Badge } from '@/components/ui/badge'

const people = [
    {
        username: 'shadcn',
        avatar: 'https://github.com/shadcn.png',
        tags: [
            {
                name: 'Trail Runner',
                number: 32,
            },
            {
                name: 'Road Runner',
                number: 32,
            },
            {
                name: 'MTB',
                number: 32,
            },
        ],
    },
    {
        username: 'maxleiter',
        avatar: 'https://github.com/maxleiter.png',
        tags: [
            {
                name: 'Road Runner',
                number: 10,
            },
        ],
    },
    {
        username: 'evilrabbit',
        avatar: 'https://github.com/evilrabbit.png',
        tags: [
            {
                name: 'Trail Runner',
                number: 32,
            },
        ],
    },
]
</script>

<template>
    <div class="flex w-full flex-col gap-4">
        <Label>Suggestions</Label>
        <ItemGroup class="flex flex-col gap-0">
            <template v-for="(person, index) in people" :key="person.username">
                <Item size="sm" class="my-0 py-0">
                    <ItemMedia>
                        <Avatar>
                            <AvatarImage :src="person.avatar" />
                            <AvatarFallback>
                                {{ person.username.charAt(0) }}
                            </AvatarFallback>
                        </Avatar>
                    </ItemMedia>
                    <ItemContent class="gap-1">
                        <ItemTitle>{{ person.username }}</ItemTitle>
                        <ItemDescription
                            class="flex w-52 gap-1 overflow-x-clip"
                        >
                            <Badge
                                v-for="tag in person.tags"
                                :key="tag.name"
                                variant="outline"
                                size="xs"
                            >
                                {{ tag.number }}
                                {{ tag.name }}
                            </Badge>
                        </ItemDescription>
                    </ItemContent>
                    <ItemActions>
                        <Button
                            variant="ghost"
                            size="icon"
                            class="rounded-full"
                        >
                            <Plus />
                        </Button>
                    </ItemActions>
                </Item>
                <ItemSeparator v-if="index !== people.length - 1" />
            </template>
        </ItemGroup>
    </div>
</template>
