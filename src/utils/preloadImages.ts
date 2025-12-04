export async function preloadImages(urls: string[]) {
  if (!urls || urls.length === 0) return;

  // Fast path: create Image objects (works everywhere)
  try {
    urls.forEach((u) => {
      const img = new Image();
      img.src = u;
    });
  } catch (e) {
    // ignore
  }

  // Use Cache Storage when available to persist images for subsequent visits
  if (typeof window !== "undefined" && "caches" in window) {
    try {
      const cache = await caches.open("dawat-images-v1");
      await Promise.all(
        urls.map(async (u) => {
          try {
            const cached = await cache.match(u);
            if (!cached) {
              const res = await fetch(u, { cache: "force-cache" });
              // put a cloned response into the cache
              if (res && res.ok) {
                await cache.put(u, res.clone());
              }
            }
          } catch (err) {
            // fallback already handled by Image()
          }
        })
      );
    } catch (err) {
      // ignore caching errors
    }
  }
}
