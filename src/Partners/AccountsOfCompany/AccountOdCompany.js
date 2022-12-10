import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const AccountOdCompany = () => {
    const { data: accounts = [] } = useQuery({
        queryKey: ['account'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/profitAccount');
            const data = await res.json();
            console.log(data)
            return data;

        }
    })
    return (
        <div>
            <h1>hello</h1>
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
                                    <p><span className='font-bold'>first Partner:</span> {account.thirdPartner},</p>
                                    <p className='ml-2'><span className='font-bold'>Shares:</span> {account.thirdShare}%</p>
                                </div>
                                <div className="card-actions justify-end">
                                  <Link to={`/profitAccount/${account._id}`}><button className="btn btn-primary">Shares Calculate</button></Link>
                                    <button className="btn btn-ghost">Delete Account</button>
                                </div>
                            </div>
                        </div>
                        
                        )
                }
            </div>

        </div>
    );
};

export default AccountOdCompany;