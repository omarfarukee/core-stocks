import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReturnBackProductCard from './ReturnBackProductCard';

const ReturnBackProducts = () => {
    const returnBackProducts = useLoaderData()

    return (
        <div>
            <div className='flex justify-center mt-10 text-3xl text-green-900 font-bold'>
                <h1 className='text'>Return back Products-stoke out (Based on the category)</h1>
            </div>
            <div className='grid grid-cols-3 ml-10 mt-10 mb-10'>
                {
                    returnBackProducts?.map( returnBackProduct => <ReturnBackProductCard
                    key={returnBackProduct._id}
                    returnBackProduct={returnBackProduct}
                    ></ReturnBackProductCard>)
                }
            </div>
        </div>
    );
};

export default ReturnBackProducts;