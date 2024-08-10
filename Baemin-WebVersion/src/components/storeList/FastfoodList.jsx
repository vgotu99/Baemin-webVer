import { stores } from "../StoreList";
import StoreListForm from "../StoreListForm";
import Button from "../Button";

const FastfoodList = ({ switchView }) => {
  const fastfoodStores = stores.filter((store) =>
    store.sells.includes("fastfood")
  );

  return (
    <div>
      <Button
        onClick={() => switchView("main")}
        type={"goToMain"}
        text={"메인으로 돌아가기"}
      />
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

export default FastfoodList;
