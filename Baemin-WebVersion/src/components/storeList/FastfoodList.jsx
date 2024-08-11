import { stores } from "../StoreList";
import StoreListForm from "../StoreListForm";
import Button from "../Button";

const FastfoodList = ({ switchView }) => {
  const fastfoodStores = stores.filter((store) =>
    store.sells.includes("fastfood")
  );

  return (
    <div>
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
