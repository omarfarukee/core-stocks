import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const AmountOfStocksSold = () => {
    const {stocks, setStocks} = useState([])
    const { data: soldStocks = [], refetch } = useQuery({
        queryKey: ['soldStocks'],
        queryFn: async () => {
            const res = await fetch(`https://starting-core-server.vercel.app/sold`);
            const data = await res.json();
            return data;
        }
    });
    const handleDeleteStocks = id =>{
        const proceed = window.confirm('Are you sure, want to delete this sold stock?')
        if(proceed){
            fetch( `https://starting-core-server.vercel.app/sold/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0) {
                    toast.success('sold Stock Deleted Successfully')
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
                 <h2 className="text-3xl mt-5 mb-3 font-bold">Amount of stock Sold : {soldStocks.length}</h2>
            </div>
        <div className="overflow-x-auto p-10">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Product Photo</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>M.R.P</th>
                        <th>Cost</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        soldStocks?.map((sold, i) => <tr key={sold._id}>
                            <th>{i + 1}</th>
                            <td><img src={sold.image} alt=""className="w-24 rounded-full" /></td>
                            <td>{sold.productName}</td>
                            <td>{sold.quantity}</td>
                            <td>{sold.mrp}Rs.</td>
                            <td>{sold.costPrice}Rs.</td>
                            <td><button onClick={()=> handleDeleteStocks(sold._id)} className='btn btn-xs btn-danger'>Delete</button></td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    </div>
    );
};

export default AmountOfStocksSold;