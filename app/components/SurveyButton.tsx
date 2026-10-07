// Floating badge in the lower-left corner that links to the reader survey.
// The ring of text spins; the arrow in the middle stays still so it reads as a button.
// A plain <a> (not next/link) because /survey is a static HTML file served via a rewrite.
export default function SurveyButton() {
  return (
    <a href="/survey" className="survey-badge" aria-label="Take the reader survey">
      <svg className="survey-badge-ring" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <path id="survey-badge-circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
        </defs>
        <text>
          <textPath href="#survey-badge-circle" textLength="230">
            READER SURVEY · TAKE THE SURVEY ·
          </textPath>
        </text>
      </svg>
      <span className="survey-badge-center" aria-hidden="true">
        →
      </span>
    </a>
  )
}
