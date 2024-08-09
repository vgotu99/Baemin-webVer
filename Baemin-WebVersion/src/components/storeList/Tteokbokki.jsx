import StoreListForm from "../StoreListForm";
import { stores } from "../StoreList";

const TteokbokkiList = ({ switchView }) => {
  const tteokbokkiStores = stores.filter((store) => store.sells.includes("tteokbokki"));

  return (
    <div>
      <button onClick={() => switchView("main")}>메인으로 돌아가기</button>
      {tteokbokkiStores.map((store) => (
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

  export default TteokbokkiList