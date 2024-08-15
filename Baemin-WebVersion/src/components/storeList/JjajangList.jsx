import './StoreList.css'
import StoreListForm from "../StoreListForm";
import { stores } from "../StoreList";


const JjajangList = ({ switchView }) => {
  const jjajangStores = stores.filter((store) => store.sells.includes("jjajang"));

  return (
    <div className='storeList'>
      {jjajangStores.map((store) => (
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
  
  export default JjajangList