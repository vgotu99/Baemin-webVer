import './StoreList.css'
import StoreListForm from "../StoreListForm";
import { stores } from "../StoreList";


const TteokbokkiList = ({ switchView }) => {
  const tteokbokkiStores = stores.filter((store) => store.sells.includes("tteokbokki"));

  return (
    <div className="storeList">
      {tteokbokkiStores.map((store) => (
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

  export default TteokbokkiList