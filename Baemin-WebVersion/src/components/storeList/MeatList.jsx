import './StoreList.css'
import StoreListForm from "../StoreListForm";
import { stores } from "../StoreList";

const MeatList = ({ switchView }) => {
  const meatStores = stores.filter((store) => store.sells.includes("meat"));

  return (
    <div className="storeList">
      {meatStores.map((store) => (
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
  
  export default MeatList