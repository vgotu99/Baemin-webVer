import "./style/Home.css";
import HeaderBar from "../components/HeaderBar";
import ProfileSub from "../components/ProfileSub";
import Main from "../components/Main";
import SideBar from "../components/SideBar";


const Home = () => {


  return (
    <div className="home">
      <SideBar />
      <div className="home_main">
        <HeaderBar />
        <Main />
      </div>
      <ProfileSub />
    </div>
  );
};

export default Home;
