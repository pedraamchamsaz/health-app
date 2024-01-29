"use client"

import React, { useState } from 'react';

const SignUpSheet = () => {
    const [formData, setFormData] = useState({
      name: '',
      age: '',
      weight: '',
      weightUnit: 'kg', 
      height: '',
      heightUnit: 'inch',
      gender: '',
    });
    const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here, e.g., send data to the server

    // Hide the component after submission
    setSubmitted(true);
  };

  if (submitted) {
    return null; // Hide the component if the form is submitted
  }

  return (
    <div className='container center mx-auto mt-8 w-screen bg-blue-200 bg-opacity-50 rounded-md p-4 text-white'>
      <form className='max-w-md mx-auto' onSubmit={handleSubmit}>
        <div className='mb-4 text-center'>
          <label htmlFor='name' className='block text-sm font-bold mb-2'>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            className='input-field bg-black p-2 rounded-md w-full'
            value={formData.name}
            onChange={handleChange}
            placeholder='Name'
          />
        </div>

        <div className='mb-4 text-center'>
          <label htmlFor='age' className='text-sm font-bold mb-2'>
            Age
          </label>
          <select
            id='age'
            name='age'
            className='input-field bg-black p-2 rounded-md w-full'
            value={formData.age}
            onChange={handleChange}
            placeholder='Age'
          >
            {Array.from({ length: 125 }, (_, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>

        <div className='mb-4 text-center'>
          <label htmlFor='weight' className='text-sm font-bold mb-2'>
            Weight
          </label>
          <div className='flex items-center'>
            <input
              type='number'
              step='0.1'
              id='weight'
              name='weight'
              className='input-field bg-black p-2 rounded-md'
              value={formData.weight}
              onChange={handleChange}
              placeholder='Weight'
              min='0'
            />
            <select
              id='weightUnit'
              name='weightUnit'
              className='input-field bg-black p-2 rounded-md ml-2'
              value={formData.weightUnit}
              onChange={handleChange}
            >
              <option value='kg'>kg</option>
              <option value='lbs'>lbs</option>
            </select>
          </div>
        </div>

        <div className='mb-4 text-center'>
          <label htmlFor='height' className='text-sm font-bold mb-2'>
            Height
          </label>
          <div className='flex items-center'>
            <input
              type='number'
              id='height'
              name='height'
              className='input-field bg-black p-2 rounded-md'
              value={formData.height}
              onChange={handleChange}
              placeholder='Height'
              min='0'
            />
            <select
              id='heightUnit'
              name='heightUnit'
              className='input-field bg-black p-2 rounded-md ml-2'
              value={formData.heightUnit}
              onChange={handleChange}
            >
              <option value='inch'>Inch</option>
              <option value='cm'>CM</option>
            </select>
          </div>
        </div>

        <div className='mb-4 text-center'>
          <label htmlFor='gender' className='text-sm font-bold mb-2'>
            Gender
          </label>
          <select
            id='gender'
            name='gender'
            className='input-field bg-black p-2 rounded-md w-full'
            value={formData.gender}
            onChange={handleChange}
            placeholder='Gender'
          >
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select>
        </div>

        <div className='mb-4 text-center'>
          <button
            type='submit'
            className='bg-white text-black py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpSheet;