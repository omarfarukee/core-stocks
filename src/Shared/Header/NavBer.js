import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import img from '../../image/pngwing.com (4) - Copy.png'
import './Navber.css'
const NavBer = () => {
    const {logOut, user} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogOut = () => {
        logOut()
          .then(() => {})
          .catch(error => console.error(error))
        navigate('/')
      }
    const headItems = <>
       
        <li className='font-bold  n-btn   lg:border pl-4 ml-1 rounded-lg'><Link to='/home'>Home</Link></li>
        <li className='font-bold  n-btn   lg:border  ml-1 rounded-lg'><Link to='/addProducts'>Add purchased(prod)</Link></li>
        <li className='font-bold  n-btn   lg:border  ml-1 rounded-lg'><Link to='/borrowedStokes'>Add Borrowed(Prod)</Link></li>
        <li className='font-bold  n-btn   lg:border  ml-1 rounded-lg'><Link to='/returnStokes'>Add Return (prod)</Link></li>
        <li className='font-bold  n-btn   lg:border  ml-1 rounded-lg'><Link to='/addSoldProduct'>Add sold(prod)</Link></li>
        <li className='font-bold  n-btn   lg:border  ml-1 rounded-lg'><Link to='/addLendProduct'>Add lend(prod)</Link></li>
        <li className='font-bold  n-btn   lg:border  ml-1 rounded-lg'><Link to='/addReturnBackProduct'>Add Return Back(prod)</Link></li>
        <li className='font-bold  n-btn   lg:border  ml-1 rounded-lg'><Link to='/allStocksDetails'>All Stocks Details</Link></li>
        <li className='font-bold  n-btn   lg:border  ml-1 rounded-lg'><Link to='/profitAccount'>Create Shares Account</Link></li>

        {/* {
            user?.uid ? <></> :  <li className='font-bold text-sm text-center n-btn  bg-white  ml-1 rounded-lg'><Link to='/login'> login</Link></li>
        } */}
       {
             user?.uid ? <></> : <li className='font-bold text-sm text-center n-btn  bg-yellow-300  ml-1 rounded-lg'><Link to='/signUp'>Sign up</Link></li>
       }
       
    

    </>
    return (

        <div className="navbar bg-gray-300 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {headItems}
                    </ul>
                </div>
                <Link to='/home'><a  className="btn btn-ghost normal-case text-xl font-bold bg-yellow-100 hover:bg-green-200 hover:text-black tacks"><div className='flex items-center'><img src={img} className='w-10 lg:block hidden' alt="" /><span className='text-sm'>Core-Stocks</span> </div></a></Link>   
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {headItems}
                </ul>
            </div>
            <div className="navbar-end" title='Download resume'>
            {
            user?.uid ? <p className='mr-3 font-bold text-sm'>'{ user.displayName}'</p> : <p className='font-bold text-sm mr-3'>'user not login'</p>
          }
                {
                    user?.uid ? <button className='btn btn-warning' onClick={handleLogOut}>Log Out</button> : <></>
                } 
               
            </div>
        </div>
    );
};

export default NavBer;