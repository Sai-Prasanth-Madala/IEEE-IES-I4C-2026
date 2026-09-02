export default function CircuitTrace({ variant = 'light' }) {
  const stroke = variant === 'dark' ? 'rgba(255,255,255,0.25)' : 'rgba(10,30,61,0.18)'
  const via = variant === 'dark' ? '#17B8A6' : '#145DA0'

  return (
    <div className="relative h-10 w-full overflow-hidden" aria-hidden="true">
      <svg
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <path
          d="M0 20 H420 L450 5 H620 L650 20 H1200"
          fill="none"
          stroke={stroke}
          strokeWidth="1.5"
        />
        <circle cx="450" cy="5" r="4" fill={via} />
        <circle cx="650" cy="20" r="4" fill={via} />
        <circle cx="100" cy="20" r="3" fill={via} opacity="0.6" />
        <circle cx="1080" cy="20" r="3" fill={via} opacity="0.6" />
      </svg>
    </div>
  )
}
