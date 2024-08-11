import StoreListForm from "../StoreListForm";
import { stores } from "../StoreList";
import Button from "../Button";

const SushiList = ({ switchView }) => {
  const sushiStores = stores.filter((store) => store.sells.includes("sushi"));

  return (
    <div>
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