import react, { useState } from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import "../Styles/dashboard.css";
import DashboardRightContainer from "./DashboardRightContainer";
import { click } from "@testing-library/user-event/dist/click";

function Dashboard() {
  const [cartItem, setCartItem] = useState([]);
  const [clickCount, setClickCount] = useState(0);

  const product1 = [
    {
      image: img1,
      name: "Nike Classic shoes",
      price: "$ 75",
    },
    {
      image: img2,
      name: "Puma classic Shoes",
      price: "$ 70",
    },
  ];
  const product2 = [
    {
      image: img3,
      name: "Sports Classic Shoes",
      price: "$ 60",
    },
    {
      image: img4,
      name: "Runner Shoes",
      price: "$ 78",
    },
  ];
  const product3 = [
    {
      image: img5,
      name: "Nike Runner Shoes",
      price: "$ 90",
    },
    {
      image: img6,
      name: "NIke branded Shoes",
      price: "$ 86",
    },
  ];

  function handleAddToCard(Product) {
    const exist = cartItem.find((item) => item.name === Product.name);

    if (exist) {
      const updatedProduct = cartItem.map((item) =>
        item.name === Product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItem(updatedProduct);
    } else {
      setCartItem([...cartItem, { ...Product, quantity: 1 }]);
    }

    setClickCount((prev) => prev + 1);
  }
  function increaseItem(Product) {
    const exist = cartItem.find((item) => item.name === Product.name);

    if (exist) {
      const updatedProduct = cartItem.map((item) =>
        item.name === Product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItem(updatedProduct);
    }
  }
  function decreaseItem(Product) {
    const exist = cartItem.find((item) => item.name === Product.name);
    if (exist) {
      const updatedProduct = cartItem.map((item) =>
        item.name === Product.name && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      setCartItem(updatedProduct);
    }
  }
  return (
    <>
      <div className="dash-container">
        <div className="left-container">
          <h1>Available Shoes</h1>
          <div className="cart-one">
            {product1.map((item, index) => {
              return (
                <div className="result-item" key={index}>
                  <img src={item.image} alt={item.name} className="image" />
                  <span> {item.name}</span>
                  <span> {item.price}</span>
                  <button
                    onClick={() => handleAddToCard(item)}
                    className="add-btn"
                  >
                    ADD To Cart
                  </button>
                </div>
              );
            })}
          </div>
          <div className="cart-two">
            {product2.map((item, index) => {
              return (
                <div className="result-item" key={index}>
                  <img src={item.image} alt={item.name} className="image" />
                  <span> {item.name}</span>
                  <span> {item.price}</span>
                  <button
                    onClick={() => handleAddToCard(item)}
                    className="add-btn"
                  >
                    ADD To Cart
                  </button>
                </div>
              );
            })}
          </div>
          <div className="cart-three">
            {product3.map((item, index) => {
              return (
                <div className="result-item" key={index}>
                  <img src={item.image} alt={item.name} className="image" />
                  <span> {item.name}</span>
                  <span> {item.price}</span>
                  <button
                    onClick={() => handleAddToCard(item)}
                    className="add-btn"
                  >
                    ADD To Cart
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <DashboardRightContainer
          cartItem={cartItem}
          increaseItem={increaseItem}
          decreaseItem={decreaseItem}
        />
      </div>
    </>
  );
}

export default Dashboard;
