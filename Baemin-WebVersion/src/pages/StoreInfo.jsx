import './style/StoreInfo.css'
import { stores } from "../components/StoreList";
import { useState } from 'react';
import { useParams } from "react-router-dom";
import StoreInfoHeaderForm from "../components/StoreInfoHeaderForm";
import StoreInfoMenuForm from "../components/StoreInfoMenuForm";

const StoreInfo = () => {
  const [like, setLike] = useState(0)
  const { id } = useParams();
  const store = stores.find((s) => s.id === parseInt(id));

  if (!store) {
    return <div>스토어가 존재하지 않습니다.</div>;
  }

  return (
    <div className="storeInfo">
      <StoreInfoHeaderForm store={store} />
      <StoreInfoMenuForm products={store.products} store={store} />
    </div>
  );
};

export default StoreInfo;
