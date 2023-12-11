import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import productData from "../../public/data.json";

const ProductDetails = () => {
  const { id } = useParams();
  const products = productData.find((p) => p.id === parseInt(id, 10));

  console.log(id);
  console.log(products);

  return (
    <div className="b w-[75%] mx-auto">
      <h1 className="text-center font-bold text-4xl">Product Details</h1>

      <div className="my-10 lg:flex items-center gap-10">
        <div>
          <img className="w-[300px] rounded-lg" src={products.image} alt="" />
        </div>

        <div className="text-xl">
          <p className="font-semibold text-2xl mt-3 mb-2">
            Name: {products.productName}
          </p>
          <p className="mb-2">Composition: {products.composition}</p>
          <p className="mb-2">Dosage: {products.dosage}</p>

          <p className="mb-2">Packing: {products.packing} bag</p>
          <p className="mb-2">Shelf Life: {products.shelfLife} </p>
          <p className="mb-2">Type: {products.type}</p>
          <p className="mb-2">Company: {products.company}</p>
          <p className="mb-2">Made In {products.country}</p>
          <div>
            <p className="mb-2"> {products.price}</p>
            <p className="mb-2">Rating: {products.rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
