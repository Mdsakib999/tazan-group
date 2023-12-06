import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import productData from '../../public/data.json';

const ProductDetails = () => {
    const {id} = useParams();
    const products = productData.find((p) => p.id === parseInt(id, 10));

    console.log(id);
    console.log(products);

    return (
        <div className='w-[70%] mx-auto'>
            <h1 className='text-center font-bold text-4xl'>Product Details</h1>
            
            <div className='my-6 flex items-center gap-6'>
                <div>
                    <img className='w-[300px] rounded-lg' src={products.image} alt="" />
                </div>

                <div className='text-xl'>
                    <p>Name: {products.productName}</p>
                    <p>Composition: {products.composition}</p>
                    <p>Dosage: {products.dosage}</p>
                    <p></p>
                    <p>Packing: {products.packing} bag</p>
                    <p>Shelf Life: {products.shelfLife} </p>
                    <p>Type: {products.type}</p>
                    <p>Company: {products.company}</p>
                    <p>Made In {products.country}</p>
                    <p>Price: {products.price}</p>
                    <p>Rating: {products.rating}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;