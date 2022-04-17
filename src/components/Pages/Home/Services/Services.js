import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setService] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res =>res.json())
        .then(data => setService(data))
    },[])
    return (
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 mt-5 g-4"'>
            {/* <h2 className='text-center'> SERVICES </h2> */}
            {
                services.map(service => <Service
                key={service.id}
                service={service}
                ></Service>)
            }
        </div>
    );
};

export default Services;