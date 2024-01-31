"use client";

import React from 'react';

const UserInfo = ({ userData }) => {
  if (!userData) {
    // Handle case where user data is not available
    return null;
  }

  const {
    name,
    age,
    weight,
    weightUnit,
    height,
    heightUnit,
    gender,
    username,
    weightGoal,
    weightIncrement,
    email,
    phone,
  } = userData;

  return (
    <div className='container mx-auto mt-8 bg-blue-400 bg-opacity-50 rounded-md p-4 text-white'>
      <div className='mb-4 text-center text-xl font-bold'>
        <h3>User Information</h3>
      </div>

      <hr className='my-4 border-white' />

      <div className='max-w-md mx-auto'>
        <div className='mb-4 text-center'>
          <label htmlFor='name' className='block text-sm font-bold mb-2'>
            Name
          </label>
          <div className='text-white'>{name}</div>
        </div>

        <div className='mb-4 text-center'>
          <label htmlFor='age' className='text-sm font-bold mb-2'>
            Age
          </label>
          <div className='text-white'>{age}</div>
        </div>

        <div className='mb-4 text-center'>
          <label htmlFor='weight' className='text-sm font-bold mb-2'>
            Weight
          </label>
          <div className='text-white'>{`${weight} ${weightUnit}`}</div>
        </div>

        <div className='mb-4 text-center'>
          <label htmlFor='height' className='text-sm font-bold mb-2'>
            Height
          </label>
          <div className='text-white'>{`${height} ${heightUnit}`}</div>
        </div>

        <div className='mb-4 text-center'>
          <label htmlFor='gender' className='text-sm font-bold mb-2'>
            Gender
          </label>
          <div className='text-white'>{gender}</div>
        </div>

        <div className='mb-4 text-center'>
          <label className='text-sm font-bold mb-2'>Weight Goal</label>
          <div className='flex items-center justify-center'>
            <div className='text-white'>{weightGoal}</div>
          </div>
        </div>

        <div className='mb-4 text-center'>
          <label htmlFor='username' className='block text-sm font-bold mb-2'>
            Username
          </label>
          <div className='text-white'>{username}</div>
        </div>

        <div className='mb-4 text-center'>
          <label htmlFor='email' className='block text-sm font-bold mb-2'>
            Email
          </label>
          <div className='text-white'>{email}</div>
        </div>

        <div className='mb-4 text-center'>
          <label htmlFor='phone' className='block text-sm font-bold mb-2'>
            Phone
          </label>
          <div className='text-white'>{phone}</div>
        </div>

        <div className='mb-4 text-center'>
          <label className='text-sm font-bold mb-2'>Weight Increment</label>
          <div className='flex items-center justify-center'>
            <div className='text-white'>{weightIncrement}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
