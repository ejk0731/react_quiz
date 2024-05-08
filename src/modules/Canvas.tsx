import classNames from "classnames/bind";
import styles from "./Canvas.module.scss";
import { useState, useRef, useEffect } from "react";
import mapBackground from "./thumb.png";

const cx = classNames.bind(styles);

function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [rotate, setRotate] = useState<number>(0);
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
    setRotate(rotate + 10);
  };

  useEffect(() => {
    if (canvasRef.current) {
      // Q. 여기는 정해져 있는데 왜 useEffect 안에서 써야할까? 
      // Q. current는 어떠한 function 안에서 작동??
      const canvas = canvasRef.current;
      const ctx = canvasRef.current.getContext(
        "2d"
      ) as CanvasRenderingContext2D;
      canvas.width = 300;
      canvas.height = 100;
      canvas.style.background = `url(${mapBackground})`;
      // 


      // 1. 스크롤시 돌아감
      // 2. 스크롤 정도에 따라 동일하게 돌아가도록
      // 3. 다시 맨 위로 오면 원래 각도로 돌아가도록
      canvas.style.rotate = `${rotate}deg`;

      const canvasPosition =
        canvasRef.current?.getBoundingClientRect().top + window.scrollY;
      console.log(canvasPosition);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, [canvasRef, rotate, scroll]);

  return (
    <div className={cx("wrap")}>
      <div className={cx("box")}>나는 박스</div>
      <canvas
        id="canvas"
        ref={canvasRef}
        onScroll={() => {
          console.log("돌아간다");
          setRotate(rotate + 10);
        }}
      ></canvas>
    </div>
  );
}
export default Canvas;
