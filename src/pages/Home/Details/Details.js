import React from 'react';
import useAuth from '../hooks/useAuth';
import { useForm } from 'react-hook-form';

const Details = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user}=useAuth();
  const onSubmit = data => {
      
    console.log(data);}
    return (
        <div>
            <form  onSubmit={handleSubmit(onSubmit)}>
      
      <input defaultValue={user.displayName} {...register("name")} />
      
    
      <input placeholder='email enter'  defaultValue={user.email} {...register("email", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.email && <span className='error'>This field is required</span>}
      
      <input type="submit" />
    </form>
        </div>
    );
};

export default Details;