import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Join from "./pages/Join";
import Profile from "./pages/Profile";
import StoreInfo from "./pages/StoreInfo";
import ProtectedRoute from "./components/ProtectedRoute";
import Like from "./pages/Like";
import { stores } from "./components/StoreListData";

function App() {
  return (
    <Routes>
      <Route path="/join" element={<Join />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/store/:id"
        element={
          <ProtectedRoute>
            <StoreInfo />
          </ProtectedRoute>
        }
      />
      <Route
        path="/like"
        element={
          <ProtectedRoute>
            <Like />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
