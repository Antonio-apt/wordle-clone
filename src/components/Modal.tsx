// modal react component

import React from 'react'
import { createPortal } from 'react-dom'

interface ModalProps {
  children: React.ReactNode
}

const Modal = ({ children }: ModalProps) => {
  const el = document.getElementById('modal-root') as HTMLElement
  return createPortal(children, el)
}

export default Modal