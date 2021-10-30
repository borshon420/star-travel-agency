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
  const [details, setDetails] = useState({});
  const { register, handleSubmit} = useForm();
  const {id} = useParams();
  
  useEffect(()=>{
    fetch(`https://nameless-brook-91912.herokuapp.com/services/${id}`)
    .then(res => res.json())
    .then(data => setDetails(data))
  },[])


  

  const onSubmit = (data) => {
    fetch(`https://nameless-brook-91912.herokuapp.com/orders`, {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
      .then(result => {
          if(result.insertedId){
              alert('Booking proceed succfully');
              
          }
      })
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
          {/* <input type="text" {...register("address")} placeholder="address" required/> */}
          
          <input type="text" defaultValue={details.name} {...register("guide")} placeholder="Guide Name" />
          <input type="text" defaultValue={details.location} {...register("location")} placeholder="Location" />
          <input type="text" defaultValue={details.languages} {...register("languages")} placeholder="Languages" />
          <input type="submit" defaultValue="Booking Now" />
        </form>
      </div>
    </div>
  );
};


export default Booking;
