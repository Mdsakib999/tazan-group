import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import productData from "../../public/data.json"; 

const ProductDetails = () => {
  const { id } = useParams();
  const products = productData.find((p) => p.id === parseInt(id, 10));

  console.log(id);
  console.log(products);

  return (
    <div className=" w-[78%] mx-auto">
      <h1 className="text-center font-bold text-4xl">Product Details</h1>

      <div className="my-10 lg:flex items-center gap-10">
        <div>
          <img
            className="w-[310px] h-[420px] rounded-lg"
            src={products.image}
            alt=""
          />
        </div>

        <div className="text-xl p-3">
          <p className="font-semibold lg:text-2xl mt-3 mb-2">
            Name: {products.productName}
          </p>
          <p className="mb-2">
            Composition:{" "}
            <span className="font-semibold">{products.composition}</span>
          </p>
          <p className="mb-2">Dosage: {products.dosage}</p>

          <p className="mb-2">Packing: {products.packing} bag</p>
          <p className="mb-2">Shelf Life: {products.shelfLife} </p>
          {/* <p className="mb-2">Type: {products.type}</p> */}
          <p className="mb-2">Company: {products.company}</p>
          <p className="mb-2 font-semibold">
            Origin or Made In{" "}
            <span className="font-bold text-blue-700">{products.country}</span>
          </p>
          <div className="mt-5 flex gap-6">
            <p className="mb-2 bg-zinc-100 px-4 py-3 rounded-lg shadow-md hover:shadow-lg">
              <span className="text-3xl font-semibold text-green-800">
                {products.price}
              </span>{" "}
              <span className="font-bold">Tk/kg</span>
            </p>
            <p className="mb-2 bg-zinc-100 px-4 py-3 rounded-lg shadow-md hover:shadow-lg text-2xl font-semibold flex items-center gap-2">
              <FaStar className="text-yellow-400"></FaStar>
              {products.rating}
            </p>
          </div>
          <button class="group mt-6  border relative h-12 w-40 overflow-hidden rounded-lg font-bold bg-slate-50 text-lg shadow-md">
            <div class="absolute inset-0 w-3 bg-gradient-to-r from-green-600 to-lime-300 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span class="relative text-black group-hover:text-white">
              Order Now 
            </span>
          </button>
        </div>
      </div>

      <div className="bg-slate-100 py-4 px-2 mb-20 rounded-md shadow-md">
        <p className="px-2 py-2 rounded-md bg-white lg:text-xl"><span className="font-semibold">Description:</span> {products.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
