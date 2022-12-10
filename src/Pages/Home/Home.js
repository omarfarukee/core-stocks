import React from 'react';

import AbcProducts from '../AbcProducts/AbcProducts';
// import img from '../../image/F2Z7Lbz2tLP5K35GcEYFTg-1200-80.jpg'
import './Home.css'
const Home = () => {
    return (
        <div>
            <div className='backs flex justify-center items-center'>
                <div className='text-center text-white w-4/5'>
                    <h1 className=' mb-3'>We have been running our company with utmost trust.
                        We run our company by skilled and trusted people. So our company is one of the top companies in the country. And I believe if you get to know our company better you will understand our loyalty</h1>
                    <button className="btn btn-info">Welcome to Our Core-Stocks site</button>
                </div>

            </div>

            <AbcProducts></AbcProducts>
        </div>
    );
};

export default Home;