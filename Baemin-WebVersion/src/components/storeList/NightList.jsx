import StoreListForm from "../StoreListForm";
import { stores } from "../StoreList";
import Button from "../Button";

const NightList = ({ switchView }) => {
  const nightStores = stores.filter((store) => store.sells.includes("night"));

  return (
    <div>
      {nightStores.map((store) => (
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
  
  export default NightList