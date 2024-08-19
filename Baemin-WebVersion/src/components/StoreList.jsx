import "./style/StoreList.css";
import StoreListForm from "./StoreListForm";
import { useNavigate } from "react-router-dom";

const StoreList = ({ curView, stores }) => {
  const filteredStores =
    curView === "search"
      ? stores
      : stores.filter((store) => store.sells.includes(curView));

  const nav = useNavigate();

  return (
    <div className="storeList">
      {filteredStores.map((store) => (
        <StoreListForm
          key={store.id}
          storeName={store.name}
          star={store.star}
          tip={store.tip}
          lowest={store.lowest}
          type={store.type}
          onClick={() => nav(`store/${store.id}`)}
        />
      ))}
    </div>
  );
};

export default StoreList;
