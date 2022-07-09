import { useDetectGPU, useProgress } from "@react-three/drei";
import { useState } from "react";
import "./style.css";

export default function Loading() {
  const [enter, setEnter] = useState(false);
  const { active, progress } = useProgress();
  const GPUTier = useDetectGPU();
  return (
    <section
      className={GPUTier.isMobile ? "loadingContainer mobile" : "loadingContainer"}
      style={{ display: enter ? "none" : "block" }}
    >
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
        <h1 className="loadingPercent">{Math.floor(progress)}%</h1>
        {active ? (
          <p className="LG">加载中...</p>
        ) : (
          <p className="LG" onClick={() => setEnter(true)}>
            进入
          </p>
        )}
      </div>
      <p className="Tips">
        Use a powerful PC<s>(3090 above)</s> for a better experience
      </p>
    </section>
  );
}
