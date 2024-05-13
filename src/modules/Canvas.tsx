import classNames from "classnames/bind";
import styles from "./Canvas.module.scss";
import { useState, useRef, useEffect } from "react";
import mapBackground from "./thumb.png";
import Layout from "../common/Layout";

const cx = classNames.bind(styles);

function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [rotateDeg, setRotateDeg] = useState<number>(0);
  const [isRotate, setIsRotate] = useState(false);

  // useEffect(() => {
  //   const scrollY = window.scrollY;
  //   const screenHeight = document.body.offsetHeight;
  //   const main = document.getElementById("canvas") as HTMLElement;
  //   // const mainPos = Math.floor(scrollY + main.getBoundingClientRect().top);
  //   const mainPos = main.getBoundingClientRect().top;
  //   // console.log(scrollY, mainPos)
  //   window.addEventListener("wheel", (e) => {
  //     // if (isRotate) {
  //       if (e.deltaY > 0) setRotateDeg(rotateDeg + 10);
  //       if (e.deltaY < 0) setRotateDeg(rotateDeg - 10);
  //     // }
  //     setIsRotate(
  //       mainPos >= scrollY ||
  //       // screenHeight >= mainPos > 0 || scrollY < mainPos + main.clientHeight
  //     );
  //   });

  //   console.log('여긴언제?', rotateDeg, isRotate)

  //   if (canvasRef.current) {
  //     // Q. 여기는 정해져 있는데 왜 useEffect 안에서 써야할까?
  //     // Q. current는 어떠한 function 안에서 작동??
  //     const canvas = canvasRef.current;
  //     canvas.width = 300;
  //     canvas.height = 100;
  //     canvas.style.background = `url(${mapBackground})`;
  //     canvas.style.rotate = `${rotateDeg}deg`;
  //     //
  //   }
  // }, [canvasRef, rotateDeg, window]);

  useEffect(() => {
    // window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // true 일때 간격......을?????? 두고 회전
          console.log("보인다보여");
          window.addEventListener("wheel", (e) => {
            if (e.deltaY > 0) setRotateDeg(rotateDeg + 10);
            if (e.deltaY < 0) setRotateDeg(rotateDeg - 10);
          });
        } else {
        }
      },
      { threshold: 0.01 }
    );
    
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      canvas.width = 300;
      canvas.height = 100;
      canvas.style.background = `url(${mapBackground})`;
      observer.observe(canvasRef.current);
      canvasRef.current.style.rotate = `${rotateDeg}deg`;
    }

    // return () => {
    //   if (canvasRef.current) {
    //     observer.unobserve(canvasRef.current);
    //     console.log("안보여~")
    //   }
    // };
  }, [rotateDeg]);

  return (
    <Layout>
      <div className={cx("canvas_box")}>
        <canvas id="canvas" ref={canvasRef}></canvas>
      </div>
    </Layout>
  );
}
export default Canvas;
