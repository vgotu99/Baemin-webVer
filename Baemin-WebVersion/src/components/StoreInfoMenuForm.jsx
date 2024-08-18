import "./style/StoreInfoMenuForm.css";
import ReactModal from "react-modal";
import { useState } from "react";
import Button from "./Button";

const StoreInfoMenuForm = ({ store, products }) => {
  const [openModalId, setOpenModalId] = useState(null);

  const openModal = (productId) => {
    setOpenModalId(productId);
  };

  const closeModal = () => {
    setOpenModalId(null)
  }

  const putInCart = (product) => {

    const userCart = JSON.parse(localStorage.getItem("userCart")) || [];
    const userOrderList =
      JSON.parse(localStorage.getItem("userOrderList")) || [];

    const maxCartId = userCart.reduce((max, item) => Math.max(max, item.id), 0);
    const maxOrderId = userOrderList.reduce((max, order) => {
      const orderMaxId = order.items.reduce(
        (itemMax, item) => Math.max(itemMax, item.id),
        0
      );
      return Math.max(max, orderMaxId);
    }, 0);
    const maxId = Math.max(maxCartId, maxOrderId);

    const newId = maxId + 1;

    const newCartItem = {
      id: newId,
      storeId: store.id,
      storeName: store.name,
      storeType: store.type,
      productId: product.id,
      productName: product.name,
      productPrice: product.price,
      productDescription: product.description,
    };

    userCart.push(newCartItem);
    localStorage.setItem("userCart", JSON.stringify(userCart));
    alert("장바구니에 추가되었습니다. 장바구니에서 주문하기를 눌러주세요.");

    setOpenModalId(null)
  };

  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(255,255,255,.85)",
      zIndex: "3",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      padding: "20px 50px",
      width: "600px",
      height: "450px",
      top: "calc(50dvh - 245px)",
      left: "calc(50dvw - 325px)",
    },
  };

  return (
    <div className="storeInfoMenuForm">
      {products.map((product) => (
        <div key={product.id} className="product">
          <div onClick={() => openModal(product.id)} className="product_main">
            <div className="product_img">
              <img src={`/${store.type}.png`} />
            </div>
            <div className="product_info">
              <div className="product_name">{product.name}</div>
              <div className="product_price">{product.price}</div>
              <div className="product_description">{product.description}</div>
            </div>
          </div>
          <ReactModal
            ariaHideApp={false}
            isOpen={openModalId === product.id}
            onRequestClose={() => closeModal(product)}
            style={customStyles}
          >
            <Button
                onClick={() => closeModal()}
                text={"< 닫기"}
                type={"goToMain"}
              />
            <div className="modal_img">
              <img src={`/${store.type}.png`} />
            </div>
            <h1>{product.name}</h1>
            <p>{product.price}</p>
            <p>{product.description}</p>
              <Button
                onClick={() => putInCart(product)}
                text={"장바구니에 담기"}
                type={"modal_btn"}
              />
          </ReactModal>
        </div>
      ))}
    </div>
  );
};

export default StoreInfoMenuForm;
