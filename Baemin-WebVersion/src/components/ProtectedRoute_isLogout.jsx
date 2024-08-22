import { Navigate, useLocation } from "react-router-dom";
import { isAuthenticated } from "../util/Auth";

const ProtectedRoute_isLogout = ({ children, switchView }) => {
  const location = useLocation();

  if (!isAuthenticated()) {
    if (location.pathname == "/") {
      console.log("test1");
      if (
        window.confirm(
          "서비스를 이용하시려면 로그인해주세요.\n로그인 페이지로 이동하시겠습니까?"
        )
      ) {
        return <Navigate to="/join" />;
      } else {
        switchView("main");
        return <Navigate to="/" />;
      }
    } else {
      if (
        window.confirm(
          "서비스를 이용하시려면 로그인해주세요.\n로그인 페이지로 이동하시겠습니까?"
        )
      ) {
        return <Navigate to="/join" />;
      } else {
        return <Navigate to="/" />;
      }
    }
  }

  return children;
};

export default ProtectedRoute_isLogout;
