import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const AllServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("https://photograpy-server-site.vercel.app/service/all")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    console.log(services    );
    return (
        <div className='grid grid-cols-12'>
            {
                services.map(service =>
                    <div key={services._id} className="flex justify-center col-span-4 mb-20">
                        <div className="rounded-lg shadow-lg bg-white max-w-sm">
                            <a href="#!">
                                <img className="rounded-t-lg bg-top" src={service.img} alt="" />
                            </a>
                            <div className="p-6">
                                <h5 className="text-gray-900 text-xl font-medium mb-2">{service.title}</h5>
                                <p className="text-gray-700 text-base mb-4">
                                    {service.description.slice(0, 50)}...
                                </p>
                               <div className='w-full flex justify-center'>
                                    <Link to={`/services/${service._id
                                        }`} type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">See Detail</Link>
                               </div>
                            </div>

                        </div>
                    </div>
                )
            }
        </div>

    );
};

export default AllServices;