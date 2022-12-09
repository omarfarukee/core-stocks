import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import AmountLendStockProducts from './AmountLendStockProducts';
import AmountOfBorrowedStocks from './AmountOfBorrowedStocks';
import AmountOFReturnProduct from './AmountOFReturnProduct';
import AmountOfStocksSold from './AmountOfStocksSold';
import AmountReturnsBackProducts from './AmountReturnsBackProducts';

const AllStocksDetails = () => {
    const {stocks, setStocks} = useState([])
    const { data: purchaseStocks = [], refetch} = useQuery({
        queryKey: ['purchaseStocks'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/stocksProduct`);
            const data = await res.json();
            return data;
        }  
    });
    const handleDeleteStocks = id =>{
        const proceed = window.confirm('Are you sure, want to delete this purchase stock?')
        if(proceed){
            fetch( `http://localhost:5000/stocksProduct/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0) {
                    toast.success('purchase Stocks Deleted Successfully')
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
                     <h2 className="text-3xl mt-5 mb-3 font-bold">Amount of stock purchased : {purchaseStocks.length}</h2>
                </div>
            <div className="overflow-x-auto p-10">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Photo</th>
                            <th>Product Name</th>
                            <th>Purchase from</th>
                            <th>Quantity</th>
                            <th>M.R.P</th>
                            <th>Cost</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            purchaseStocks?.map((purchase, i) => <tr key={purchase._id}>
                                <th>{i + 1}</th>
                                <td><img src={purchase.image} alt=""className="w-24 rounded-full" /></td>
                                <td>{purchase.productName}</td>
                                <td>{purchase.cameFrom}</td>
                                <td>{purchase.quantity}</td>
                                <td>{purchase.mrp}Rs.</td>
                                <td>{purchase.costPrice}Rs.</td>
                                <td><button onClick={() => handleDeleteStocks(purchase._id)} className='btn btn-xs btn-danger'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            <AmountOfBorrowedStocks></AmountOfBorrowedStocks>
            <AmountOFReturnProduct></AmountOFReturnProduct>
            <AmountOfStocksSold></AmountOfStocksSold>
            <AmountLendStockProducts></AmountLendStockProducts>
            <AmountReturnsBackProducts></AmountReturnsBackProducts>
        </div>
    );
};

export default AllStocksDetails;