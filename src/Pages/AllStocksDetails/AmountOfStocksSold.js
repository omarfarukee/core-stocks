import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AmountOfStocksSold = () => {
    const { data: soldStocks = [], refetch } = useQuery({
        queryKey: ['soldStocks'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/sold`);
            const data = await res.json();
            return data;
        }
    });
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
                            <td><button className='btn btn-xs btn-danger'>Delete</button></td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    </div>
    );
};

export default AmountOfStocksSold;