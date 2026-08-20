<script setup lang="ts">
import { Card } from '@/components/ui/card'
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from '@/components/ui/input-group'
import CardContent from '../ui/card/CardContent.vue'
import { Icon } from '@iconify/vue'
import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubTrigger,
    DropdownMenuSubContent,
    DropdownMenuPortal,
} from '@/components/ui/dropdown-menu'
import { Badge } from '@/components/ui/badge'

import { computed, ref } from 'vue'
import CardFooter from '../ui/card/CardFooter.vue'

const filters = [
    {
        name: 'Road Run',
        icon: 'lucide:road',
    },
    {
        name: 'Trail Run',
        icon: 'lucide:mountain',
    },
    {
        name: 'Hike',
        icon: 'lucide:mountain',
    },
    {
        name: 'MTB',
        icon: 'boxicons:cycling',
    },
    {
        name: 'Road Bike',
        icon: 'boxicons:cycling',
    },
]

const selected_filters = ref<{ name: string; icon: string }[]>([])
const selected_filter_names = computed(
    () => new Set(selected_filters.value.map((filter) => filter.name)),
)
</script>

<template>
    <Card>
        <CardContent class="flex flex-col gap-2">
            <InputGroup>
                <InputGroupInput placeholder="Search..." />
                <InputGroupAddon>
                    <Icon icon="lucide:search" />
                </InputGroupAddon>
                <InputGroupAddon align="inline-end">
                    12 results
                </InputGroupAddon>
            </InputGroup>

            <div class="flex justify-between gap-2">
                <DropdownMenu>
                    <DropdownMenuTrigger as-child>
                        <Button variant="outline" size="sm">
                            <Icon icon="lucide:filter" />
                            All
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent class="w-56" align="start">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                Profile
                                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Billing
                                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Settings
                                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Keyboard shortcuts
                                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger
                                    >Invite users</DropdownMenuSubTrigger
                                >
                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent>
                                        <DropdownMenuItem
                                            >Email</DropdownMenuItem
                                        >
                                        <DropdownMenuItem
                                            >Message</DropdownMenuItem
                                        >
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem
                                            >More...</DropdownMenuItem
                                        >
                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>
                            <DropdownMenuItem>
                                New Team
                                <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>GitHub</DropdownMenuItem>
                        <DropdownMenuItem>Support</DropdownMenuItem>
                        <DropdownMenuItem disabled> API </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            Log out
                            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <ButtonGroup class="flex justify-end">
                    <Button variant="outline" size="sm">
                        <Icon icon="lucide:refresh-ccw" />Reset
                    </Button>
                    <Button variant="outline" size="sm">
                        <Icon icon="lucide:search" />
                        Search
                    </Button>
                </ButtonGroup>
            </div>
        </CardContent>

        <CardFooter>
            <div class="flex flex-wrap items-center gap-2">
                <Badge
                    :variant="`${selected_filters.length == 0 ? 'default' : 'outline'}`"
                    @click="selected_filters = []"
                    class="cursor-pointer"
                >
                    <Icon icon="lucide:search" />
                    All
                </Badge>

                <Badge
                    v-for="item in filters"
                    :key="item.name"
                    class="cursor-pointer"
                    :variant="`${selected_filter_names.has(item.name) ? 'default' : 'outline'}`"
                    @click="
                        selected_filter_names.has(item.name)
                            ? (selected_filters = selected_filters.filter(
                                  (f) => f.name != item.name,
                              ))
                            : selected_filters.push(item)
                    "
                >
                    <Icon
                        v-if="selected_filter_names.has(item.name)"
                        icon="lucide:check"
                    />
                    <Icon v-else :icon="item.icon" />
                    {{ item.name }}
                </Badge>

                <Badge
                    v-if="selected_filters.length > 0"
                    class="cursor-pointer"
                    variant="outline"
                >
                    {{ selected_filters.length }}
                </Badge>
            </div>
        </CardFooter>
    </Card>
</template>
