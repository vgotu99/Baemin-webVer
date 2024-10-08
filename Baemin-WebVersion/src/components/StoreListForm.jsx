import "./style/StoreListForm.css";

const StoreListForm = ({ storeName, star, tip, lowest, type, onClick }) => {
  return (
    <div className="storeListForm" onClick={onClick}>
      <div>
        <img className="storeImg" src={`/${type}.png`} alt="" />
      </div>
      <div className="store_info_text">
        <h2>{storeName}</h2>
        <h3><img src="/starOn.png" />{star}</h3>
        <div>배달팁 {tip}</div>
        <div>최소주문 {lowest}</div>
      </div>
    </div>
  );
};

export default StoreListForm;
