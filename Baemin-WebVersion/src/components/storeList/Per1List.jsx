import StoreListForm from "../StoreListForm";
import { stores } from "../StoreList";

const Per1List = ({ switchView }) => {
  const per1Stores = stores.filter((store) => store.sells.includes("per1"));

  return (
    <div>
      <button onClick={() => switchView("main")}>메인으로 돌아가기</button>
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
