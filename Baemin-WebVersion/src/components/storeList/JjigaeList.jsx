import StoreListForm from "../StoreListForm";
import { stores } from "../StoreList";
import Button from "../Button";

const JjigaeList = ({ switchView }) => {
  const jjigaeStores = stores.filter((store) => store.sells.includes("jjigae"));

  return (
    <div>
      {jjigaeStores.map((store) => (
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

export default JjigaeList;