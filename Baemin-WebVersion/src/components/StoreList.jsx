import "./style/StoreList.css";
import { stores } from "./StoreListData";
import StoreListForm from "./StoreListForm";
import { useNavigate } from "react-router-dom";

const StoreList = ({ curView }) => {
  const Stores = stores.filter((store) => store.sells.includes(curView));
  const nav = useNavigate()

  return (
    <div className="storeList">
      {Stores.map((store) => (
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
