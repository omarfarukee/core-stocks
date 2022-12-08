import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReturnProductCard from './ReturnProductCard';

const ReturnProduct = () => {
    
    const returnProducts = useLoaderData()
    console.log()
    return (
        <div>
            <div className='flex justify-center mt-10 text-3xl text-green-900 font-bold'>
                <h1 className='text'>All Return Products (Based on the selected category)</h1>
            </div>
            <div className='grid grid-cols-3 ml-10 mt-10 mb-10'>
                {
                    returnProducts?.map(returnProduct => <ReturnProductCard
                    key={returnProduct._id}
                    returnProduct={returnProduct}
                    ></ReturnProductCard>)
                }
            </div>
        </div>
    );
};

export default ReturnProduct;