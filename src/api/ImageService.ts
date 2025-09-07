import type {UnsplashPhoto} from "types/types.ts"
import {apiKey, apiUrl} from "constants/api.ts"

export async function fetchCollections(): Promise<UnsplashPhoto[]> {
  const response = await fetch(
    `${apiUrl}/collections?per_page=12&client_id=${apiKey}`,
  )
  if (!response.ok) throw new Error("Ошибка загрузки коллекций")
  return response.json()
}

export async function fetchPhotosByCategory(
  category: string,
  page = 1,
  perPage = 12,
  orderBy = "relevant",
): Promise<UnsplashPhoto[]> {
  const response = await fetch(
    `${apiUrl}/search/photos?query=${category}&page=${page}&per_page=${perPage}&order_by=${orderBy}&client_id=${apiKey}`,
  )
  const data = await response.json()
  return data.results
}

export async function fetchImages(
  page = 1,
  per_page = 12,
  orderBy = "relevant",
): Promise<UnsplashPhoto[]> {
  const response = await fetch(
    `${apiUrl}/photos?page=${page}&per_page=${per_page}&order_by=${orderBy}&client_id=${apiKey}`,
  )
  return await response.json()
}
