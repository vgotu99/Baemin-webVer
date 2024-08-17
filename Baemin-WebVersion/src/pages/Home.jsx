import "./style/Home.css";
import { useState } from "react";
import HeaderBar from "../components/HeaderBar";
import ProfileSub from "../components/ProfileSub";
import Main from "../components/Main";
import SideBar from "../components/SideBar";
import CategoryBar from "../components/CategoryBar";
import Button from "../components/Button";
import { stores } from "../components/StoreListData";
import StoreList from "../components/StoreList";

const Home = () => {
  const [curView, setCurView] = useState("main");

  const switchView = (view) => {
    setCurView(view);
  };

  const storeType = stores.map((store) => store.type);
  const whichStore = stores.filter((store) => store.type.includes(storeType));

  const renderMain = () => {
    switch (curView) {
      case "main":
        return <Main switchView={switchView} />;
      case curView:
        return <StoreList curView={curView} />;
      default:
        return <Main />;
    }
  };

  const renderHeader = () => {
    return curView === "main" ? (
      <HeaderBar />
    ) : (
      <CategoryBar switchView={switchView} curView={curView} />
    );
  };

  return (
    <div className="home">
      <div className="home_sideBar">
        <SideBar switchView={switchView} />
      </div>
      <div className="home_main">
        <div className="main_header">{renderHeader()}</div>
        <div className="main_content">{renderMain()}</div>
      </div>
      <div className="home_profile">
        <Button type={"home_cart"} imgType={"cart"} />
        <ProfileSub />
      </div>
    </div>
  );
};

export default Home;
