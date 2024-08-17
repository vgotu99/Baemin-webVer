import "./style/StoreInfoMenuForm.css";
import ReactModal from "react-modal";
import { useState } from "react";

const StoreInfoMenuForm = ({ store, products, putInCart }) => {
  const [openModalId, setOpenModalId] = useState(null);

  const openModal = (productId) => {
    setOpenModalId(productId);
  };

  const closeModal = () => {
    putInCart(),
    setOpenModalId(null);
  };

  const customStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255,255,255,.85)',
      zIndex: '3'
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      padding: '20px 50px',
      width: "500px",
      height: "400px",
      top: 'calc(50dvh - 210px)',
      left: 'calc(50dvw - 275px)',
    },
  };

  return (
    <div className="storeInfoMenuForm">
      {products.map((product) => (
        <div key={product.id} className="product">
          <div onClick={() => openModal(product.id)} className="product_main" >
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
            onRequestClose={closeModal}
            style={customStyles}
          >
            <div className="modal_img">
            <img  src={`/${store.type}.png`} />
            </div>
            <h1>{product.name}</h1>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <button onClick={closeModal}>담기</button>
          </ReactModal>
        </div>
      ))}
    </div>
  );
};

export default StoreInfoMenuForm;
