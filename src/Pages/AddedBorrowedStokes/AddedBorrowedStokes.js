import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AddBorrowedProductsCard from './AddBorrowedProductsCard';

const AddedBorrowedStokes = () => {
    const BorrowedProducts = useLoaderData()
    console.log()
    return (
        <div>
             <div className='flex justify-center text-3xl font-bold'><h1>Borrowed Stokes(based on selected category)</h1></div>
             <div className='grid grid-cols-3 ml-10 mt-10 mb-10'>
                    {
                        BorrowedProducts?.map(borrowedProduct => <AddBorrowedProductsCard
                        key={borrowedProduct._id}
                        borrowedProduct={borrowedProduct}
                        ></AddBorrowedProductsCard>)
                    }
             </div>
        </div>
    );
};

export default AddedBorrowedStokes;