import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS classes, resolving conflicts safely.
 * Example: cn("px-4 py-2 bg-blue-500", condition && "bg-red-500") 
 * -> Results in "px-4 py-2 bg-red-500" if condition is true.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
