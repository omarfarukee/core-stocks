import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const Partners = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const handleAddItem = (data) => {
        console.log(data)


        const product = {
            companyName: data.companyName,
            firstShare: data.firstShare,
            secondShare: data.secondShare,
            thirdShare: data.thirdShare,
            firstPartner: data.firstPartner,
            secondPartner: data.secondPartner,
            thirdPartner: data.thirdPartner
        }

        fetch('https://starting-core-server.vercel.app/profitAccount', {

            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(result => {

                console.log(result)
                alert('its can take few moment please wait')
                toast.success('create account successfully')
                navigate('/companyAccount')
            })
    }
    return (
        <div>
            <div>
                <div className='flex justify-center mb-10 mt-10 text-3xl font-bold'><h1>Create shares Account</h1></div>
                <div className='flex justify-center'>
                    <form onSubmit={handleSubmit(handleAddItem)}>

                        <div className='lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 bg-gray-300 p-5 rounded-2xl ml-3'>

                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Company Name</span></label>
                                <input type="text" {...register("companyName", {
                                    required: "Required"
                                })} className="input input-bordered w-full max-w-xs" />
                                {errors.companyName && <p className='text-red-500'>{errors.companyName.message}</p>}
                            </div>
                            <div className=''>
                                <label className="label"> <span className="label-text">Number Of partners (Maximum three minimum two)</span></label>
                                <select className="select select-bordered  w-full max-w-xs" {...register("categoryId")}>

                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">First Partner Name</span></label>
                                <input type="text" {...register("firstPartner", {
                                    required: "Required"
                                })} className="input input-bordered w-full max-w-xs" />
                                {errors.firstPartner && <p className='text-red-500'>{errors.firstPartner.message}</p>}
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Amount of First Partner's Shares(out of 100%)</span></label>
                                <input type="number" {...register("firstShare", {
                                    required: "Required"
                                })} className="input input-bordered w-full max-w-xs" />
                                {errors.firstShare && <p className='text-red-500'>{errors.firstShare.message}</p>}
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Second Partner Name</span></label>
                                <input type="text" {...register("secondPartner", {
                                    required: "Required"
                                })} className="input input-bordered w-full max-w-xs" />
                                {errors.secondPartner && <p className='text-red-500'>{errors.secondPartner.message}</p>}
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Amount of second Partner's Shares(out of 100%)</span></label>
                                <input type="number" {...register("secondShare", {
                                    required: "Required"
                                })} className="input input-bordered w-full max-w-xs" />
                                {errors.secondShare && <p className='text-red-500'>{errors.secondShare.message}</p>}
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Third Partner Name</span></label>
                                <input type="text" {...register("thirdPartner", {
                                    // required: "Required"
                                })} className="input input-bordered w-full max-w-xs" />
                                {errors.thirdPartner && <p className='text-red-500'>{errors.thirdPartner.message}</p>}
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Amount of third Partner's Shares(out of 100%)</span></label>
                                <input type="number" {...register("thirdShare", {
                                    // required: ""
                                })} className="input input-bordered w-full max-w-xs" />
                                {errors.thirdShare && <p className='text-red-500'>{errors.thirdShare.message}</p>}
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <input className='btn btn-success  mt-4 ' value="add this" type="submit" />

                        </div>

                    </form>

                </div>

                <div className='flex justify-center'>
                    <Link to='/companyAccount'> <button className='btn btn-primary mt-2 mb-10'>See All Shares account</button></Link>

                </div>
            </div>
        </div>
    );
};

export default Partners;