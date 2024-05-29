import React from 'react'
import { useForm } from "react-hook-form"

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    
    <div className='flex h-screen items-center justify-center'>
      <div className='border-[2px] p-8 rounded-xl '>
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
    <h3 className="font-bold text-lg">Contact:</h3>
    {/* Name */}
    <div className="mt-4 space-y-2">
        <span>Name</span>
          <br />
          <input
            type="text"
            placeholder="Enter your fullname"
            className="w-80 px-3 py-1 border rounded-md outline-none"
            {...register("name", { required: true })}
          />
          <br/>
          {errors.name && <span className='text-sm text-red-500'>
            This field is required</span>}
    </div>
    {/* Email */}
    <div className="mt-4 space-y-2">
        <span>Email</span>
          <br />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-80 px-3 py-1 border rounded-md outline-none"
            {...register("email", { required: true })}
          />
          <br/>
          {errors.email && <span className='text-sm text-red-500'>
            This field is required</span>}
    </div>

    <div className="mt-4 space-y-2">
        <span>Add Title</span>
        <br/>
        <textarea name="content" 
        placeholder='Enter your message'
        className='w-80 px-3 py-1 border rounded-md outline-none'
        {...register("content", { required: true })}
        />
        <br/>
        {errors.content && <span className='text-sm text-red-500'>
            This field is required</span>}
    </div>
    {/* Button */}
    <div className='flex justify-around mt-4'>
      <button className='bg-pink-500 text-white rounded-md px-3 py-1
      hover:bg-pink-700 duration 200'>Submit</button>
    </div>
    </form>
    </div>
    </div>
   
  )
}

export default Contact
