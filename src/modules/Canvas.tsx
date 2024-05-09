import classNames from "classnames/bind";
import styles from "./Canvas.module.scss";
import { useState, useRef, useEffect } from "react";
import mapBackground from "./thumb.png";
import Layout from "../common/Layout";

const cx = classNames.bind(styles);

function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scroll, setScroll] = useState(0);
  const [rotateDeg, setRotateDeg] = useState<number>(0);
  const [isRotate, setIsRotate] = useState(false);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    const scrollY = window.scrollY;
    const screenHeight = document.body.offsetHeight;
    const main = document.getElementById("canvas") as HTMLElement;
    const footer = document.getElementById("footer") as HTMLElement;

    const mainPos = Math.floor(scrollY + main.getBoundingClientRect().top);
    const footerPos = Math.floor(scrollY + footer.getBoundingClientRect().top);

    setIsRotate(
      screenHeight >= mainPos &&
        scrollY < mainPos + main.clientHeight
    );
    console.log(isRotate, rotateDeg);

    if (canvasRef.current) {
      // Q. 여기는 정해져 있는데 왜 useEffect 안에서 써야할까?
      // Q. current는 어떠한 function 안에서 작동??
      const canvas = canvasRef.current;
      // const ctx = canvasRef.current.getContext(
      //   "2d"
      // ) as CanvasRenderingContext2D;
      canvas.width = 300;
      canvas.height = 100;
      canvas.style.background = `url(${mapBackground})`;
      //
      if (isRotate) {
        console.log("main 맞음");
        setRotateDeg(rotateDeg + 10);
        canvas.style.rotate = `${rotateDeg}deg`;
      } else {
        console.log("main 아님");
      }

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll); //clean up
      };

      // 1. 스크롤시 돌아감
      // 2. 스크롤 정도에 따라 동일하게 돌아가도록
      // 3. 다시 맨 위로 오면 원래 각도로 돌아가도록
    }
  }, [canvasRef, scroll]);

  return (
    <Layout>
      <div className={cx("canvas_box")}>
        <canvas id="canvas" ref={canvasRef}></canvas>
      </div>
    </Layout>
  );
}
export default Canvas;
