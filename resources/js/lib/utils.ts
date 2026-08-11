import type { UrlMethodPair } from '@inertiajs/core'
import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function toUrl(href: string | UrlMethodPair) {
    return typeof href === 'string' ? href : href.url
}
