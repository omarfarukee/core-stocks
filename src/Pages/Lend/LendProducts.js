import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LendProductsCard from './LendProductsCard';

const LendProducts = () => {
    const lendProducts = useLoaderData()
    return (
        <div>
             <div className='flex justify-center mt-10 text-3xl text-green-900 font-bold'>
                <h1 className='text'>Lend Products (Based on the selected category)</h1>
            </div>
            { lendProducts?.length === 0 ? 
            <p className='text-4xl text-center mt-28 font-extrabold text-red-600'>No lend products found in this category</p>
            :
            <div className='grid grid-cols-3 ml-10 mt-10 mb-10'>
                {
                    lendProducts?.map(lendProduct => <LendProductsCard
                    key={lendProduct._id}
                    lendProduct={lendProduct}
                    ></LendProductsCard>)
                }
            </div>
           }
        </div>
    );
};

export default LendProducts;