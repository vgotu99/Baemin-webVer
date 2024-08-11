import StoreListForm from "../StoreListForm";
import { stores } from "../StoreList";
import Button from "../Button";

const Per1List = ({ switchView }) => {
  const per1Stores = stores.filter((store) => store.sells.includes("per1"));

  return (
    <div>
      {per1Stores.map((store) => (
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

export default Per1List;
