import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const BASE_PATH = '/optimum-website';

export function assetPath(path: string): string {
  return `${BASE_PATH}${path}`;
}
