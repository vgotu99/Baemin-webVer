import StoreListForm from "../StoreListForm";
import { stores } from "../StoreList";
import Button from "../Button";

const RiceList = ({ switchView }) => {
  const riceStores = stores.filter((store) => store.sells.includes("rice"));

  return (
    <div>
      {riceStores.map((store) => (
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
  
  export default RiceList