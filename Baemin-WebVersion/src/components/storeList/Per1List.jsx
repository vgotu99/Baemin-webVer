import './StoreList.css'
import StoreListForm from "../StoreListForm";
import { stores } from "../StoreList";
import { useNavigate } from 'react-router-dom';

const Per1List = ({ switchView }) => {
  const per1Stores = stores.filter((store) => store.sells.includes("per1"));
  const nav = useNavigate()


  return (
    <div className="storeList">
      {per1Stores.map((store) => (
        <StoreListForm
          key={store.id}
          storeName={store.name}
          star={store.star}
          tip={store.tip}
          lowest={store.lowest}
          type={store.type}
          onClick={() => nav(`/store/${store.id}`)}
        />
      ))}
    </div>
  );
};

export default Per1List;
