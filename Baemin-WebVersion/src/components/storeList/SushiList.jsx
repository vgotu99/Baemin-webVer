import './StoreList.css'
import StoreListForm from "../StoreListForm";
import { stores } from "../StoreList";

const SushiList = ({ switchView }) => {
  const sushiStores = stores.filter((store) => store.sells.includes("sushi"));

  return (
    <div className="storeList">
      {sushiStores.map((store) => (
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
  
  export default SushiList;