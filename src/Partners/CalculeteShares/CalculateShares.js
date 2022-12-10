import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const CalculateShares = () => {
    const [first, setFirst] = useState(0)
    const [second, setSecond] = useState(0)
    const [third, setThird] = useState(0)
    const [product, setProduct] = useState('')
    const [quantity, setQuantity] = useState('0')
    const [title, setTitle] = useState('')
    const accountDetails = useLoaderData()
    console.log(accountDetails[0])

    const handleCalculate = event => {
        event.preventDefault();
        const form = event.target

        const productName = form.productName.value
        setProduct(productName)

        const quantity = form.quantity.value
        setQuantity(quantity)

        const cost = form.cost.value
        const costs = parseInt(cost)


        const sell = form.sell.value
        const sells = parseInt(sell)

        const amount = Math.abs(sells - costs)

        const firstShare = form.firstShare.value
        const firstShares = parseInt(firstShare)
        const firstGot = (firstShares * amount) / 100
        setFirst(firstGot)

        const secondShare = form.secondShare.value
        const secondShares = parseInt(secondShare)
        const secondGot = (secondShares * amount) / 100
        setSecond(secondGot)

        const thirdShare = form.thirdShare.value
        const thirdShares = parseInt(thirdShare)
        const thirdGot = (thirdShares * amount) / 100

        setThird(thirdGot)
        if (costs > sells) {
            setTitle('loss')
        }
        else {
            setTitle('profit')
        }
    
        
        // console.log(secondShare, amount)
    }
    return (
        <div className=''>
            <div className='flex justify-center mb-10 mt-10'>
                <h1 className='text-3xl font-bold'>{accountDetails[0].companyName}'s Shares Calculate</h1>
            </div>

            <div className='text-center'>
                <form onSubmit={handleCalculate}>
                    <div className='mb-5'>
                        <input required name='productName' type="text" placeholder="Product Name" className="input input-bordered input-primary w-full max-w-xs mr-3" />
                        <input required name='quantity' type="number" placeholder="Product quantity" className="input input-bordered input-primary w-full max-w-xs" />
                    </div>
                    <div className='mb-5'>
                        <input required name='cost' type="number" placeholder="Cost price" className="input input-bordered input-primary w-full max-w-xs mr-3" />
                        <input required name='sell' type="number" placeholder="selling price" className="input input-bordered input-primary w-full max-w-xs" />
                    </div>
                    <div className='flex justify-center'>
                        <p className='mr-24'>Partners name</p>
                        <p className='ml-32'>Shares Percentage (out of 100%)</p>
                    </div>
                    <div className='mb-5'>
                        <input name='firstPartner' type="text" defaultValue={accountDetails[0].firstPartner} disabled placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs mr-3" />
                        <input name='firstShare' type="number" defaultValue={accountDetails[0].firstShare} disabled placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                    </div>
                    <div className='mb-5'>
                        <input name='secondPartner' type="text" defaultValue={accountDetails[0].secondPartner} disabled placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs mr-3" />
                        <input name='secondShare' type="number" defaultValue={accountDetails[0].secondShare} disabled placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                    </div>
                    <div className='mb-5'>
                        <input name='thirdPartner' type="text" defaultValue={accountDetails[0].thirdPartner} disabled placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs mr-3" />
                        <input name='thirdShare' type="number" defaultValue={accountDetails[0].thirdShare} disabled placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                    </div>
                    <button className='btn btn-success'>Calculate Shares</button>
                </form>
            </div>
            <div className='flex justify-center  mt-10'>
                <h1 className='text-3xl font-bold'>Partners Shares Amount (profit/lost)</h1>
            </div>
            <div className='flex justify-center p-10 mt-2'>
                <div className='border p-16 bg-gray-200 rounded-lg'>

                    <div className='flex justify-between mb-5'>
                        <h1 className='mr-3'><span className='font-bold'>product name:</span> {product},</h1>
                        <h1><span className='font-bold'>Quantity:</span> {quantity}</h1>
                    </div>
                    <h1 className='text-2xl'>{accountDetails[0].firstPartner}'s {title} = {first} Rs.</h1>
                    <h1 className='text-2xl'>{accountDetails[0].secondPartner}'s {title} = {second} Rs.</h1>
                {
                    accountDetails[0].thirdPartner && <h1 className='text-2xl'>{accountDetails[0].thirdPartner}'s {title} = {third} Rs.</h1>
                }
                    


                </div>
            </div>
        </div>
    );
};

export default CalculateShares;