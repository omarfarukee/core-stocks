import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const StokesProductCard = ({ categoryProduct }) => {
    const { productName, mrp, costPrice, cameFrom, date, quantity,image, _id } = categoryProduct

    const [prod, setProd] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:5000/stocksProduct')
        .then(data => setProd(data.data))
    } ,[])

    const handleDeleteProd = id =>{
        const proceed = window.confirm('IMPORTANT! Make sure you have added this product to sold stock or Lend Stock, if you have done so you can now delete the product, Dont do otherwise. [note: if you want to delete permanently then you can delete]')
        if(proceed){
            fetch( `http://localhost:5000/stocksProduct/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0) {
                    alert('')
                    toast.success('Deleted Successfully')
                    const remaining = prod.filter(pro => pro._id !== id)
                    setProd(remaining)
                    window.location.reload()
                }
            })
        }
  }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl h-52 w-full" />
                </figure>
                <div className="card-body items-center text-center">

                    <h2 className="card-title">{productName}</h2>
                    <p>Quantity - {quantity}</p>
                    <p>Cost - {costPrice}</p>
                    <p>MRP - {mrp}</p>
                    <p>Purchased from - {cameFrom}</p>
                    <p>Purchased date - {date}</p>
                    <div className="card-actions">
                        <button onClick={() => handleDeleteProd(_id)} className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StokesProductCard;