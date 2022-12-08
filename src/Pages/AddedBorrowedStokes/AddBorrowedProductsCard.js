import React from 'react';

const AddBorrowedProductsCard = ({borrowedProduct}) => {
            const {productName, quantity,costPrice, image, borrowedDate, borrowedFrom,mrp} = borrowedProduct
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
                    <p>Borrowed from - {borrowedFrom}</p>
                    <p>Borrowed date - {borrowedDate}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBorrowedProductsCard;