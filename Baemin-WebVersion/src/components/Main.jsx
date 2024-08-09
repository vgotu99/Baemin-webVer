import "./style/Main.css";

import MainItem from "./MainItem";
import MainEvent from "./MainEvent";

const Main = ({ switchView }) => {
  return (
    <div className="main">
      {/* 이벤트 내용 */}
      <MainEvent />
      {/* 메뉴별 카테고리 */}
      <MainItem switchView={switchView}/>
    </div>
  );
};

export default Main;
