import React, { useContext } from 'react';
// import images
// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// import context
import { CursorContext } from '../context/CursorContext';
import { useState } from 'react';
import { useEffect } from 'react';

const Services = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  
  const [services,setServices] = useState([])
  // console.log(services)
  useEffect(()=>{
    fetch("services.json")
    .then(res=>res.json())
      .then(data => setServices(data))
  },[])


  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section'
    >
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
          {/* text */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='flex flex-col lg:items-start'
          >
            <h1 className='h1'>service</h1>
            <p className='mb-12 max-w-sm'>
              Whether you want to shoot pre-wedding pics or your walk down the aisle
              <b>  wedding photographers.</b> in Singapore will document your nuptials,
              beautifully.
              <br />
              <br />
              If you love bright, clear and quirky wedding photos, look for the folks at Tlgraphy. The studio offers pre-wedding and actual day photography for traditional Chinese weddings, modern church weddings and more. As the team has a penchant for candid-style photos, they also hold pre-shoot
               Zoom sessions to understand your values and personalities to ensure you shine on your big day.
            </p>
            <Link to={'/contact'} className='btn mb-[30px] mx-auto lg:mx-0'>
              Hire me
            </Link>
          </motion.div>
          {/* image grid */}
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className='grid grid-cols-2 lg:gap-2'
          >

            {/* image */}
            {
              services.map(service=>
                <div key={service.service_id} className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
                   
                  <img
                    className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
                    src={service.img}
                    alt=''
                  />

                </div>

                )
            }
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
