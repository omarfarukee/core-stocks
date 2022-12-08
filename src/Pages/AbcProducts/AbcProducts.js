import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AbcProductCard from './AbcProductCard/AbcProductCard';

const AbcProducts = () => {

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('fakeData.json');
            const data = await res.json();
            console.log(data)
            return data;
           
        }
    })
    return (
        <div>
                <div className='flex justify-center'>
                    <h1 className='text-3xl font-bold'>Products Category</h1>
                </div>
                <div>
                    {
                        categories?.map(category => <AbcProductCard
                        category={category}
                        ></AbcProductCard>)
                    }
                </div>
        </div>
    );
};

export default AbcProducts;