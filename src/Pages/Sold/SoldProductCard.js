import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const SoldProductCard = ({soldProduct}) => {
        const {image, soldDate, quantity, costPrice, mrp, productName, _id} = soldProduct
        const [prod, setProd] = useState([])

        useEffect(() =>{
            axios.get('https://starting-core-server.vercel.app/sold')
            .then(data => setProd(data.data))
        } ,[])
    
        const handleDeleteProd = id =>{
            const proceed = window.confirm('Are you sure want to delete this sold product?')
            if(proceed){
                fetch( `https://starting-core-server.vercel.app/sold/${id}`, {
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
                    <p>Sold date - {soldDate}</p>
                    <div className="card-actions">
                        <button onClick={() => handleDeleteProd(_id)} className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SoldProductCard;