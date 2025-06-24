import type { UnsplashPhoto } from "../types/types";

const client_id = "8jPmqpZBuMjx1H1AEYgJf5FD4wPUq_7H7oCOcB95yUY";

export async function fetchCollections(): Promise<UnsplashPhoto[]> {
  const response = await fetch("https://api.unsplash.com/collections?client_id=8jPmqpZBuMjx1H1AEYgJf5FD4wPUq_7H7oCOcB95yUY&per_page=12");
  if (!response.ok) throw new Error("Ошибка загрузки коллекций");
  return response.json();
}

export async function fetchPhotosByCategory(category: string, page = 1, perPage = 12): Promise<UnsplashPhoto[]> {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${category}&page=${page}&per_page=${perPage}&client_id=${client_id}`
  );
  const data = await response.json();
  return data.results;
}

export async function fetchPhotos(): Promise<UnsplashPhoto[]> {
  const response = await fetch(`https://api.unsplash.com/photos?page=1&per_page=12&client_id=${client_id}`);
  const data = await response.json();
  return data;
}