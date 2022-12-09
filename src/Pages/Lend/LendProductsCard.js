import React from 'react';

const LendProductsCard = ({ lendProduct }) => {
    const { image, lendDate, quantity, costPrice, mrp, productName, lendTo } = lendProduct
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
                    <p>Lend to - {lendTo}</p>
                    <p>Lend date - {lendDate}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LendProductsCard;