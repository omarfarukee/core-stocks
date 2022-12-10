import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const AmountOFReturnProduct = () => {
    const {stocks, setStocks} = useState([])
    const { data: returnStocks = [], refetch } = useQuery({
        queryKey: ['returnStocks'],
        queryFn: async () => {
            const res = await fetch(`https://starting-core-server.vercel.app/return`);
            const data = await res.json();
            return data;
        }
    });
    const handleDeleteStocks = id =>{
        const proceed = window.confirm('Are you sure, want to delete this return stock?')
        if(proceed){
            fetch( `https://starting-core-server.vercel.app/return/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0) {
                    toast.success('Return Stocks Deleted Successfully')
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
                     <h2 className="text-3xl mt-5 mb-3 font-bold">Amount of stock Returned : {returnStocks.length}</h2>
                </div>
            <div className="overflow-x-auto p-10">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Photo</th>
                            <th>Product Name</th>
                            <th>returns from</th>
                            <th>Quantity</th>
                            <th>M.R.P</th>
                            <th>Cost</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            returnStocks?.map((returns, i) => <tr key={returns._id}>
                                <th>{i + 1}</th>
                                <td><img src={returns.image} alt=""className="w-24 rounded-full" /></td>
                                <td>{returns.productName}</td>
                                <td>{returns.returnFrom}</td>
                                <td>{returns.quantity}</td>
                                <td>{returns.mrp}Rs.</td>
                                <td>{returns.costPrice}Rs.</td>
                                <td><button onClick={()=> handleDeleteStocks(returns._id)} className='btn btn-xs btn-danger'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AmountOFReturnProduct;