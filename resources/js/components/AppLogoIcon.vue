<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

defineOptions({
    inheritAttrs: false,
})

type Props = {
    className?: HTMLAttributes['class']
}

defineProps<Props>()
</script>

<template>
    <img src="https://www.racetechph.com/assets/img/racetechlogo.png" />
</template>
