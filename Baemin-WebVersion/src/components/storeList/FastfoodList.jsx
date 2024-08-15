import './StoreList.css'
import StoreListForm from "../StoreListForm";
import { stores } from "../StoreList";


const FastfoodList = ({ switchView }) => {
  const fastfoodStores = stores.filter((store) =>
    store.sells.includes("fastfood")
  );

  return (
    <div className="storeList">
      {fastfoodStores.map((store) => (
        <StoreListForm
          key={store.id}
          storeName={store.name}
          star={store.star}
          tip={store.tip}
          lowest={store.lowest}
          type={store.type}
        />
      ))}
    </div>
  );
};

export default FastfoodList;
