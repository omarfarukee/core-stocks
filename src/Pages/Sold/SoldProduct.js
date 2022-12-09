import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SoldProductCard from './SoldProductCard';

const SoldProduct = () => {

    const soldProducts = useLoaderData()
    // console.log(soldProducts)
    return (
        <div>
            <div className='flex justify-center mt-10 text-3xl text-green-900 font-bold'>
                <h1 className='text'>Sold Products (Based on the category)</h1>
            </div>
            <div className='grid grid-cols-3 ml-10 mt-10 mb-10'>
                {
                    soldProducts?.map(soldProduct => <SoldProductCard
                    key={soldProduct._id}
                    soldProduct={soldProduct}
                    ></SoldProductCard>)
                }
            </div>
        </div>
    );
};

export default SoldProduct;