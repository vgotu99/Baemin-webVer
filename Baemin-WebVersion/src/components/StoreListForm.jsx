import "./style/StoreListForm.css";

const StoreListForm = ({ storeName, star, tip, lowest, type }) => {
  return (
    <div className="storeListForm">
      <div>
        <img className="storeImg" src={`/${type}.png`} alt="" />
      </div>
      <div className="storeInfo">
        <h2>{storeName}</h2>
        <h3>⭐️ {star}</h3>
        <div>배달팁 {tip}</div>
        <div>최소주문 {lowest}</div>
      </div>
    </div>
  );
};

export default StoreListForm;
