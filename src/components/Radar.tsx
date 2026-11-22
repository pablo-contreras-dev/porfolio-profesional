type Axis = { label: string; value: number }

export function Radar({ axes }: { axes: Axis[] }) {
  const size = 260
  const cx = size / 2
  const cy = size / 2
  const maxR = 88
  const levels = 4
  const n = axes.length

  const point = (i: number, ratio: number) => {
    const angle = -Math.PI / 2 + (i * 2 * Math.PI) / n
    return [cx + Math.cos(angle) * maxR * ratio, cy + Math.sin(angle) * maxR * ratio]
  }

  const polygon = (ratio: number) =>
    axes.map((_, i) => point(i, ratio).join(",")).join(" ")

  const data = axes.map((a, i) => point(i, a.value / 5).join(",")).join(" ")

  return (
    <svg className="radar" viewBox={`0 0 ${size} ${size}`} role="img" aria-label="Focus radar">
      {[...Array(levels)].map((_, i) => (
        <polygon
          key={i}
          points={polygon((i + 1) / levels)}
          className="radar-grid"
        />
      ))}
      {axes.map((_, i) => {
        const [x, y] = point(i, 1)
        return <line key={i} x1={cx} y1={cy} x2={x} y2={y} className="radar-axis" />
      })}
      <polygon points={data} className="radar-fill" />
      {axes.map((a, i) => {
        const [x, y] = point(i, 1.28)
        return (
          <text key={a.label} x={x} y={y} className="radar-label">
            {a.label}
          </text>
        )
      })}
    </svg>
  )
}
