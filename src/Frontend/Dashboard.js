import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'

export default function Dashboard() {
    const{id}=useParams()

    const[customer, setCustomer] = useState({
      name:"",
      username:"",
      password:"",
      phoneNumber:"",
      age:""
  })

    useEffect(()=>{
      loadCustomer()
  },[])
  const loadCustomer = async ()=>{
      const result = await axios.get(`http://localhost:9194/tour/customer/${id}`)
      console.log(result)
      setCustomer(result.data)
  }

    if(id === 'admin'){
  return (

    <div>
      <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Admin Management</h2>
                <div className='card'>
                    <div className='card-header'>
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                            <Link className='btn btn-outline-dark' to='/booking/list'>Customer Bookings</Link> &nbsp;
                            <Link className='btn btn-outline-dark' to={`/tour/list/${id}`} >View Tour</Link> &nbsp;
                            <Link className='btn btn-outline-dark' to={`/customer/list/${id}`}>Customer List</Link> &nbsp;
                            <Link className='btn btn-outline-dark' to='/tour/add'>Add Tour</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
    </div>
    </div>
    
    
  )
    }
    else if(id !== 'admin'){
      return (

        <div>
        <div className='row'>
              <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                  <h2 className='text-center m-4'>Customer Management</h2>
                  <div className='card'>
                      <div className='card-header'>
                          <ul className='list-group list-group-flush'>
                              <li className='list-group-item'>
                              <Link className='btn btn-outline-dark' to={`/tour/list/${customer.customerId}`}>Book Tours</Link> &nbsp;
                              <Link className='btn btn-primary mx-2' to={`/booking/${customer.customerId}`}>Bookings</Link>
                              </li>
                              </ul>
                              </div>
                              </div>
                              </div>
      </div>
      </div>
      
      
    )
      
    }
}
