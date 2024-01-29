"use client"

import React from 'react'

const MainPage = () => {

    const dropdownMenu = () => {
        document.querySelector('#dropdown').classList.remove('hidden')
    }

    const closeDropdown = () => {
        document.querySelector('#dropdown').classList.add('hidden');
      };

  return (
    <div>
        <nav>
            <ul className='flex justify-between p-7 bg-blue-200 font-semibold'>
                <div className='flex gap-20'>
                    <li className='text-xl' id='logo'>Logo</li>
                    <div>
                        <li className='text-xl' id='add' onMouseEnter={dropdownMenu} onMouseLeave={closeDropdown}>Add +</li>
                        <div id='dropdown' className='hidden flex flex-col text-lg bg-blue-400 absolute p-2 gap-2 rounded-xl' onMouseEnter={dropdownMenu} onMouseLeave={closeDropdown}>
                            <a className='hover:bg-yellow-400 rounded-xl p-1' href="">Exercise</a>
                            <a className='hover:bg-yellow-400 rounded-xl p-1' href="">Food</a>
                            <a className='hover:bg-yellow-400 rounded-xl p-1' href="">Sleep</a>
                        </div>
                    </div>
                </div>
                <li id='app-name' className='ml-[-70px] text-3xl font-bold'>The Health App</li>
                <li className='text-xl' id='username'>p.chamsaz</li>
            </ul>
        </nav>

        <div className='w-1/2 h-1/2 bg-red-200'>
            
        </div>
    </div>
  )
}

export default MainPage