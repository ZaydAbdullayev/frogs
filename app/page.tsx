"use client"

import { useEffect, useState } from "react"
import LoadingScreen from "@/components/loading-screen"
import Dashboard from "@/components/dashboard"

export default function FrogScienceDashboard() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Show loading screen for 3 seconds
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return <div className="min-h-screen bg-gray-100">{loading ? <LoadingScreen /> : <Dashboard />}</div>
}
