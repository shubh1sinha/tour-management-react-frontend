import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'

export default function CustomerInfo() {
    const[customer, setCustomer] = useState({
        name:"",
        username:"",
        password:"",
        phoneNumber:"",
        age:""
    })

    const {id}  = useParams();

    useEffect(()=>{
        loadCustomer()
    },[])
    const loadCustomer = async ()=>{
        const result = await axios.get(`http://localhost:9194/tour/customer/get/${id}`)
        setCustomer(result.data)
    }
  return (
    <div>
            <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Customer Infromation</h2>
                <div className='card'>
                    <div className='card-header'>
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                                <b>Name: &nbsp;{customer.name}</b>
                            </li>
                            <li className='list-group-item'>
                                <b>Username: &nbsp;{customer.username}</b>
                            </li>
                            <li className='list-group-item'>
                                <b>Password:&nbsp;{customer.password}</b>
                            </li>
                            <li className='list-group-item'>
                                <b>Phone:&nbsp;{customer.phoneNumber}</b>
                            </li>
                            <li className='list-group-item'>
                                <b>Age:&nbsp;{customer.age}</b>
                            </li>

                        </ul>
                    </div>
                    <Link className="btn btn-danger my-2" to={'/'}>Home</Link>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
