import StoreListForm from "../StoreListForm";
import { stores } from "../StoreList";
import Button from "../Button";

const PastaList = ({ switchView }) => {
  const pastaStores = stores.filter((store) => store.sells.includes("pasta"));

  return (
    <div>
      {pastaStores.map((store) => (
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
  
  export default PastaList