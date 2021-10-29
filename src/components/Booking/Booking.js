import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import bookingLogo from '../../images/logo/logo.png';
import "./Booking.css";

const Booking = () => {
  const { user } = useAuth();
  const [details, setDetails] = useState({})
  const { register, handleSubmit } = useForm();
  const {id} = useParams();
  
  useEffect(()=>{
    fetch(`http://localhost:5000/services/${id}`)
    .then(res => res.json())
    .then(data => setDetails(data))
  },[])
  const onSubmit = (data) => {
    // fetch('http://localhost:5000/orders', {
    //   method: 'POST',
    //   headers: {
    //     'content-type' : 'application/json'
    //   },
    //   body: JSON.stringify(data)
    // })
    // .then(res => res.json())
    //   .then(result => {
    //       if(result.insertedId){
    //           alert('order proceed succfully');
    //           reset();
    //       }
    //   })

    console.log(data);
  };
  return (
    <div>
        
      <div className="booking-form">
      <img style={{ width: "350px", marginBottom: '20px' }} src={bookingLogo} alt="" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            defaultValue={user.displayName}
            {...register("name", { required: true, maxLength: 20 })}
            placeholder="Name"
          />
          <input
            defaultValue={user.email}
            {...register("email")}
            placeholder="Username or Email"
          />
          <input type="number" {...register("date")} placeholder="Date" />
          
          <input defaultValue={details?.name} {...register("guide name")} placeholder="Guide Name"/>
          <input defaultValue={details?.location} {...register("location")} placeholder="Location"/>
          <input defaultValue={details?.languages} {...register("languages")} placeholder="Languages"/>
          
          
          <input type="submit" value="Booking Now" />
        </form>
      </div>
    </div>
  );
};

export default Booking;
