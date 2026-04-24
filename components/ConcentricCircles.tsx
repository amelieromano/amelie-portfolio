'use client'

interface ConcentricCirclesProps {
  className?: string
  size?: number
  opacity?: number
}

export default function ConcentricCircles({
  className = '',
  size = 600,
  opacity = 0.15,
}: ConcentricCirclesProps) {
  const center = size / 2
  const rings = [
    { r: size * 0.48, color: '#B8456B', width: size * 0.025 },
    { r: size * 0.40, color: '#E8907A', width: size * 0.022 },
    { r: size * 0.32, color: '#B8456B', width: size * 0.02 },
    { r: size * 0.24, color: '#E8907A', width: size * 0.018 },
    { r: size * 0.16, color: '#B8456B', width: size * 0.016 },
    { r: size * 0.08, color: '#E8907A', width: size * 0.015 },
  ]

  // Dot ring around second-innermost circle
  const dotRingR = size * 0.36
  const dotCount = 32

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    >
      {rings.map((ring, i) => (
        <circle
          key={i}
          cx={center}
          cy={center}
          r={ring.r}
          fill="none"
          stroke={ring.color}
          strokeWidth={ring.width}
        />
      ))}
      {/* Decorative dot cluster */}
      {Array.from({ length: dotCount }).map((_, i) => {
        const angle = (i / dotCount) * Math.PI * 2
        return (
          <circle
            key={`dot-${i}`}
            cx={center + Math.cos(angle) * dotRingR}
            cy={center + Math.sin(angle) * dotRingR}
            r={size * 0.007}
            fill="#E8907A"
          />
        )
      })}
      {/* Inner filled circle — subtle */}
      <circle cx={center} cy={center} r={size * 0.04} fill="#B8456B" opacity={0.4} />
    </svg>
  )
}
