import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const BlockGoBack = ({ children, switchView, curView }) => {
  const nav = useNavigate();
  const location = useLocation();

  const handleGoBack = () => {

    if (location.pathname === '/' && curView ==='main') {
        nav('/')
    }
    if (location.pathname === "/" && curView !== "main") {
      nav("/");
      switchView("main");
    }
  };

  window.addEventListener("popstate", handleGoBack);

  return children;
};

export default BlockGoBack;
