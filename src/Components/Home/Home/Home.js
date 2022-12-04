import React, { useEffect, useState } from 'react';
import SingleItem from '../SingleItem/SingleItem';

const Home = () => {
    const [items, setItems] = useState([]);
    const [filteredItem, setFilteredItem] = useState([]);
    useEffect(() => {
        fetch('data.json') 
            .then(results => results.json())
            .then(data => {
                setItems(data);
            });
    }, [])
    const locations = [];
    items.map(item => !locations.includes(item.location) && locations.push(item.location))

    const handleSubmit = event => {

        event.preventDefault();
        const form = event.target;
        const service = form.status.value;
        const location = form.location.value;
        const bedroom = form.bedroom.value;
        const Bathrooms = form.Bathrooms.value;
        console.log(bedroom);
        const filterItems = items.filter( item=>{
            return item.service === service &&
                item.location === location&&
                item.Bedrooms>=bedroom&&
                item.Bathrooms >= Bathrooms;
        }
        );
        setFilteredItem(filterItems);
    }


return (
    <div>
        <div className="hero bg-base-200">
            <div className="card w-full m-16 shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit} className="grid grid-cols-5 gap-4">
                    <div className="form-control p-4">
                        <label className="label">
                            <span className="label-text">Status</span>
                        </label>

                        <label className="label cursor-pointer w-1/2">
                            <span className="label-text"> Rent </span>
                        </label>
                        <input type="radio" name="status" value="Rent" className="radio checked:bg-red-500 ml-2" />
                        <label className="label cursor-pointer">
                            <span className="label-text"> Sell </span>
                        </label>
                        <input type="radio" name="status" value='Sell' className="radio checked:bg-blue-500 ml-2" />

                    </div>
                    <div className="form-control p-4">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <select className="select select-bordered w-full max-w-xs" name='location'>
                            <option selected >Location</option>
                            {
                                locations.map(location => <option value={location} >{location}</option>)
                            }
                        </select>
                    </div>
                    <div className="form-control p-4">
                        <label className="label">
                            <span className="label-text">Bedroom more then</span>
                        </label>
                        <input type="text" name="bedroom" required placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control p-4">
                        <label className="label">
                            <span className="label-text">Bathrooms more then</span>
                        </label>
                        <input type="text" name="Bathrooms" required placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control mt-6 p-4">
                        <input className="btn btn-primary" type="submit" value="Search" />
                    </div>
                </form>
            </div>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItem.length > 0 ? filteredItem.map(item => <SingleItem key={item.id} item={item}></SingleItem>) :
                items.map(item => <SingleItem key={item.id} item={item}></SingleItem>)
            }
        </div>
    </div>
);
};

export default Home;