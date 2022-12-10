import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const AccountOdCompany = () => {
    const {account, setAccounts} = useState([])
    const { data: accounts = [] , refetch} = useQuery({
        queryKey: ['account'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/profitAccount');
            const data = await res.json();
            console.log(data)
            return data;

        }
    })

    const handleDeleteAccount = id =>{
        const proceed = window.confirm('Are you sure, want to delete this Account')
        if(proceed){
            fetch( `http://localhost:5000/profitAccount/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0) {
                    toast.success('Account Deleted Successfully')
                    const remaining = account.filter(acc => acc._id !== id)
                    setAccounts(remaining)
                    refetch()
                    window.location.reload()
                }
            })
        }
}
    return (
        <div>
            <div>
                <h1 className='flex justify-center text-3xl mb-10 mt-10 font-bold'>All Shares Accounts</h1>
            </div>
            {accounts?.length === 0 ? 

            <p className='text-4xl text-center mt-28 font-extrabold text-red-600'>No share account created</p>
            :
        
            
            <div className='grid grid-cols-3 ml-10'>
                {
                    accounts?.map(account =>
        
                        <div className="card w-96 bg-neutral text-neutral-content">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Company name: {account.companyName}</h2>
                                <div className='flex justify-between'>
                                    <p><span className='font-bold'>first Partner:</span> {account.firstPartner},</p>
                                    <p className='ml-2'><span className='font-bold'>Shares:</span> {account.firstShare}%</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p><span className='font-bold'>Second Partner:</span> {account.secondPartner},</p>
                                    <p className='ml-2'><span className='font-bold'>Shares:</span> {account.secondShare}%</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p><span className='font-bold'>Third Partner:</span> {account.thirdPartner},</p>
                                    <p className='ml-2'><span className='font-bold'>Shares:</span> {account.thirdShare}%</p>
                                </div>
                                <div className="card-actions justify-end">
                                  <Link to={`/profitAccount/${account._id}`}><button className="btn btn-primary">Shares Calculate</button></Link>
                                    <button onClick={() => handleDeleteAccount(account._id)} className="btn btn-ghost">Delete Account</button>
                                </div>
                            </div>
                        </div>
                        
                        )
                }
            </div>
        }
        </div>
    );
};

export default AccountOdCompany;