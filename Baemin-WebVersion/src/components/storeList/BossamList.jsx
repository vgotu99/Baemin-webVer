import './StoreList.css'
import StoreListForm from "../StoreListForm";
import { stores } from "../StoreList";


const BossamList = ({ switchView }) => {
  const bossamStores = stores.filter((store) => store.sells.includes("bossam"));

  return (
    <div className='storeList'>
      {bossamStores.map((store) => (
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

export default BossamList;
