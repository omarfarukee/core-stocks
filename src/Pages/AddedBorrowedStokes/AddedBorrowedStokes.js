import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AddBorrowedProductsCard from './AddBorrowedProductsCard';

const AddedBorrowedStokes = () => {
    const BorrowedProducts = useLoaderData()
    console.log()
    return (
        <div>
             <div className='flex justify-center text-3xl font-bold mt-8 mb-6'><h1>Borrowed Stokes(based on the selected category)</h1></div>
             {BorrowedProducts.length === 0 ? <p className='text-4xl text-center mt-28 font-extrabold text-red-600'>No borrowed products found in this category</p>
             :<div className='grid grid-cols-3 ml-10 mt-10 mb-10'>
                    {
                        BorrowedProducts?.map(borrowedProduct => <AddBorrowedProductsCard
                        key={borrowedProduct._id}
                        borrowedProduct={borrowedProduct}
                        ></AddBorrowedProductsCard>)
                    }
             </div>
             }
        </div>
    );
};

export default AddedBorrowedStokes;