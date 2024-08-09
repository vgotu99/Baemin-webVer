import StoreListForm from "../StoreListForm";
import { stores } from "../StoreList";

const PastaList = ({ switchView }) => {
  const pastaStores = stores.filter((store) => store.sells.includes("pasta"));

  return (
    <div>
      <button onClick={() => switchView("main")}>메인으로 돌아가기</button>
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