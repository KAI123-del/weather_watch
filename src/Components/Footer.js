import '../index.css';

import { ImGithub } from 'react-icons/im';
import { ImLinkedin2 } from 'react-icons/im'
import { GrInstagram } from 'react-icons/gr'
import { FaFacebookF } from 'react-icons/fa'


import React from 'react'

function Footer() {
    return (
        <React.Fragment>

            <div className='flex justify-center space-x-6 lg:space-x-10    lg:sticky  mt-8  items-center bg-transparent '>
                <div className='lg:py-4 lg:w-1/2  '>
                    <div className=' lg:py-2 lg:h-16   '>
                        <div className='flex lg:mt-2 justify-center  items-center space-x-3 lg:space-x-20 '>

                            <a href='https://github.com/KAI123-del'><ImGithub className='text-white text-xl  lg:text-3xl  hover:text-green-600 ' /></a>
                            <a href="https://www.linkedin.com/in/kailash-bhatt-7571991b4/"> <ImLinkedin2 className='text-white lg:text-3xl text-xl hover:text-rose-600 ' /> </a>
                            <a href="https://www.instagram.com/bhatt.kailash/"> <GrInstagram className='text-white text-xl lg:text-3xl hover:text-rose-600 ' /> </a>
                            <a href="https://www.facebook.com/BHATT.KAI/"> <FaFacebookF className='text-white text-xl lg:text-3xl hover:text-rose-600 ' /> </a>


                        </div>




                    </div>
                </div>
                <div className="flex justify-center text-sm w-3/4 lg:w-1/2  tracking-widest lg:text-xl  lg:space-x-0 text-gray-200 items-center ">
                    <div className=" lg:pb-0  ">Copyright © 2022-infinity <span className=" lg:ml-0 ml-6  font-edo ">Kailash Bhatt</span></div>

                </div>
            </div>



        </React.Fragment>
    )
}

export default Footer