import { stores } from "../StoreList";
import StoreListForm from "../StoreListForm";

const BossamList = ({ switchView }) => {
  const bossamStores = stores.filter(
    (store) =>
      store.sells.includes('bossam')
  );

  return (
    <div>
      <button onClick={() => switchView("main")}>메인으로 돌아가기</button>
      {/* <StoreListForm storeName={store.name} star={store.star} tip={store.tip} lowest={store.lowest} /> */}
      {bossamStores.map((store) => (
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

export default BossamList;
