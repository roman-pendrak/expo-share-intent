/**
 * Platform-specific linking URL hook.
 * This file is used on iOS where we need expo-linking for share extension deep links.
 */
export { useLinkingURL as useLinkingUrl } from "expo-linking";
