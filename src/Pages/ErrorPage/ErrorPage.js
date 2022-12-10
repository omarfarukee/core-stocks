import React from 'react';
import {Link } from 'react-router-dom'
import { FaSadTear} from 'react-icons/fa'
import  ('./ErrorPage.css')
const ErrorPage = () => {
    return (
        <div className='error'>
       
            <div className='sad'>
                <FaSadTear></FaSadTear>
            </div>
            <h1>404</h1>
            <p>Oops!! page not found <Link to='/home' className='text-blue-600'>Go back home</Link></p>
        </div>
    );
};

export default ErrorPage;