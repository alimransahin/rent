import React from 'react';

const SingleItem = ({item}) => {
    const { id, img, service, title, price, description, location, Bathrooms, Bedrooms, Reception}=item;
    return (
        <div className="card card-compact shadow-xl">
            <figure><img src={img} className="min-w-full" alt="item" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{title}<div className="badge badge-primary">{service}</div></h2>
                <div className="flex justify-between ">
                <span className=' text-center px-4 py-2 text-xl bg-cyan-100 font-bold rounded-full'>Price: ${price}   {
                    service === "Rent" && <span >PM</span> 
                }</span>
                    <span className=' text-center  px-4 py-2 text-xl bg-cyan-100 font-bold rounded-full'> <img src="https://www.clipartmax.com/png/full/121-1214856_pro-locator-free-location-icon-vector.png" className='w-4 inline-block' alt="location" /> {location}</span>
                </div>
                <p>{description}</p>
                <div className="flex justify-between text-lg font-bold">
                    <span>Bedrooms: {Bedrooms}</span>
                    <span>Bathrooms: {Bathrooms}</span>
                    <span>Reception: {Reception}</span>
                </div>
                <div className="card-actions justify-end">
                    {
                        service==="Rent"?<button className="btn btn-primary">Rent Now</button>:
                            <button className="btn btn-primary">Buy Now</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default SingleItem;