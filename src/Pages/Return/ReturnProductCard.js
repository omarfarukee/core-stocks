import React from 'react';

const ReturnProductCard = ({returnProduct}) => {
    const {costPrice, quantity, returnFrom, returnDate, mrp, productName, image} = returnProduct
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
                    <p>Return from - {returnFrom}</p>
                    <p>Return date - {returnDate}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReturnProductCard;