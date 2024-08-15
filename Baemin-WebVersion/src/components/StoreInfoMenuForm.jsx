import "./style/StoreInfoMenuForm.css";

const StoreInfoMenuForm = ({ store, products }) => {
  return (
    <div className="storeInfoMenuForm">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <div className="product_img">
            <img src={`/${store.type}.png`} />
          </div>
          <div className="product_info">
            <div className="product_name">{product.name}</div>
            <div className="product_price">{product.price}</div>
            <div className="product_description">{product.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StoreInfoMenuForm;
