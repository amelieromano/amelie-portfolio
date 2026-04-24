'use client'

export default function PrintButton() {
  return (
    <button
      className="cv-print-btn"
      onClick={() => window.print()}
    >
      print / save as PDF
    </button>
  )
}
