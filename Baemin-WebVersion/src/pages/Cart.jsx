import "./style/Cart.css";
import { useState, useEffect } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItem, setCartItem] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const nav = useNavigate();

  useEffect(() => {
    const userCart = JSON.parse(localStorage.getItem("userCart"));
    if (!userCart) {
      setTimeout(() => {
        alert(
          "장바구니에 담긴 메뉴가 없습니다. 메뉴를 장바구니에 담아 주문해보세요!"
        );
        nav("/");
      }, 500);
    } else {
      setCartItem(userCart);

      const total = userCart.reduce((acc, item) => {
        const price = Number(item.productPrice.replace(",", ""));
        return acc + price;
      }, 0);
      setTotalPrice(total.toLocaleString());
    }
  }, []);

  const handleOrder = () => {
    const userCart = JSON.parse(localStorage.getItem("userCart"));

    if (!userCart) {
      alert(
        "장바구니에 담긴 메뉴가 없습니다. 메뉴를 장바구니에 담아 주문해보세요!"
      );
      nav("/");
      return;
    }

    const orderDate = new Date().toLocaleString();
    const orderedList = {
      items: userCart,
      orderDate: orderDate,
    };

    let userOrderList = JSON.parse(localStorage.getItem("userOrderList")) || [];
    userOrderList.push(orderedList);
    localStorage.setItem("userOrderList", JSON.stringify(userOrderList));

    localStorage.removeItem("userCart");
    setCartItem([]);
    setTotalPrice("0");
    alert("고객님의 메뉴가 주문되었습니다. 빨리 배달해드릴게요!");
    nav("/");
  };

  return (
    <div className="cart">
      <div className="cart_header">
        <div className="like_goToMain">
          <Button
            onClick={() => nav(-1)}
            type={"goToMain"}
            text={"< 돌아가기"}
          />
        </div>
        <div className="header_text">나의 장바구니</div>
      </div>
      <div className="cart_main">
        {cartItem.map((item) => (
          <div key={item.id}>
            <div className="main_item">
              <div className="item_img">
                <img src={`/${item.storeType}.png`} alt="" />
              </div>
              <div className="item_info">
                <div className="storeName">{item.storeName}</div>
                <div className="productName">{item.productName}</div>
                <div className="productPrice">{item.productPrice}원</div>
                <div className="productDescription">
                  {item.productDescription}
                </div>
              </div>
            </div>
            
          </div>
        ))}
      </div>

      <div className="cart_footer">
        <Button
          onClick={handleOrder}
          text={`${totalPrice}원 · 배달 주문하기`}
          type={"join_mainBtn"}
        />
      </div>
    </div>
  );
};

export default Cart;
