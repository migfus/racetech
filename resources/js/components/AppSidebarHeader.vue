<script setup lang="ts">
import AppLogo from '@/components/AppLogo.vue'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import UserMenuContent from '@/components/UserMenuContent.vue'
import { usePage } from '@inertiajs/vue3'

import { getInitials } from '@/composables/useInitials'
import type { BreadcrumbItem } from '@/types'
import { Icon } from '@iconify/vue'
import { computed } from 'vue'
import Badge from './ui/badge/Badge.vue'

withDefaults(
    defineProps<{
        breadcrumbs?: BreadcrumbItem[]
    }>(),
    {
        breadcrumbs: () => [],
    },
)

const page = usePage()
const auth = computed(() => page.props.auth)
</script>

<template>
    <header
        class="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-2 border-b border-sidebar-border/70 bg-background/95 px-6 backdrop-blur supports-[backdrop-filter]:bg-background/80 md:px-4"
    >
        <div class="flex items-center gap-2">
            <!-- <template v-if="breadcrumbs && breadcrumbs.length > 0">
                <Breadcrumbs :breadcrumbs="breadcrumbs" />
            </template> -->
            <!-- <Link :href="dashboard()"> -->
            <AppLogo />
            <!-- </Link> -->
        </div>

        <div class="ml-auto flex items-center">
            <Badge variant="secondary" class="mr-2">Beta</Badge>
            <DropdownMenu>
                <DropdownMenuTrigger :as-child="true">
                    <Button
                        variant="ghost"
                        size="icon"
                        class="relative size-10 rounded-full p-1 focus-within:ring-2 focus-within:ring-primary"
                    >
                        <Icon icon="lucide:message-circle" class="h-6 w-6" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" class="w-56">
                    <UserMenuContent :user="auth.user" />
                </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
                <DropdownMenuTrigger :as-child="true">
                    <Button
                        variant="ghost"
                        size="icon"
                        class="relative size-10 rounded-full p-1 focus-within:ring-2 focus-within:ring-primary"
                    >
                        <Icon icon="lucide:bell" class="h-6 w-6" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" class="w-56">
                    <UserMenuContent :user="auth.user" />
                </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
                <DropdownMenuTrigger :as-child="true">
                    <Button
                        variant="ghost"
                        size="icon"
                        class="relative size-10 w-auto rounded-full p-1 focus-within:ring-2 focus-within:ring-primary"
                    >
                        <Avatar class="size-8 overflow-hidden rounded-full">
                            <AvatarImage
                                v-if="auth.user.avatar"
                                :src="auth.user.avatar"
                                :alt="auth.user.name"
                            />
                            <AvatarFallback
                                class="rounded-lg bg-neutral-200 font-semibold text-black dark:bg-neutral-700 dark:text-white"
                            >
                                {{ getInitials(auth.user?.name) }}
                            </AvatarFallback>
                        </Avatar>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" class="w-56">
                    <UserMenuContent :user="auth.user" />
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    </header>
</template>
