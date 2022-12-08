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
                    <div className="card-actions mt-20">
                     <Link to={`/stocksProduct/${_id}`}><button className="btn btn-primary w-36">See Stokes</button></Link> 
                     <Link to={`/borrowed/${_id}`}><button className="btn btn-primary">Borrowed Stokes</button></Link> 
                     <Link><button className="btn btn-primary ml-20">Return Stokes</button></Link> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AbcProductCard;