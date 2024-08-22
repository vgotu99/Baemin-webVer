import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../util/Auth";

const ProtectedRoute_isLogin = ({ children }) => {

  if (isAuthenticated()) {
    alert(
      "‼ 잘못된 접근입니다.\n이미 로그인되었습니다. 홈페이지로 이동됩니다."
    );
    return <Navigate to='/' />
  }

  return children;
};

export default ProtectedRoute_isLogin;
