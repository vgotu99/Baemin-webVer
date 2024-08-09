import StoreListForm from "../StoreListForm";
import { stores } from "../StoreList";

const MeatList = ({ switchView }) => {
  const meatStores = stores.filter((store) => store.sells.includes("meat"));

  return (
    <div>
      <button onClick={() => switchView("main")}>메인으로 돌아가기</button>
      {meatStores.map((store) => (
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
  
  export default MeatList