import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Join from "./pages/Join";
import Profile from "./pages/Profile";
import StoreInfo from "./pages/StoreInfo";
import { stores } from "./components/StoreList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/join" element={<Join />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/store/:id" element={<StoreInfo />} />
    </Routes>
  );
}

export default App;
