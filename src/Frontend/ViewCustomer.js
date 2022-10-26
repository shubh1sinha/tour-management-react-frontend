import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'

export default function ViewCustomer() {
    const{id} = useParams()
    const [customer, setCustomer] = useState([])

    useEffect(()=>{
        loadCustomer();
    }, []);

    const loadCustomer=async()=>{
        const response = await axios.get("http://localhost:9194/tour/customer/list");
        setCustomer(response.data);
    }

    if(id === 'admin'){
        return (
            <div className='contaimer'>
            <div className='container'>
            <div className='py-4'>
            <table class="table border shadow">
        <thead className='table-dark'>
        <tr>
          <th scope="col">S No</th>
          <th scope="col">Name</th>
          <th scope="col">Username</th>
          <th scope="col">Phone</th>
          <th scope="col">Age</th>
          <th scope="col">Action</th>
        </tr>
        </thead>
        <tbody>
        {
            customer.map((customer, index)=>(
                <tr>
                <th scope="row" key={index}>{index+1}</th>
                <td>{customer.name}</td>
                <td>{customer.username}</td>
                <td>{customer.phoneNumber}</td>
                <td>{customer.age}</td>
                <td>
                    <Link className='btn btn-primary mx-2' to={`/booking/${customer.customerId}`}>Bookings</Link>
                    {/* <Link className='btn btn-danger mx-2' to={`/tour/book/${customer.customerId}`}>Book Tour</Link> */}
                    <Link className='btn btn-info mx-2' to={`/customer/${customer.customerId}`}>View</Link>
                </td>

                </tr>
            ))
        }
        </tbody>
        </table>
            </div>
        </div>
        </div>
          )
    }
    else{
        return (
            <div className='contaimer'>
            <div className='container'>
            <div className='py-4'>
            <table class="table border shadow">
        <thead className='table-dark'>
        <tr>
          <th scope="col">S No</th>
          <th scope="col">Name</th>
          <th scope="col">Username</th>
          <th scope="col">Phone</th>
          <th scope="col">Age</th>
          <th scope="col">Action</th>
        </tr>
        </thead>
        <tbody>
        {
            customer.map((customer, index)=>(
                <tr>
                <th scope="row" key={index}>{index+1}</th>
                <td>{customer.name}</td>
                <td>{customer.username}</td>
                <td>{customer.phoneNumber}</td>
                <td>{customer.age}</td>
                <td>
                    <Link className='btn btn-primary mx-2' to={`/booking/${customer.customerId}`}>Bookings</Link>
                    <Link className='btn btn-danger mx-2' to={`/tour/book/${customer.customerId}`}>Book Tour</Link>
                    <Link className='btn btn-info mx-2' to={`/customer/${customer.customerId}`}>View</Link>
                </td>
                </tr>
            ))
        }
        </tbody>
        </table>
            </div>
        </div>
        </div>
          )
    }
  
}
