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

// Number of calendar days from today to the given "YYYY-MM-DD" date (negative if in the past)
export function daysUntil(value: string) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const target = new Date(value)
  target.setHours(0, 0, 0, 0)
  return Math.round((target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
}
