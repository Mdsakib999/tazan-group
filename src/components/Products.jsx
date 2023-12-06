import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <div className="text-center mt-5 mb-5">
        <h1 className="text-3xl lg:text-5xl font-bold">
          Our All Product {products.length}
        </h1>
        <p className="text-2xl text-gray-500 mt-3">
        We are committed to our customer to offer high-quality products at affordable prices.
        </p>
      </div>

      <div>
        {products.map((product) => (
            <h1>hi</h1>
        ))}
      </div>
    </div>
  );
};

export default Products;
