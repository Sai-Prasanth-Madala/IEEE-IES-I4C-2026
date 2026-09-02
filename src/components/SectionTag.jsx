export default function SectionTag({ children, tone = 'light' }) {
  const color = tone === 'dark' ? 'text-teal border-teal/40' : 'text-blue border-blue/30'
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border ${color} font-mono text-[11px] tracking-[0.18em] uppercase px-3 py-1`}
    >
      <span className="via" />
      {children}
    </span>
  )
}
