import StoreListForm from "../StoreListForm";
import { stores } from "../StoreList";

const PizzaList = ({ switchView }) => {
  const pizzaStores = stores.filter((store) => store.sells.includes("pizza"));

  return (
    <div>
      <button onClick={() => switchView("main")}>메인으로 돌아가기</button>
      {pizzaStores.map((store) => (
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

export default PizzaList;
