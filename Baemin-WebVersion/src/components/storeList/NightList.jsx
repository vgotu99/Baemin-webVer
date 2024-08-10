import StoreListForm from "../StoreListForm";
import { stores } from "../StoreList";
import Button from "../Button";

const NightList = ({ switchView }) => {
  const nightStores = stores.filter((store) => store.sells.includes("night"));

  return (
    <div>
      <Button
        onClick={() => switchView("main")}
        type={"goToMain"}
        text={"메인으로 돌아가기"}
      />
      {nightStores.map((store) => (
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
  
  export default NightList