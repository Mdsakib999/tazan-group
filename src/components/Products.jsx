import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

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
      <div className="text-center mt-5">
        <h1 className="text-3xl lg:text-5xl font-bold">
          Our All Product
        </h1>
        <p className="text-2xl text-gray-500 mt-3">
        We are committed to our customer to offer high-quality products at affordable prices.
        </p>
      </div>

      <div className="w-[80%] mx-auto gap-8 p-5 grid lg:grid-cols-3">
        {products.map((product) => (
            <div key={product.id} className="card card-compact lg:w-80 bg-base-100 shadow-xl hover:shadow-2xl my-12">
            <figure>
              <img
                className="h-[300px] w-[100%] p-4 rounded-3xl"
                src={product.image}
                alt="Product name"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-semibold">{product.productName}</h2>
              <div className=" flex justify-between font-bold">
                  <p>Packing: {product.packing} </p>
                  
                  <div className="flex items-center gap-1">
                  <FaStar className="text-orange-500"></FaStar><p> {product.rating}</p>
                  </div>
              </div>
              <p className="font-bold text-lg">Origin: <span className="text-blue-600 ">{product.country}</span></p>
              <div className="flex justify-between items-center gap-10 mt-3 mb-5">
                
                <>
                {/* {`/toys/${_id}`} */}
                <Link to={`/productDetails/${product.id}`}>
                  <button
                    className="px-4 py-2 rounded-md
                text-black  font-bold text-base bg-gradient-to-r from-green-600 to-lime-300 hover:from-lime-300 hover:to-green-600 ..."
                  >
                    View Details
                  </button>
                </Link>
                </>

                <p className=" text-right text-xl font-semibold">Tk {product.price} /kg</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
