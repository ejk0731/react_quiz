import classNames from "classnames/bind";
import styles from "./Canvas.module.scss";
import { useState, useRef, useEffect } from "react";
import mapBackground from "./thumb.png";
import Layout from "../common/Layout";

const cx = classNames.bind(styles);

function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState<number>(10);

  // 스크롤 부드럽게

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // true 일때 간격......을?????? 두고 회전
          console.log("보인다보여");
        } else {
        }
      },
      { threshold: 1 }
    );

    if (progressRef.current) {
      const progress = progressRef.current;
      progress.style.width = `${scrolled}%`;

      window.addEventListener("wheel", (e) => {
        if (canvasRef.current) {
          const canvas = canvasRef.current;
          canvas.width = 100;
          canvas.height = 100;
          canvas.style.background = `url(${mapBackground})`;
          canvas.style.rotate = `${scrolled + 20}deg`;
          observer.observe(canvasRef.current);
        }
        const scrollHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        setScrolled((window.scrollY / scrollHeight) * 100);
      });
    }

    // return () => {
    //   if (canvasRef.current) {
    //     observer.unobserve(canvasRef.current);
    //     console.log("안보여~")
    //   }
    // };
  }, [scrolled]);

  return (
    <Layout>
      <h1>스크롤을 내려보세요</h1>
      <div className={cx("canvas_box")}>
        <div className={cx("progress_bar")} ref={progressRef}></div>
        <div className={cx("canvas_wrap")}>
          <canvas id="canvas" ref={canvasRef}></canvas>
        </div>
      </div>
    </Layout>
  );
}
export default Canvas;
