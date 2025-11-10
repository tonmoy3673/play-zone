"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Play, Pause, RotateCcw, RotateCw, Volume2, VolumeX, Settings, PictureInPicture2, Maximize } from "lucide-react"

export default function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
    }
  }

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = Number.parseFloat(e.target.value)
    setCurrentTime(newTime)
    if (videoRef.current) {
      videoRef.current.currentTime = newTime
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number.parseFloat(e.target.value)
    setVolume(newVolume)
    if (videoRef.current) {
      videoRef.current.volume = newVolume
    }
    if (newVolume > 0) {
      setIsMuted(false)
    }
  }

  const handleMute = () => {
    if (videoRef.current) {
      if (isMuted) {
        videoRef.current.volume = volume
        setIsMuted(false)
      } else {
        videoRef.current.volume = 0
        setIsMuted(true)
      }
    }
  }

  const handleSkip = (seconds: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.max(0, Math.min(duration, currentTime + seconds))
    }
  }

  const handleFullscreen = () => {
    if (containerRef.current) {
      if (!isFullscreen) {
        containerRef.current.requestFullscreen().catch(() => {})
      } else {
        document.exitFullscreen().catch(() => {})
      }
      setIsFullscreen(!isFullscreen)
    }
  }

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return "00:00"
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
  }

  return (
    <div ref={containerRef} className="relative w-full max-h-[460px] rounded-2xl overflow-hidden group">
      {/* Video Element */}
      <video
        ref={videoRef}
        className="w-full h-auto display-block"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Controls Container */}
      <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* Progress Bar */}
        <div className="mb-4 flex items-center gap-2">
          <span className="text-white text-sm font-medium min-w-10">{formatTime(currentTime)}</span>
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleProgressChange}
            className="flex-1 h-1 bg-gray-600 rounded-full appearance-none cursor-pointer accent-blue-500"
            style={{
              background: `linear-gradient(to right, rgb(59, 130, 246) 0%, rgb(59, 130, 246) ${
                duration ? (currentTime / duration) * 100 : 0
              }%, rgb(75, 85, 99) ${duration ? (currentTime / duration) * 100 : 0}%, rgb(75, 85, 99) 100%)`,
            }}
          />
          <span className="text-white text-sm font-medium min-w-10 text-right">{formatTime(duration)}</span>
        </div>

        {/* Control Buttons */}
        <div className="flex items-center justify-between">
          {/* Left Controls */}
          <div className="flex items-center gap-3">
            {/* Play/Pause */}
            <button
              onClick={handlePlayPause}
              className="text-white hover:text-blue-400 transition-colors p-2 hover:bg-white/10 rounded-lg"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>

            {/* Rewind 10s */}
            <button
              onClick={() => handleSkip(-10)}
              className="text-white hover:text-blue-400 transition-colors p-2 hover:bg-white/10 rounded-lg"
              aria-label="Rewind 10 seconds"
            >
              <RotateCcw size={20} />
            </button>

            {/* Forward 10s */}
            <button
              onClick={() => handleSkip(10)}
              className="text-white hover:text-blue-400 transition-colors p-2 hover:bg-white/10 rounded-lg"
              aria-label="Forward 10 seconds"
            >
              <RotateCw size={20} />
            </button>

            {/* Volume Control */}
            <div className="flex items-center gap-2 group/volume">
              <button
                onClick={handleMute}
                className="text-white hover:text-blue-400 transition-colors p-2 hover:bg-white/10 rounded-lg"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-0 group-hover/volume:w-20 transition-all duration-200 h-1 bg-gray-600 rounded-full appearance-none cursor-pointer accent-blue-500"
              />
            </div>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            {/* Settings */}
            <button
              className="text-white hover:text-blue-400 transition-colors p-2 hover:bg-white/10 rounded-lg"
              aria-label="Settings"
            >
              <Settings size={20} />
            </button>

            {/* Picture in Picture */}
            <button
              className="text-white hover:text-blue-400 transition-colors p-2 hover:bg-white/10 rounded-lg"
              aria-label="Picture in Picture"
            >
              <PictureInPicture2 size={20} />
            </button>

            {/* Fullscreen */}
            <button
              onClick={handleFullscreen}
              className="text-white hover:text-blue-400 transition-colors p-2 hover:bg-white/10 rounded-lg"
              aria-label="Fullscreen"
            >
              <Maximize size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
