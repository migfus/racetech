<script setup lang="ts">
import AppLogo from '@/components/AppLogo.vue'
import NavMain from '@/components/NavMain.vue'
import { Link } from '@inertiajs/vue3'
// import SideProfile from '@/components/SideProfile.vue'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarTrigger,
} from '@/components/ui/sidebar'

import { dashboard } from '@/routes'
import type { NavItem } from '@/types'
import Events from '@/routes/events'

const navigations: { title: string; items: NavItem[] }[] = [
    {
        title: 'Runner',
        items: [
            {
                title: 'Explore Events',
                href: Events.index(),
                icon: 'lucide:search',
            },
            {
                title: 'My Teams',
                href: '',
                icon: 'ic:outline-people',
            },
            {
                title: 'My Runs',
                href: '',
                icon: 'lucide:chart-line',
            },
            {
                title: 'Map',
                href: '',
                icon: 'lucide:map',
            },
            {
                title: 'Transactions',
                href: '',
                icon: 'lucide:logs',
            },
            {
                title: 'Profile',
                href: '',
                icon: 'lucide:badge-check',
            },
            {
                title: 'Account Settings',
                href: '',
                icon: 'lucide:settings',
            },
            {
                title: `Runner's Guide`,
                href: '',
                icon: 'lucide:book-check',
            },
        ],
    },
    {
        title: 'Organizer',
        items: [
            {
                title: 'My Events',
                href: '',
                icon: 'lucide:search',
            },
            {
                title: 'Shirt Designs',
                href: '',
                icon: 'lucide-lab:shirt-t',
            },
            {
                title: `Organizer's Guide`,
                href: '',
                icon: 'lucide:book-check',
            },
        ],
    },
    {
        title: 'Volunteer',
        items: [
            {
                title: 'Events',
                href: '',
                icon: 'lucide:search',
            },
            {
                title: `Support's Guide`,
                href: '',
                icon: 'lucide:book-check',
            },
        ],
    },
]

const user_tags = [
    {
        name: 'Road Runner',
        icon: 'lucide:sport-shoe',
    },
    {
        name: 'Trail Runner',
        icon: 'lucide:sport-shoe',
    },
    {
        name: 'Organizer',
        icon: 'lucide:users',
    },
    {
        name: 'Volunteer',
        icon: 'lucide:handshake',
    },
]
</script>

<template>
    <Sidebar
        collapsible="icon"
        variant="inset"
        class="top-16 h-[calc(100svh-4rem)]"
    >
        <!-- <SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton size="lg" as-child>
                        <SidebarTrigger class="-ml-1" />
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader> -->

        <SidebarContent>
            <NavMain
                v-for="navigation in navigations"
                :key="navigation.title"
                :title="navigation.title"
                :items="navigation.items"
            />
            <!-- <div class="mx-2 flex flex-wrap items-center gap-1 px-2">
                <Badge
                    v-for="tag in user_tags"
                    :key="tag.name"
                    variant="secondary"
                    size="sm"
                >
                    <Icon :icon="tag.icon" class="mr-1" />
                    {{ tag.name }}
                </Badge>
            </div> -->
        </SidebarContent>

        <SidebarFooter>
            <div class="text-xs text-muted-foreground">
                Racetech v0.0.1 beta
            </div>
        </SidebarFooter>
    </Sidebar>
    <slot />
</template>
