import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

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
       
        <li className='font-bold'><Link to='/home'>Home</Link></li>
        {
            user?.uid ? <></> :  <li className='font-bold '><Link to='/login'> login</Link></li>
        }
       {
             user?.uid ? <></> : <li className='font-bold '><Link to='/signUp'>Register</Link></li>
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
                <Link to='/home'><a  className="btn btn-ghost normal-case text-xl font-bold hover:bg-green-200 hover:text-black tacks">OFP Tacks</a></Link>   
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {headItems}
                </ul>
            </div>
            <div className="navbar-end" title='Download resume'>
            {
            user?.uid ? <p className='mr-3 font-bold'>'{ user.displayName}'</p> : <p className='font-bold  mr-3'>'user not login'</p>
          }
                {
                    user?.uid ? <button className='btn btn-warning' onClick={handleLogOut}>Log Out</button> : <></>
                } 
               
            </div>
        </div>
    );
};

export default NavBer;