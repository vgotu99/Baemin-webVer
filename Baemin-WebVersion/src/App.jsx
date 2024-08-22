import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Join from "./pages/Join";
import Profile from "./pages/Profile";
import StoreInfo from "./pages/StoreInfo";
import ProtectedRoute_isLogout from "./components/ProtectedRoute_isLogout";
import ProtectedRoute_isLogin from "./components/ProtectedRoute_isLogin";
import Like from "./pages/Like";
import Cart from "./pages/Cart";
import OrderList from "./pages/OrderList";
import Review from "./pages/Review";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route
        path="/join"
        element={
          <ProtectedRoute_isLogin>
            <Join />
          </ProtectedRoute_isLogin>
        }
      />
      <Route path="/" element={<Home />} />
      <Route
        path="/profile"
        element={
          <ProtectedRoute_isLogout>
            <Profile />
          </ProtectedRoute_isLogout>
        }
      />
      <Route
        path="/store/:id"
        element={
          <ProtectedRoute_isLogout>
            <StoreInfo />
          </ProtectedRoute_isLogout>
        }
      />
      <Route
        path="/profile/like"
        element={
          <ProtectedRoute_isLogout>
            <Like />
          </ProtectedRoute_isLogout>
        }
      />
      <Route
        path="/profile/cart"
        element={
          <ProtectedRoute_isLogout>
            <Cart />
          </ProtectedRoute_isLogout>
        }
      />
      <Route
        path="/profile/orderlist"
        element={
          <ProtectedRoute_isLogout>
            <OrderList />
          </ProtectedRoute_isLogout>
        }
      />
      <Route
        path="/profile/review"
        element={
          <ProtectedRoute_isLogout>
            <Review />
          </ProtectedRoute_isLogout>
        }
      />
      <Route path="*" element={<NotFound/ >}/>
    </Routes>
  );
}

export default App;
