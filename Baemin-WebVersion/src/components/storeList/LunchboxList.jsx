import StoreListForm from "../StoreListForm";
import { stores } from "../StoreList";
import Button from "../Button";

const LunchboxList = ({ switchView }) => {
  const lunchboxStores = stores.filter((store) =>
    store.sells.includes("lunchbox")
  );

  return (
    <div>
      {lunchboxStores.map((store) => (
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

export default LunchboxList;
