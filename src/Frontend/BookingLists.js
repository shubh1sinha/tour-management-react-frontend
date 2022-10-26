
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function BookingLists() {
    const [bookings, setBooking] = useState([])

    useEffect(()=>{
        loadBooking();
    }, []);

    const loadBooking=async()=>{
        const response = await axios.get("http://localhost:9194/tour/bookings");
        setBooking(response.data);
    }
  return (
    <div>
        <div className='contaimer'>
    <div className='container'>
    <div className='py-4'>
    <table class="table border shadow">
<thead className='table-dark'>
<tr>
  <th scope="col">S No</th>
  <th scope="col">Booking Id</th>
  <th scope="col">Customer Id</th>
  <th scope="col">Passengers</th>
  <th scope="col">Price</th>
  <th scope="col">Tour Name</th>
  <th scope="col">Duration</th>
  <th scope="col">Action</th>
</tr>
</thead>
<tbody>
{
    bookings.map((bookings, index)=>(
        <tr>
        <th scope="row" key={index}>{index+1}</th>
        <td>{bookings.bookingId}</td>
        <td>{bookings.customerId}</td>
        <td>{bookings.passengers}</td>
        <td>{bookings.tour.tourName}</td>
        <td>{bookings.tour.price}</td>
        <td>{bookings.tour.duration}</td>
        <td>
        <Link className='btn btn-info mx-2' to={`/customer/${bookings.customerId}`}>View Customer</Link>
        </td>
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
