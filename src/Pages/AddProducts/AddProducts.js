import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProducts = () => {
    const { register, handleSubmit,formState: { errors } } = useForm();
    const imageHosKey = '29473dd4ab78ebc95009722bc0558d38';
    const navigate = useNavigate()
    const handleAddItem = (data) => {
        console.log(data)

        const image = data.images[0];
        const fromData = new FormData();
        fromData.append('image', image);

        const url= `https://api.imgbb.com/1/upload?&key=${imageHosKey}` 
        console.log(url)
        fetch(url, {
            method: 'POST',
            body: fromData
        })
        .then(res => res.json()) 
        .then(imgData => {
          if(imgData.success){
            console.log(imgData.data.url)


            const product = {
                productName : data.productName ,
                image: imgData.data.url,
                costPrice: data.costPrice,
                mrp: data.mrp,
                categoryId: data.categoryId,
                date: data.date,
                cameFrom:data.cameFrom,
                quantity: data.quantity

            }

          
            fetch('https://starting-core-server.vercel.app/stocksProduct', {

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
                toast.success('added Item successfully')
             navigate('/')
            })

          }
        })
    }



    return (
        <div>
            <div className='flex justify-center text-3xl font-bold mt-10 mb-10'><h1>Add Product(Purchased by a factory or agency)</h1></div>
            <div className=' flex justify-center'>
                <form onSubmit={handleSubmit(handleAddItem)}>

                <div className='lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 bg-gray-200 p-5 rounded-2xl'>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Product Name</span></label>
                        <input type="text" {...register("productName", {
                            required: "Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.productName && <p className='text-red-500'>{errors.productName.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Quantity</span></label>
                        <input type="number" {...register("quantity", {
                            required: "Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.quantity && <p className='text-red-500'>{errors.quantity.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Cost</span></label>
                        <input type="number" {...register("costPrice", {
                            required: "Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.costPrice && <p className='text-red-500'>{errors.costPrice.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">M.R.P</span></label>
                        <input type="number" {...register("mrp", {
                            required: "Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.mrp && <p className='text-red-500'>{errors.mrp.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Purchased from</span></label>
                        <input type="text" {...register("cameFrom", {
                            required: "Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.cameFrom && <p className='text-red-500'>{errors.cameFrom.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Purchased Date 'dd/mm/yyyy'</span></label>
                        <input type="text" {...register("date", {
                            required: "Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.date && <p className='text-red-500'>{errors.date.message}</p>}
                    </div>
                    <div className=''>
                        <label className="label"> <span className="label-text">Choose Category</span></label>
                        <select className="select select-bordered  w-full max-w-xs" {...register("categoryId")}>
                            <option value="63917f1a9d1e4e778fde857a">A- T-shirt</option>
                            <option value="63917f1a9d1e4e778fde857b">B- Pants</option>
                            <option value="63917f1a9d1e4e778fde857c">C- Shoes</option>
                        </select>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Photo (photo Should be png/jpg format)</span></label>
                        <input type="file" {...register("images", {
                            required: 'Required'
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.images && <p className='text-red-500'>{errors.images.message}</p>}
                    </div>
                </div>
                <div className='flex justify-center'>
                    <input className='btn btn-success  mt-4 ' value="add this" type="submit" />
                </div>

            </form>
            </div>
            
        </div>


    );
};

export default AddProducts;