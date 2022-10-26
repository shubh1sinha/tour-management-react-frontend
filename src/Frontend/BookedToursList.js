import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'

export default function BookedToursList() {
    const{id}=useParams()
    const [booking, setBooking] = useState([])

    useEffect(()=>{
        loadBooking();
    }, []);

    const loadBooking=async()=>{
        const response = await axios.get("http://localhost:9194/tour/list/booking?customerId="+id);
        setBooking(response.data);
    }


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
        const result = await axios.get(`http://localhost:9194/tour/customer/get/${id}`)
        console.log(result)
        setCustomer(result.data)
    }




  return (
    <div>
        <div className='contaimer'>
    <div className='container'>
    <div className='py-4'>
    <table class="table border shadow">
<thead className='table-dark'>
<tr>
  <th scope="col"></th>
  <th scope="col">Customer information</th>
  <th scope="col"></th>
</tr>
</thead>
<tbody>
{

        <tr>
        <td>{customer.name}</td>
        <td>{customer.username}</td>
        <td>{customer.phoneNumber}</td>


        </tr>

}
</tbody>
</table>

    <table class="table border shadow">
<thead className='table-dark'>
<tr>
  <th scope="col">S No</th>
  <th scope="col">Booking Ref Id</th>
  <th scope="col">Passengers</th>
  <th scope="col">Price</th>
  <th scope="col">Tour Name</th>
  <th scope="col">Date</th>
  <th scope="col">Duration</th>
</tr>
</thead>
<tbody>
{
    booking.map((booking, index)=>(
        <tr>
        <th scope="row" key={index}>{index+1}</th>
        <td>{booking.bookingId}</td>
        <td>{booking.passengers}</td>
        <td>{booking.price}</td>
        <td>{booking.tour.tourName}</td>
        <td>{booking.tour.startDate}</td>
        <td>{booking.tour.duration}</td>
        {/* <td>
            <Link className='btn btn-primary mx-2' to={`/booking/${booking.customerId}`}>Bookings</Link>
            <Link className='btn btn-danger mx-2' to={`/tour/book/${booking.customerId}`}>Book Tour</Link>
            <Link className='btn btn-info mx-2' to={`/customer/${booking.username}`}>View</Link>
        </td> */}
        </tr>
    ))
}
</tbody>
</table>
    </div>
    
</div>
</div>
    </div>
  )
}
