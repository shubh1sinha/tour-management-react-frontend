import React, {useState} from 'react'
import axios from 'axios';
import {Link, useParams, useNavigate} from 'react-router-dom'

export default function BookTour() {

    const{id} = useParams();
    const{tourId} = useParams();
    let navigate = useNavigate();
    
    const [tour, setTour] = useState({
        customerId: '',
        passengers: ''
    })

    const{passengers} = tour

    const onInputChange=(e)=>{
setTour({...tour,[e.target.name]: e.target.value})
    }

    const save=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:9194/tour/booking?tourId="+tourId+"&customerId="+id, tour)
        
        navigate('/booking/'+id)
    }


  return (
    <div>
        <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Add Tour</h2>
                <form onSubmit={(e)=>save(e)}>
                    <div className='mb-3'>
                    <input type={"hidden"}
                    className="form-control"
                    name="customerId"
                    value={id} 
                    />
                    </div>

                    <div className='mb-3'>
                    <input type={"number"}
                    className="form-control"
                    placeholder='Enter No Of Passengers'
                    name="passengers"
                    value={passengers}
                    onChange={(e)=>onInputChange(e)} />
                    </div>

                    <button type='submit' className='btn btn-outline-primary'>Submit</button>
                    &nbsp;
                    <Link type='submit' className='btn btn-outline-danger' to='/'>Cancel</Link>
                </form>
            </div>
        </div>
    </div>

    </div>
  )
}
