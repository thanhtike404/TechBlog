"use client"

import { create } from 'zustand'
import { useEffect } from 'react'

type AuthStore = {
  token: string | null
  setToken: (token: string | null) => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  token: null,
  setToken: (token) => set({ token }),
}))

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { setToken } = useAuthStore()

  useEffect(() => {
    const token = localStorage.getItem('auth-token')
    setToken(token)
  }, [setToken])

  useEffect(() => {
    const unsub = useAuthStore.subscribe((state) => {
      if (state.token) {
        localStorage.setItem('auth-token', state.token)
      } else {
        localStorage.removeItem('auth-token')
      }
    })
    return unsub
  }, [])

  return <>{children}</>
}
