export function openExternalLink(url, targetWindow = window) {
  if (!url || typeof url !== 'string') return false;

  const trimmedUrl = url.trim();
  if (!trimmedUrl) return false;

  const isSafeExternalUrl = /^(https?:\/\/)/i.test(trimmedUrl);
  if (!isSafeExternalUrl) return false;

  targetWindow.open(trimmedUrl, '_blank', 'noopener,noreferrer');
  return true;
}
