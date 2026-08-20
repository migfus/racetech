<script setup lang="ts">
import { Icon } from '@iconify/vue'

import type { Event } from '@/types/event'

defineProps<{
    event: Event
}>()
</script>

<template>
    <button class="bg-primary-background hover:bg-accent-primary flex gap-2">
        <div class="flex w-full items-center gap-1 truncate">
            <img
                src="https://images.unsplash.com/photo-1786125800935-6db298816e09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D"
                class="size-4 rounded object-fill"
            />
            <p class="truncate">{{ event.title }}</p>
        </div>

        <div class="flex flex-none items-center gap-1 text-xs">
            <p>{{ event.created_at }}</p>
            <Icon icon="lucide:more-vertical" class="text-sm" />
        </div>
    </button>
</template>
