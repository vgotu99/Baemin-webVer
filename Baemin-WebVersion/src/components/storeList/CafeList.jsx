import StoreListForm from "../StoreListForm";
import { stores } from "../StoreList";
import Button from "../Button";

const CafeList = ({ switchView }) => {
  const cafeStores = stores.filter((store) => store.sells.includes("cafe"));

  return (
    <div>
      <Button
        onClick={() => switchView("main")}
        type={"goToMain"}
        text={"메인으로 돌아가기"}
      />
      {cafeStores.map((store) => (
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

export default CafeList;
