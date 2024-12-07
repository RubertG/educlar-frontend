import { PropsWithClassName } from '@/core/interfaces/props'
import React from 'react'

const Hr = ({
  className = ''
}: PropsWithClassName) => {
  return (
    <hr className={`border-t border-bg-300 ${className}`} />
  )
}

export { Hr }
