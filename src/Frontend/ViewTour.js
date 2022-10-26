import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'

export default function ViewTour() {

    const{id}=useParams()
    const [tours, setTours] = useState([])

    useEffect(()=>{
        loadTours();
    }, []);

    const loadTours=async()=>{
        const response = await axios.get("http://localhost:9194/tour/list");
        setTours(response.data);
    }

    if(id === 'admin'){
      return (
        <div className='contaimer'>
            <div className='container'>
            <div className='py-4'>
              <div>
              
              </div>
              <hr>
              </hr>
            <table class="table border shadow">
      <thead className='table-dark'>
        <tr>
          <th scope="col">S No</th>
          <th scope="col">Tour Name</th>
          <th scope="col">Description</th>
          <th scope="col">Duration</th>
          <th scope="col">Date</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        {
            tours.map((tours, index)=>(
                <tr>
                <th scope="row" key={index}>{index+1}</th>
                <td>{tours.tourName}</td>
                <td>{tours.description}</td>
                <td>{tours.duration}</td>
                <td>{tours.startDate}</td>
                <td>{tours.price}</td>
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
          <th scope="col">Tour Name</th>
          <th scope="col">Description</th>
          <th scope="col">Duration</th>
          <th scope="col">Date</th>
          <th scope="col">Price</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {
            tours.map((tours, index)=>(
                <tr>
                <th scope="row" key={index}>{index+1}</th>
                <td>{tours.tourName}</td>
                <td>{tours.description}</td>
                <td>{tours.duration}</td>
                <td>{tours.startDate}</td>
                <td>{tours.price}</td>
                <td>
                    <Link className='btn btn-info mx-2' to={`/customer/${id}/tour/${tours.tourId}`}>Book</Link>
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
