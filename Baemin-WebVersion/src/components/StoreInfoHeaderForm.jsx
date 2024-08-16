import "./style/StoreInfoHeaderForm.css";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const StoreInfoHeaderForm = ({ store, onClickLike }) => {
  const nav = useNavigate();

  return (
    <div className="storeInfoHeaderForm">
      <div className="header_main">
        <div className="main_info1">
          <Button
            onClick={() => nav("/")}
            type={"goToMain"}
            text={"< 뒤로 가기"}
          />
          <h2>{store.name}</h2>
          <div>⭐️ {store.star}</div>
        </div>
        <div className="main_info2">
          <Button type={"info"} imgType={"phone"} />
          <Button onClick={onClickLike} type={"info"} imgType={"likeOn"} />
          <Button type={"info"} imgType={"share"} />
        </div>
      </div>
      <div className="header_sub">
        <div>
          <div>최소주문금액</div>
          <div>{store.lowest}</div>
        </div>
        <div>
          <div>결제방법</div>
          <div>어떤 방법</div>
        </div>
        <div>
          <div>배달시간</div>
          <div>몇분~몇분</div>
        </div>
        <div>
          <div>배달팁</div>
          <div>{store.tip}</div>
        </div>
      </div>
    </div>
  );
};

export default StoreInfoHeaderForm;
