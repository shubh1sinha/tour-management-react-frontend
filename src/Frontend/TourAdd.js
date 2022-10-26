import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';



export default function TourAdd() {

    let navigate = useNavigate();
    const [tour, setTour] = useState({
        tourName : '',
        description: '',
        duration: '',
        startDate: '',
        price: ''
    })

    const{tourName, description, duration, startDate, price} = tour

    const onInputChange=(e)=>{
setTour({...tour,[e.target.name]: e.target.value})
    }

    const save=async(e)=>{
        e.preventDefault();

        await axios.post("http://localhost:9194/tour/add", tour)
        navigate('/tour/list')
    }


  return (
    <div>
        

        <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Add Tour</h2>
                <form onSubmit={(e)=>save(e)}>
                    <div className='mb-3'>
                    <input type={"text"}
                    className="form-control"
                    placeholder='Enter tour name'
                    name="tourName"
                    value={tourName} 
                    onChange={(e)=>onInputChange(e)} />
                    </div>

                    <div className='mb-3'>
                    <input type={"text"}
                    className="form-control"
                    placeholder='Enter tour description'
                    name="description"
                    value={description} 
                    onChange={(e)=>onInputChange(e)} />
                    </div>

                    <div className='mb-3'>
                    <input type={"number"}
                    className="form-control"
                    placeholder='Enter duration'
                    name="duration"
                    value={duration}
                    onChange={(e)=>onInputChange(e)} />
                    </div>

                    <div className='mb-3'>
                    <input type={"date"}
                    className="form-control"
                    placeholder='Enter your contact'
                    name="startDate" 
                    value={startDate} 
                    onChange={(e)=>onInputChange(e)} />
                    </div>

                    <div className='mb-3'>
                    <input type={"number"}
                    className="form-control"
                    placeholder='Enter price'
                    name="price" 
                    value={price}
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
