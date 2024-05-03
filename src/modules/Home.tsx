import classNames from "classnames/bind";
import styles from "./Home.module.scss";
const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx("wrap")}>
      <h1>Welcome to React Quiz</h1>
    </div>
  );
}
export default Home;
