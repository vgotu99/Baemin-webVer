import { stores } from "../StoreList";
import StoreListForm from "../StoreListForm";
import Button from "../Button";

const BossamList = ({ switchView }) => {
  const bossamStores = stores.filter((store) => store.sells.includes("bossam"));

  return (
    <div>
      <Button
        onClick={() => switchView("main")}
        type={"goToMain"}
        text={"메인으로 돌아가기"}
      />
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
