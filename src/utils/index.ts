export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch (err) {
    return false;
  }
}

export function generateId(): string {
  return (Math.random() + 1).toString(36).substring(7);
}

export function generateShortUrl(): string {
  return `https://shorten/${generateId()}`;
}
