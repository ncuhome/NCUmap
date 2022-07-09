import { useTrackedStore } from '../store';
import './style.css'


export default function Loading() {
  const {loaded} = useTrackedStore()
  return (
    <section className="loadingContainer" style={{display:loaded?'none':'block'}}>
      <div className="loadingSVG">
        <svg className="svgOutline svgLoading" viewBox="0 0 33 33">
          <polygon
            className="svgTriangle"
            fill="none"
            stroke="#fff"
            stroke-width="1"
            points="16,1 32,32 1,32"
          />
        </svg>
        <svg className="svgInner svgLoading" viewBox="0 0 33 33">
          <polygon
            className="svgTriangle"
            fill="none"
            stroke="#fff"
            stroke-width="1"
            points="16,1 32,32 1,32"
          />
        </svg>
        <svg className="svgFill" viewBox="0 0 33 33">
          <polygon
            className="svgTriangle"
            fill="none"
            stroke="#fff"
            stroke-width="1.1"
            points="16,1 32,32 1,32"
          />
        </svg>
      </div>
      <div className="loadingText">
        <h1 className="loadingPercent">67%</h1>
        <p className="LG">LOADING...</p>
      </div>
      <p className="Tips">
        Use a powerful PC<s>(3090 above)</s> for a better experience
      </p>
    </section>
  );
}
