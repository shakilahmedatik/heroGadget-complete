import React from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../assets/hero.jpg'

const Home = () => {
  return (
    <section>
      <div className='bg-gray-200'>
        <div className='my-container flex flex-col items-center pb-24 text-center lg:pb-56 text-gray-900'>
          <h1 className='text-2xl w-full lg:leading-tight sm:text-4xl lg:text-6xl lg:max-w-3xl title-text'>
            Welcome To HeroGadget
          </h1>
          <p className='my-6 text-xs sm:text-base md:text-lg max-w-2/3 md:max-w-xl max-w-2xl text-gray-900'>
            Best E-commerce platform for buying high quality Smart Home
            Appliances at extremely affordable Price.
          </p>
          <div className='flex flex-wrap justify-center'>
            <Link to='/shop'>
              <button type='button' className='btn-primary'>
                Shop Now
              </button>
            </Link>
            <Link to='/about'>
              <button type='button' className='btn-outlined'>
                Learn more
              </button>
            </Link>
          </div>
        </div>
      </div>
      <img
        src={heroImg}
        alt=''
        className='w-5/6 mx-auto mb-12 -mt-12 lg:-mt-40 rounded-lg shadow-md bg-gray-500'
      />
    </section>
  )
}

export default Home
