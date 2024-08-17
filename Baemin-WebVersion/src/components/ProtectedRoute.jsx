import { Navigate, useLocation } from "react-router-dom";
import { isAuthenticated } from "../util/Auth";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();

  if (!isAuthenticated()) {
    alert("서비스를 이용하시려면 회원가입 및 로그인을 먼저 해주세요");
    return <Navigate to="/join" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;