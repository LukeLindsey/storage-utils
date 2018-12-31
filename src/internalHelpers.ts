/** @hidden */
export function getFromStorage<T>(storage: Storage, storageKey: string): IFromCache<T> | null {
  const cached = storage.getItem(storageKey);
  if (cached) {
    const parsed: ICached = JSON.parse(cached);
    return {
      hasExpired: !hasTimeToLive(parsed.expiration),
      data: parsed.data
    };
  }
  return null;
}

/** @hidden */
export function updateStorage(storage: Storage, storageKey: string, data: any, ttl?: number): void {
  const cacheObject: ICached = {
    data,
    expiration: ttl ? getNowMilliseconds() + ttl : undefined
  };
  storage.setItem(storageKey, JSON.stringify(cacheObject));
}

/** @hidden */
function hasTimeToLive(expiration?: number): boolean {
  if (expiration) {
    const now = getNowMilliseconds();
    return expiration > now;
  }
  return true;
}

/** @hidden */
function getNowMilliseconds(): number {
  return new Date().getTime();
}
