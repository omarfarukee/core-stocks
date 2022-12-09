import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const ReturnBackProductCard = ({returnBackProduct}) => {
    const { image, returnedDate, quantity, costPrice, mrp, productName, returnedTo, _id} = returnBackProduct
    const [prod, setProd] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:5000/returnBack')
        .then(data => setProd(data.data))
    } ,[])

    const handleDeleteProd = id =>{
        const proceed = window.confirm('Are you sure you want to delete this return Back product?')
        if(proceed){
            fetch( `http://localhost:5000/returnBack/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0) {
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
                    <p>Cost - {costPrice} Rs.</p>
                    <p>MRP - {mrp} Rs.</p>
                    <p>Returned to - {returnedTo}</p>
                    <p>Returned date - {returnedDate}</p>
                    <div className="card-actions">
                        <button onClick={() => handleDeleteProd(_id)} className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReturnBackProductCard;