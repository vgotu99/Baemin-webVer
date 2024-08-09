import { stores } from "../StoreList";
import StoreListForm from "../StoreListForm";

const AsianList = ({ switchView }) => {
  const asianStores = stores.filter((store) => store.sells.includes("asian"));

  return (
    <div>
      <button onClick={() => switchView("main")}>메인으로 돌아가기</button>
      {asianStores.map((store) => (
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
  
  export default AsianList