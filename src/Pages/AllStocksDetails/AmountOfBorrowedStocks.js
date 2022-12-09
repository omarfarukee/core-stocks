import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const AmountOfBorrowedStocks = () => {
    const {stocks, setStocks} = useState([])
    const { data: borrowedStocks = [], refetch } = useQuery({
        queryKey: ['borrowedStocks'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/borrowed`);
            const data = await res.json();
            return data;
        }
    });
    const handleDeleteStocks = id =>{
        const proceed = window.confirm('Are you sure, want to delete this borrowed stock?')
        if(proceed){
            fetch( `http://localhost:5000/borrowed/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0) {
                    toast.success('Borrowed Stocks Deleted Successfully')
                    const remaining = stocks.filter(stock => stock._id !== id)
                    setStocks(remaining)
                    refetch()
                    window.location.reload()
                }
            })
        }
}
    return (
            <div>
            <div className='flex justify-center'>
                     <h2 className="text-3xl mt-5 mb-3 font-bold">Amount of stock borrowed : {borrowedStocks.length}</h2>
                </div>
            <div className="overflow-x-auto p-10">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Photo</th>
                            <th>Product Name</th>
                            <th>Borrowed from</th>
                            <th>Quantity</th>
                            <th>M.R.P</th>
                            <th>Cost</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            borrowedStocks?.map((borrowed, i) => <tr key={borrowed._id}>
                                <th>{i + 1}</th>
                                <td><img src={borrowed.image} alt=""className="w-24 rounded-full" /></td>
                                <td>{borrowed.productName}</td>
                                <td>{borrowed.borrowedFrom}</td>
                                <td>{borrowed.quantity}</td>
                                <td>{borrowed.mrp}Rs.</td>
                                <td>{borrowed.costPrice}Rs.</td>
                                <td><button onClick={() => handleDeleteStocks(borrowed._id)} className='btn btn-xs btn-danger'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AmountOfBorrowedStocks;