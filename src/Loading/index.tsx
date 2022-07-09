import { useDetectGPU, useProgress } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import "./style.css";

export default function Loading() {
  const [enter, setEnter] = useState(false);
  const { active, progress } = useProgress();
  const ref = useRef<HTMLDivElement>(null!);
  const GPUTier = useDetectGPU();
  useEffect(() => {
    enter &&
      setTimeout(() => {
        ref.current.style.display = "none";
      }, 500);
  }, [enter]);
  return (
    <section
      ref={ref}
      className={
        GPUTier.isMobile ? "loadingContainer mobile" : "loadingContainer"
      }
      style={{ opacity: enter ? 0 : 1 }}
    >
      <div className="loadingSVG">
        <svg className="svgOutline svgLoading" viewBox="0 0 33 33">
          <polygon
            className="svgTriangle"
            fill="none"
            stroke="#fff"
            strokeWidth="1"
            points="16,1 32,32 1,32"
          />
        </svg>
        <svg className="svgInner svgLoading" viewBox="0 0 33 33">
          <polygon
            className="svgTriangle"
            fill="none"
            stroke="#fff"
            strokeWidth="1"
            points="16,1 32,32 1,32"
          />
        </svg>
        <svg className="svgFill" viewBox="0 0 33 33">
          <polygon
            className="svgTriangle"
            fill="none"
            stroke="#fff"
            strokeWidth="1.1"
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
