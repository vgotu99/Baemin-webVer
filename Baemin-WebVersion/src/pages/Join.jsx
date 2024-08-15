import "./style/Join.css";
import { useState } from "react";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Join = () => {
  const [curJoin, setCurJoin] = useState("login");
  const nav = useNavigate()

  const switchJoin = (join) => {
    setCurJoin(join);
  };

  const renderJoin = () => {
    switch (curJoin) {
      case "login":
        return <Login switchJoin={switchJoin} />;
      case "signup":
        return <SignUp switchJoin={switchJoin} />;
      default:
        return <Login />;
    }
  };

  return (
    <div className="join">
        <Button onClick={() => nav("/")} type={"join"} imgType={"mainLogo"} />
      <div className="join_wrapper">
        {renderJoin()}
      </div>
    </div>
  );
};

export default Join;
