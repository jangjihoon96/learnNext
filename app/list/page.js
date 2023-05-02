
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
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {products.map((item) => {
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
          </div>
        );
      })}
    </div>
  );
}
