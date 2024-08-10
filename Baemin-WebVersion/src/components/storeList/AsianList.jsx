import { stores } from "../StoreList";
import StoreListForm from "../StoreListForm";
import Button from "../Button";

const AsianList = ({ switchView }) => {
  const asianStores = stores.filter((store) => store.sells.includes("asian"));

  return (
    <div className="storeList">
      <Button
        onClick={() => switchView("main")}
        type={"goToMain"}
        text={"메인으로 돌아가기"}
      />
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

export default AsianList;
