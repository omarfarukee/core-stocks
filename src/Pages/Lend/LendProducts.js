import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LendProductsCard from './LendProductsCard';

const LendProducts = () => {
    const lendProducts = useLoaderData()
    return (
        <div>
             <div className='flex justify-center mt-10 text-3xl text-green-900 font-bold'>
                <h1 className='text'>Lend Products (Based on the category)</h1>
            </div>
            <div className='grid grid-cols-3 ml-10 mt-10 mb-10'>
                {
                    lendProducts?.map(lendProduct => <LendProductsCard
                    key={lendProduct._id}
                    lendProduct={lendProduct}
                    ></LendProductsCard>)
                }
            </div>
        </div>
    );
};

export default LendProducts;