/**
 * Platform-specific linking URL hook for Android.
 *
 * On Android, share intents are handled entirely through the native module's
 * event listeners (onChange, onError), not through deep linking URLs.
 *
 * Using expo-linking's useLinkingURL() on Android causes conflicts with
 * expo-router's linking configuration, resulting in the error:
 * "Linking configured in multiple places"
 *
 * This no-op hook avoids that conflict while maintaining the same hook API.
 */
export function useLinkingUrl(): string | null {
  return null;
}
