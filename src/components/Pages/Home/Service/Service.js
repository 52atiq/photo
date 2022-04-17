import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {id, name,price,image, description} = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id =>{
         navigate(`/service/${id}`)
    }
    return (
        <div class="col">
    <div class="card h-100">
      <img style={{height:'200px'}} src= {image} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title text-center">{name}</h5>
        <p class="card-text">{description}</p>
        <h4 className='text-center'>${price}</h4>
      </div>
     
        <button onClick={ () => navigateToServiceDetail(id)} className='btn btn-primary'>Book</button>
      
    </div>
    </div>
       
    );
};

export default Service;