import "./style/Home.css";
import { useState } from "react";
import HeaderBar from "../components/HeaderBar";
import ProfileSub from "../components/ProfileSub";
import Main from "../components/Main";
import SideBar from "../components/SideBar";
import CategoryBar from "../components/CategoryBar";
import Per1List from "../components/storeList/Per1List";
import BossamList from "../components/storeList/BossamList";
import JjigaeListList from "../components/storeList/JjigaeList";
import SushiList from "../components/storeList/SushiList";
import PizzaList from "../components/storeList/PizzaList";
import MeatList from "../components/storeList/MeatList";
import NightList from "../components/storeList/NightList";
import PastaList from "../components/storeList/PastaList";
import ChickenList from "../components/storeList/ChickenList";
import JjajangList from "../components/storeList/JjajangList";
import AsianList from "../components/storeList/AsianList";
import RiceList from "../components/storeList/RiceList";
import LunchboxList from "../components/storeList/LunchboxList";
import TteokbokkiList from "../components/storeList/Tteokbokki";
import CafeList from "../components/storeList/CafeList";
import FastfoodList from "../components/storeList/FastfoodList";

const Home = () => {
  const [curView, setCurView] = useState("main");

  const switchView = (view) => {
    setCurView(view)
  };

  const renderMain = () => {
    switch (curView) {
      case "main":
        return <Main switchView={switchView} />;
      case "per1":
        return <Per1List switchView={switchView} />;
      case "bossam":
        return <BossamList switchView={switchView} />;
      case "jjigae":
        return <JjigaeListList switchView={switchView} />;
      case "sushi":
        return <SushiList switchView={switchView} />;
      case "pizza":
        return <PizzaList switchView={switchView} />;
      case "meat":
        return <MeatList switchView={switchView} />;
      case "night":
        return <NightList switchView={switchView} />;
      case "pasta":
        return <PastaList switchView={switchView} />;
      case "chicken":
        return <ChickenList switchView={switchView} />;
      case "jjajang":
        return <JjajangList switchView={switchView} />;
      case "asian":
        return <AsianList switchView={switchView} />;
      case "rice":
        return <RiceList switchView={switchView} />;
      case "lunchbox":
        return <LunchboxList switchView={switchView} />;
      case "tteokbokki":
        return <TteokbokkiList switchView={switchView} />;
      case "cafe":
        return <CafeList switchView={switchView} />;
      case "fastfood":
        return <FastfoodList switchView={switchView} />;
      default:
        return <Main />;

    }
  };

  console.log(curView)
  console.log(switchView)

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
      <SideBar switchView={switchView}/>
      </div>
      <div className="home_main">
        <div className="main_header">
        {renderHeader()}
        </div>
        <div className="main_content">
        {renderMain()}
        </div>
      </div>
      <div className="home_profile">
      <ProfileSub />
      </div>
    </div>
  );
};

export default Home;
