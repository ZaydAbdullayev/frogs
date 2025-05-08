"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { RiTwitterXFill } from "react-icons/ri"; // Add this import
import { Play, Maximize2, Video, Grid, Menu, Activity, Droplet } from "lucide-react"

export default function Dashboard() {
  const [activityLevel, setActivityLevel] = useState(78)
  const [foodLevel, setFoodLevel] = useState(32)
  const [waterLevel, setWaterLevel] = useState(85)
  const [selectedSubject, setSelectedSubject] = useState("FR-357")
  const [videoSource, setVideoSource] = useState("/frog-video.mp4")

  const subjectVideos = {
    "FR-357": "/frog-video.mp4",
    "FR-358": "/frog-video2.mp4"
  }

  // Increment metrics by 1% every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActivityLevel((prev) => (prev < 100 ? prev + 1 : 50))
      setFoodLevel((prev) => (prev < 100 ? prev + 1 : 20))
      setWaterLevel((prev) => (prev < 100 ? prev + 1 : 60))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const handleSubjectClick = (subjectId: string) => {
    setSelectedSubject(subjectId)
    setVideoSource(subjectVideos[subjectId])
  }

  return (
    <div className="p-4">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center bg-[#5D4B8C] text-white p-4">
          <div className="flex items-center space-x-3">
            <div className="bg-white text-[#5D4B8C] p-1 rounded">
              <span className="font-bold text-xl">ℱ</span>
            </div>
            <h1 className="text-xl font-bold">Trenches Frog Science</h1>
          </div>
          <div className="flex space-x-2">
          <a
  href="#"
  className="border border-white rounded px-4 py-1 hover:bg-white hover:text-[#5D4B8C] transition-colors flex items-center justify-center"
>
  <RiTwitterXFill className="w-5 h-5" />
</a>
            <a
              href="#"
              className="border border-white rounded px-4 py-1 flex items-center hover:bg-white hover:text-[#5D4B8C] transition-colors"
            >
              <Play className="w-4 h-4 mr-2" /> LIVE FEED
            </a>
            <a
              href="#"
              className="border border-white rounded px-4 py-1 hover:bg-white hover:text-[#5D4B8C] transition-colors"
            >
              EXPORT
            </a>
            <a
              href="#"
              className="border border-white rounded px-4 py-1 hover:bg-white hover:text-[#5D4B8C] transition-colors"
            >
              ALERTS
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-4">
          {/* Left Column - 3/4 width */}
          <div className="lg:col-span-3 space-y-4">
            {/* Observation Chamber */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <div className="w-6 h-6 bg-[#5D4B8C] rounded-full flex items-center justify-center text-white mr-2">
                  <span className="text-xs">👁️</span>
                </div>
                <h2 className="text-[#5D4B8C] font-bold">OBSERVATION CHAMBER #4</h2>
              </div>

              <div className="relative bg-[#3A3A4D] rounded-lg overflow-hidden">
                <div className="aspect-video flex items-center justify-center">
                <video
  src={videoSource}
  autoPlay
  muted
  loop
  playsInline
  controls={false}
  className="w-full h-full object-cover [filter:invert(15%)_sepia(28%)_saturate(6%)_hue-rotate(339deg)_brightness(91%)_contrast(86%)]"
/>
                </div>
                <div className="absolute bottom-2 left-2 text-white text-sm">R-240</div>
                <div className="absolute bottom-2 right-2 flex space-x-2">
                  <button className="bg-gray-700 bg-opacity-50 p-1 rounded text-white hover:bg-opacity-80">
                    <Maximize2 className="w-4 h-4" />
                  </button>
                  <button className="bg-gray-700 bg-opacity-50 p-1 rounded text-white hover:bg-opacity-80">
                    <Video className="w-4 h-4" />
                  </button>
                  <button className="bg-gray-700 bg-opacity-50 p-1 rounded text-white hover:bg-opacity-80">
                    <Grid className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4">
              <div className="border rounded-lg p-4 text-center">
                <h3 className="text-[#5D4B8C] font-medium mb-2">ACTIVE SUBJECTS</h3>
                <div className="text-4xl font-bold">5</div>
                <div className="text-sm text-gray-500">In experiment</div>
              </div>
              <div className="border rounded-lg p-4 text-center">
                <h3 className="text-[#5D4B8C] font-medium mb-2">CHAMBER TEMP</h3>
                <div className="text-4xl font-bold">
                  24.3<span className="text-2xl">°C</span>
                </div>
                <div className="text-sm text-gray-500">23-26°C</div>
              </div>
              <div className="border rounded-lg p-4 text-center">
                <h3 className="text-[#5D4B8C] font-medium mb-2">HUMIDITY</h3>
                <div className="text-4xl font-bold">
                  52<span className="text-2xl">%</span>
                </div>
                <div className="text-sm text-gray-500">Optimal range&gt;</div>
              </div>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-3 gap-4">
              {/* Activity */}
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <Menu className="w-5 h-5 text-[#5D4B8C] mr-2" />
                    <h3 className="text-[#5D4B8C] font-medium">ACTIVITY</h3>
                  </div>
                  <div className="flex space-x-1">
                    <button className="bg-[#5D4B8C] text-white p-1 rounded">
                      <Video className="w-4 h-4" />
                    </button>
                    <button className="border border-[#5D4B8C] text-[#5D4B8C] p-1 rounded">
                      <Grid className="w-4 h-4" />
                    </button>
                    <button className="border border-[#5D4B8C] text-[#5D4B8C] p-1 rounded">
                      <Menu className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="w-full bg-[#E8E4F3] h-4 rounded-full mb-2">
                  <div
                    className="bg-[#5D4B8C] h-4 rounded-full transition-all duration-1000"
                    style={{ width: `${activityLevel}%` }}
                  ></div>
                </div>
                <div className="text-4xl font-bold text-center mb-2">
                  {activityLevel}
                  <span className="text-2xl">%</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500 border-t pt-2">
                  <div>LAST: {activityLevel - 1}%</div>
                  <div>AVG: 72%</div>
                  <div>AVG: 72%</div>
                </div>
              </div>

              {/* Food */}
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <Activity className="w-5 h-5 text-[#5D4B8C] mr-2" />
                    <h3 className="text-[#5D4B8C] font-medium">FOOD</h3>
                  </div>
                  <div className="flex space-x-1">
                    <button className="border border-[#5D4B8C] text-[#5D4B8C] p-1 rounded">
                      <Grid className="w-4 h-4" />
                    </button>
                    <button className="border border-[#5D4B8C] text-[#5D4B8C] p-1 rounded">
                      <Menu className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="w-full bg-[#E8E4F3] h-4 rounded-full mb-2">
                  <div
                    className="bg-[#5D4B8C] h-4 rounded-full transition-all duration-1000"
                    style={{ width: `${foodLevel}%` }}
                  ></div>
                </div>
                <div className="text-4xl font-bold text-center mb-2">
                  {foodLevel}
                  <span className="text-2xl">%</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500 border-t pt-2">
                  <div>LAST: {foodLevel - 1}%</div>
                  <div>AVG: 43%</div>
                  <div>AVG: 43%</div>
                </div>
              </div>

              {/* Water */}
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <Droplet className="w-5 h-5 text-[#5D4B8C] mr-2" />
                    <h3 className="text-[#5D4B8C] font-medium">WATER</h3>
                  </div>
                  <div className="flex space-x-1">
                    <button className="border border-[#5D4B8C] text-[#5D4B8C] p-1 rounded">
                      <Grid className="w-4 h-4" />
                    </button>
                    <button className="border border-[#5D4B8C] text-[#5D4B8C] p-1 rounded">
                      <Menu className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="w-full bg-[#E8E4F3] h-4 rounded-full mb-2">
                  <div
                    className="bg-[#5D4B8C] h-4 rounded-full transition-all duration-1000"
                    style={{ width: `${waterLevel}%` }}
                  ></div>
                </div>
                <div className="text-4xl font-bold text-center mb-2">
                  {waterLevel}
                  <span className="text-2xl">%</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500 border-t pt-2">
                  <div>LAST: {waterLevel - 1}%</div>
                  <div>AVG: 88%</div>
                  <div>AVG: 59%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - 1/4 width */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-4 h-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-[#5D4B8C] font-bold">SUBJECTS</h2>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search subjects..."
                    className="bg-[#C8BFE7] text-[#5D4B8C] rounded-md px-3 py-1 text-sm w-full"
                  />
                </div>
              </div>

              {/* Subject List */}
              <div className="space-y-3">
                <div
                  className={`${
                    selectedSubject === "FR-357" ? "bg-[#E8E4F3] border-[#5D4B8C]" : "bg-white border-gray-200"
                  } rounded-lg p-3 border-2 cursor-pointer transition-colors`}
                  onClick={() => handleSubjectClick("FR-357")}
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-100 rounded-lg mr-3 flex items-center justify-center">
                      <span className="text-2xl">
                        <img src="/frog-icon.png" alt="" />
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800">SUBJECT FR-357</h3>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">02/25 - 10:18AM</span>
                        <span className="text-gray-500">3 HOURS AGO</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`${
                    selectedSubject === "FR-358" ? "bg-[#E8E4F3] border-[#5D4B8C]" : "bg-white border-gray-200"
                  } rounded-lg p-3 border-2 cursor-pointer transition-colors`}
                  onClick={() => handleSubjectClick("FR-358")}
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-100 rounded-lg mr-3 flex items-center justify-center">
                      <span className="text-2xl"><img src="/frog-icon.png" alt="" /></span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800">SUBJECT FR-358</h3>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">02/24 - 5:44PM</span>
                        <span className="text-gray-500">16 HOURS AGO</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
