import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AmountReturnsBackProducts = () => {
    const { data: returnBackStocks = [], refetch } = useQuery({
        queryKey: ['returnBackStocks'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/returnBack`);
            const data = await res.json();
            return data;
        }
    });
    return (
        <div>
              <div className='flex justify-center'>
                     <h2 className="text-3xl mt-5 mb-3 font-bold">Amount of stock Returned(stock out) : {returnBackStocks.length}</h2>
                </div>
                <div className="overflow-x-auto p-10">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Photo</th>
                            <th>Product Name</th>
                            <th>returns To</th>
                            <th>Quantity</th>
                            <th>M.R.P</th>
                            <th>Cost</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            returnBackStocks?.map((returns, i) => <tr key={returns._id}>
                                <th>{i + 1}</th>
                                <td><img src={returns.image} alt=""className="w-24 rounded-full" /></td>
                                <td>{returns.productName}</td>
                                <td>{returns.returnTo}</td>
                                <td>{returns.quantity}</td>
                                <td>{returns.mrp}Rs.</td>
                                <td>{returns.costPrice}Rs.</td>
                                <td><button className='btn btn-xs btn-danger'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AmountReturnsBackProducts;