import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Converts a display name (e.g. vegetable name) into the slug used for its icon filename in public/vegetable-icons
export function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

// Formats a "YYYY-MM-DD" date string using the Czech default date format
export function formatDate(value: string) {
  return new Date(value).toLocaleDateString('cs-CZ')
}
