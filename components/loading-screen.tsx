"use client"

import { useEffect, useState } from "react"

export default function LoadingScreen() {
  const [percentage, setPercentage] = useState(1)
  const [frogPosition, setFrogPosition] = useState({ x: 10, y: 30 })
  const [jumping, setJumping] = useState(false)

  useEffect(() => {
    // Update percentage from 1 to 100 over 3 seconds
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 30) // 30ms * 100 steps ≈ 3 seconds

    // Animate frog jumping
    const jumpInterval = setInterval(() => {
      setJumping(true)

      // Move frog forward
      setFrogPosition((prev) => ({
        x: (prev.x + 5) % 80,
        y: prev.y,
      }))

      // Reset jump animation after 300ms
      setTimeout(() => {
        setJumping(false)
      }, 300)
    }, 600)

    return () => {
      clearInterval(interval)
      clearInterval(jumpInterval)
    }
  }, [])

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-[#5D4B8C] to-[#3A3A4D] flex flex-col items-center justify-center z-50">
      <div className="text-white text-3xl font-bold mb-8 animate-pulse">Trenches Frog Science</div>

      {/* Creative frog animation area */}
      <div className="w-80 h-40 bg-[#2A2A3D] rounded-lg relative overflow-hidden mb-8 border-2 border-[#8A7BC8]">
        {/* Water surface with ripple effect */}
        <div className="absolute bottom-0 w-full h-10 bg-[#4A90E2] opacity-70 animate-pulse"></div>

        {/* Lily pads */}
        <div className="absolute bottom-8 left-10 w-12 h-4 bg-green-700 rounded-full"></div>
        <div className="absolute bottom-8 left-40 w-12 h-4 bg-green-700 rounded-full"></div>
        <div className="absolute bottom-8 left-60 w-12 h-4 bg-green-700 rounded-full"></div>

        {/* Animated frog */}
        <div
          className={`absolute transition-all duration-300 ease-in-out ${jumping ? "translate-y-[-20px]" : ""}`}
          style={{ left: `${frogPosition.x}%`, bottom: `${frogPosition.y}%` }}
        >
          <div className="text-4xl transform scale-x-[1]">
            <img width={84} height={74} src="/frog-icon.png" alt="" />
          </div>
        </div>

        {/* Bubbles */}
        <div className="absolute bottom-2 left-20 w-2 h-2 bg-white rounded-full opacity-60 animate-ping"></div>
        <div
          className="absolute bottom-4 left-50 w-1 h-1 bg-white rounded-full opacity-60 animate-ping"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-6 left-70 w-2 h-2 bg-white rounded-full opacity-60 animate-ping"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Progress bar with percentage */}
      <div className="w-64 bg-gray-700 rounded-full h-4 mb-2 overflow-hidden">
        <div
          className="bg-gradient-to-r from-green-400 to-green-600 h-4 transition-all duration-100 ease-in-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      {/* Percentage counter */}
      <div className="text-white font-bold mb-4">{percentage}%</div>

      <div className="text-white text-sm">Loading observation data...</div>
    </div>
  )
}
