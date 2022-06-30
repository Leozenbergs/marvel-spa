import './lastReleases.css'

export default function LastRelease({ lastUpdated }) {

  return !!lastUpdated && (
    <div className="mt-1">
      <b>Último quadrinho:</b> {new Date(lastUpdated).toLocaleDateString()}
    </div>
  )
}