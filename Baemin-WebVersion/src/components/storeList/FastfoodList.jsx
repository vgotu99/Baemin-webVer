import { stores } from "../StoreList";
import StoreListForm from "../StoreListForm";

const FastfoodList = ({ switchView }) => {
  const fastfoodStores = stores.filter((store) => store.sells.includes("fastfood"));

  return (
    <div>
      <button onClick={() => switchView("main")}>메인으로 돌아가기</button>
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
  
  export default FastfoodList