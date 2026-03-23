import React, { useCallback, useEffect, useId, useRef, useState } from "react"

import { cn } from "@/lib/utils"

interface DotPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number
  height?: number
  x?: number
  y?: number
  cx?: number
  cy?: number
  cr?: number
  className?: string
  glowRadius?: number
}

export function DotPattern({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  glowRadius = 150,
  ...props
}: DotPatternProps) {
  const id = useId()
  const containerRef = useRef<SVGSVGElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [mouse, setMouse] = useState({ x: -1000, y: -1000 })
  const rafRef = useRef<number>(0)
  const mouseTarget = useRef({ x: -1000, y: -1000 })

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setDimensions({ width: rect.width, height: rect.height })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      mouseTarget.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }
  }, [])

  const handleMouseLeave = useCallback(() => {
    mouseTarget.current = { x: -1000, y: -1000 }
  }, [])

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    const animate = () => {
      setMouse((prev) => ({
        x: prev.x + (mouseTarget.current.x - prev.x) * 0.15,
        y: prev.y + (mouseTarget.current.y - prev.y) * 0.15,
      }))
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
      cancelAnimationFrame(rafRef.current)
    }
  }, [handleMouseMove, handleMouseLeave])

  const cols = Math.ceil(dimensions.width / width)
  const rows = Math.ceil(dimensions.height / height)

  const dots = Array.from({ length: cols * rows }, (_, i) => {
    const col = i % cols
    const row = Math.floor(i / cols)
    const dotX = col * width + cx + x
    const dotY = row * height + cy + y
    const dx = dotX - mouse.x
    const dy = dotY - mouse.y
    const dist = Math.sqrt(dx * dx + dy * dy)
    const proximity = Math.max(0, 1 - dist / glowRadius)

    return { x: dotX, y: dotY, proximity }
  })

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "absolute inset-0 h-full w-full",
        className
      )}
      style={{ pointerEvents: "none" }}
      {...props}
    >
      <defs>
        <radialGradient id={`${id}-glow`}>
          <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>
      {dots.map((dot) => {
        const baseOpacity = 0.4
        const opacity = baseOpacity + dot.proximity * 0.6
        const radius = cr + dot.proximity * cr * 0.8
        return (
          <circle
            key={`${dot.x}-${dot.y}`}
            cx={dot.x}
            cy={dot.y}
            r={radius}
            fill={
              dot.proximity > 0
                ? `url(#${id}-glow)`
                : "currentColor"
            }
            opacity={opacity}
          />
        )
      })}
    </svg>
  )
}
