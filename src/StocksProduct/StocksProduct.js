
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import StokesProductCard from './StokesProductCard';

const StocksProduct = () => {

    const categoryProducts = useLoaderData()
    console.log(categoryProducts)
    return (
        <div>
             <div className='flex justify-center mb-10 mt-10 text-3xl text-green-900 font-bold'>
                <h1 className='text'>purchased Stock Products (Based on the selected category)</h1>
            </div>
            { categoryProducts?.length === 0 ? 
            <p className='text-4xl text-center mt-28 font-extrabold text-red-600'>No purchased products found in this category</p>
            :
            <div className='grid grid-cols-3 ml-10 mb-10 mt-10'>
                {
                    categoryProducts?.map(categoryProduct => <StokesProductCard
                    key={categoryProduct._id}
                    categoryProduct={categoryProduct}
                    ></StokesProductCard>)
                }
            </div>
            }
        </div>
    );
};

export default StocksProduct;