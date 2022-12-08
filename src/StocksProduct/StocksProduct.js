
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const StocksProduct = () => {

    const categoryProducts = useLoaderData()
    console.log(categoryProducts)
    return (
        <div>
             <div className='flex justify-center mt-10 text-3xl text-green-900 font-bold'>
                <h1 className='text'>Here your item</h1>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default StocksProduct;