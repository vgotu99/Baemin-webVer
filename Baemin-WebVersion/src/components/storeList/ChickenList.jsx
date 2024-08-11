import StoreListForm from "../StoreListForm";
import { stores } from "../StoreList";
import Button from "../Button";

const ChickenList = ({ switchView }) => {
  const chickenStores = stores.filter((store) =>
    store.sells.includes("chicken")
  );

  return (
    <div>
      {chickenStores.map((store) => (
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

export default ChickenList;
