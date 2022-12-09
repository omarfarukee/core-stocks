import React from 'react';
import { Link } from 'react-router-dom';

const AbcProductCard = ({ category }) => {

 const {name, image, _id} = category

    return (
        <div>
            <div className="card w-96 h-full bg-base-100 shadow-xl image-full">
                <figure><img  src={image} alt="Shoes" className='h-80' /></figure>
                <div className="card-body">
                    <h2 className="card-title">Category- {name}</h2>
                    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                    <div className="card-actions mt-20 grid grid-cols-2">

                     <Link to={`/stocksProduct/${_id}`}><button className="btn btn-sm w-36 h-12">Purchased Stokes</button></Link> 
                     <Link to={`/borrowed/${_id}`}><button className="btn btn-sm w-36 h-12">Borrowed Stokes</button></Link> 
                     <Link to={`/return/${_id}`}><button className="btn btn-sm w-36 h-12">Returned Stokes</button></Link> 

                     <Link to={`/sold/${_id}`}><button className="btn btn-sm w-36 h-12">Sold(product)</button></Link> 
                     <Link to={`/lend/${_id}`}><button className="btn btn-sm  w-36 h-12">Lend(product)</button></Link> 
                     <Link to={`/returnBack/${_id}`}><button className="btn btn-sm  w-36 h-12">Return Back(product)</button></Link> 

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AbcProductCard;