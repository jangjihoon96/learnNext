"use client";

import { useState } from "react";

export default function List() {
  let products = [
    {
      id: 1,
      name: "Tomatoes",
      price: 40,
      src: "food0.png",
      alt: "토마토",
    },
    {
      id: 2,
      name: "Pasta",
      price: 30,
      src: "food1.png",
      alt: "파스타",
    },
    {
      id: 3,
      name: "Coconut",
      price: 20,
      src: "food2.png",
      alt: "코코넛",
    },
  ];

  const [count, setCount] = useState([0, 0, 0]);
  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {products.map((item, idx) => {
        return (
          <div className="food" key={item.id}>
            <img
              className="food-img"
              src={`/food/${item.src}`}
              alt={item.alt}
            />
            <h4>
              {item.name} ${item.price}
            </h4>
            {/* <button onClick={handleDecrease}>-</button> */}
            <button
              onClick={() => {
                const copy = [...count];
                if (copy[idx] <= 0) {
                  copy[idx] == 0;
                } else {
                  copy[idx]--;
                }
                setCount(copy);
              }}
            >
              -
            </button>
            <span>{count[idx]}</span>
            {/* <button onClick={handleIncrease}>+</button> */}
            <button
              onClick={() => {
                const copy = [...count];
                copy[idx]++;
                setCount(copy);
              }}
            >
              +
            </button>
          </div>
        );
      })}
    </div>
  );
}
