import "./style/Join.css";
import { useState } from "react";
import JoinHeader from "../components/JoinHeader";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

const Join = () => {
  const [curJoin, setCurJoin] = useState("login");

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
      <div className="join_wrapper">
      <JoinHeader />
      {renderJoin()}
      </div>
    </div>
  );
};

export default Join;
