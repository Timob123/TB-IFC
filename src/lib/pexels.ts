/**
 * Pexels API - fetch real Dublin & Ireland photos at runtime.
 * Get a free API key at https://www.pexels.com/api/
 * Add to .env: VITE_PEXELS_API_KEY=your_key
 *
 * Pexels has: 10.8K+ Dublin photos, 1.7M+ Ireland nature photos
 */

const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;
const BASE = "https://api.pexels.com/v1";

export interface PexelsPhoto {
  id: number;
  width: number;
  height: number;
  url: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
  alt: string;
  photographer: string;
  photographer_url: string;
}

export interface PexelsSearchResponse {
  photos: PexelsPhoto[];
  total_results: number;
  page: number;
  per_page: number;
  next_page?: string;
}

export async function searchPexels(
  query: string,
  perPage = 15,
  page = 1
): Promise<PexelsSearchResponse | null> {
  if (!API_KEY) return null;
  const res = await fetch(
    `${BASE}/search?query=${encodeURIComponent(query)}&per_page=${perPage}&page=${page}`,
    { headers: { Authorization: API_KEY } }
  );
  if (!res.ok) return null;
  return res.json();
}

/** Get image URL for a Pexels photo (no API key needed for static IDs) */
export function pexelsImageUrl(photoId: number, width = 1200): string {
  return `https://images.pexels.com/photos/${photoId}/pexels-photo-${photoId}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;
}
