import React from 'react'
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data); 
  };
  return (

     <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className='text-center mt-5'>FORM</h1>
      <div className='text-center mt-5'>
        <label htmlFor="blogName">Blog Name:</label>
        <input
          type="text"
          id="blogName"
          {...register('blogName', { required: true })}
        />
      </div>
      <div className='text-center mt-5'>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          {...register('description', { required: true })}
        ></textarea>
      </div>
      <div className='text-center mt-5'>
        <label htmlFor="authorName">Author Name:</label>
        <input
          type="text"
          id="authorName"
          {...register('authorName', { required: true })}
        />
      </div>
      <button variant="primary" type ="submit" onclick={handleClick}>Submit</button>{' '}
    </form>
   
);
}

  