import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const AmountLendStockProducts = () => {
    const {stocks, setStocks} = useState([])
    const { data: lendStocks = [], refetch } = useQuery({
        queryKey: ['lendStocks'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/lend`);
            const data = await res.json();
            return data;
        }
    })
    const handleDeleteStocks = id =>{
        const proceed = window.confirm('Are you sure, want to delete this lend stock?')
        if(proceed){
            fetch( `http://localhost:5000/lend/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0) {
                    toast.success('lend Stocks Deleted Successfully')
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
                     <h2 className="text-3xl mt-5 mb-3 font-bold">Amount of stock lend : {lendStocks.length}</h2>
                </div>
                <div className="overflow-x-auto p-10">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Photo</th>
                            <th>Product Name</th>
                            <th>lend To</th>
                            <th>Quantity</th>
                            <th>M.R.P</th>
                            <th>Cost</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            lendStocks?.map((lends, i) => <tr key={lends._id}>
                                <th>{i + 1}</th>
                                <td><img src={lends.image} alt=""className="w-24 rounded-full" /></td>
                                <td>{lends.productName}</td>
                                <td>{lends.lendTo}</td>
                                <td>{lends.quantity}</td>
                                <td>{lends.mrp}Rs.</td>
                                <td>{lends.costPrice}Rs.</td>
                                <td><button onClick={() => handleDeleteStocks(lends._id)} className='btn btn-xs btn-danger'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AmountLendStockProducts;