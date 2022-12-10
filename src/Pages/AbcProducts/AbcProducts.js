import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AbcProductCard from './AbcProductCard/AbcProductCard';

const AbcProducts = () => {

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('https://starting-core-server.vercel.app/categories');
            const data = await res.json();
            console.log(data)
            return data;
           
        }
    })
    return (
        <div className='mt-10 mb-10'>
                <div className='flex justify-center mb-10'>
                    <h1 className='text-3xl font-bold'>Products Category</h1>
                </div>
                <div className='grid grid-cols-3 ml-10'>

                    {
                        categories?.map(category => <AbcProductCard
                        key={category._id}
                        category={category}
                        ></AbcProductCard>)
                    }

                </div>
        </div>
    );
};

export default AbcProducts;