import { useState, useCallback } from "react"
import type { UnsplashPhoto } from "types/types"

export const useModalGallery = (photos: UnsplashPhoto[]) => {
  const [modalIndex, setModalIndex] = useState<number | null>(null)

  const openModal = (idx: number) => setModalIndex(idx)
  const closeModal = () => setModalIndex(null)

  const handlePrev = useCallback(() => {
    if (modalIndex !== null) {
      setModalIndex((modalIndex - 1 + photos.length) % photos.length)
    }
  }, [modalIndex, photos.length])

  const handleNext = useCallback(() => {
    if (modalIndex !== null) {
      setModalIndex((modalIndex + 1) % photos.length)
    }
  }, [modalIndex, photos.length])

  return { modalIndex, openModal, closeModal, handlePrev, handleNext }
}
