import { useState, useCallback } from 'react'

export const useLaunchModal = () => {
  const [showModal, setShowModal] = useState(false)

  const openModal = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setShowModal(true)
  }, [])

  const closeModal = useCallback(() => {
    setShowModal(false)
  }, [])

  return {
    showModal,
    openModal,
    closeModal
  }
}
