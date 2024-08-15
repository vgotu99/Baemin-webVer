import "./style/Main.css";

import MainItem from "./MainItem";
import MainEvent from "./MainEvent";

const Main = ({ switchView }) => {
  return (
    <div className="main">
      <MainEvent />
      <MainItem switchView={switchView}/>
    </div>
  );
};

export default Main;
