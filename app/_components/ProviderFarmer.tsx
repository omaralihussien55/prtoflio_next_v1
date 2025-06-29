
"use client"
import { AnimatePresence } from 'framer-motion'
import React, { FC } from 'react'

const ProviderFarmer:FC<{children:React.ReactNode}> = ({children}) => {
  return (
    <AnimatePresence mode="wait">
      {children}
    </AnimatePresence>
  )
}

export default ProviderFarmer
