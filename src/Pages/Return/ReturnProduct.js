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
            { returnProducts?.length === 0 ? 
            <p className='text-4xl text-center mt-28 font-extrabold text-red-600'>No returned products found in this category</p>
            :
            <div className='grid grid-cols-3 ml-10 mt-10 mb-10'>
                {
                    returnProducts?.map(returnProduct => <ReturnProductCard
                    key={returnProduct._id}
                    returnProduct={returnProduct}
                    ></ReturnProductCard>)
                }
            </div>
         }
        </div>
    );
};

export default ReturnProduct;