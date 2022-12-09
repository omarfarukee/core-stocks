import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const BorrowedStokes = () => {

    const { register, handleSubmit,formState: { errors } } = useForm();
    const imageHosKey = '29473dd4ab78ebc95009722bc0558d38';
    const navigate = useNavigate()
    const handleBorrowedItem = (data) => {
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
                borrowedDate: data.borrowedDate,
                borrowedFrom:data.borrowedFrom,
                quantity: data.quantity,
            }

          
            fetch('http://localhost:5000/borrowed', {

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
                toast.success('added borrowed Item successfully')
                navigate('/')
            })

          }
        })
    }

    return (
        <div>
            <div className='flex justify-center mt-10 text-3xl text-green-900 font-bold'>
                <h1 className='text'>Add Product (Borrowed)</h1>
            </div>
            <form onSubmit={handleSubmit(handleBorrowedItem)}>

<div className='lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 bg-gray-300 p-5 rounded-2xl ml-3'>

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
        <label className="label"> <span className="label-text">Borrowed from</span></label>
        <input type="text" {...register("borrowedFrom", {
            required: "Required"
        })} className="input input-bordered w-full max-w-xs" />
        {errors.borrowedFrom && <p className='text-red-500'>{errors.borrowedFrom.message}</p>}
    </div>

    <div className="form-control w-full max-w-xs">
        <label className="label"> <span className="label-text">Borrowed Date 'dd/mm/yyyy'</span></label>
        <input type="text" {...register("borrowedDate", {
            required: "Required"
        })} className="input input-bordered w-full max-w-xs" />
        {errors.borrowedDate && <p className='text-red-500'>{errors.borrowedDate.message}</p>}
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
    );
};

export default BorrowedStokes;