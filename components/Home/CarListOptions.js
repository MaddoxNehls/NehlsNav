import { CarListData } from './../../utils/CarListData'
import React, { useState } from 'react'
import CarListItem from './CarListItem'
import { useRouter } from 'next/navigation';

function CarListOptions({distance}) {
  const [activeIndex, setActiveIndex] = useState();
  const [selectedCar, setSelectedCar] = useState([]);
  const router = useRouter();
  
  return (
    <div className='mt-5 p-5 overflow-auto h-[250px]'>
      <h2 className='text-[22px] font-bold'>Recommeded</h2>
      {CarListData.map((item, index) => (
        <div key={index} className={`cursor-pointer p-2 px-4 rounded-md
          ${activeIndex == index ? 'border-[3px] border-[#FF5722]' : 'border-black'}`
        }
          onClick={() => {
            setActiveIndex(index);
            setSelectedCar(item);
          }}
        >
          <CarListItem car={item} distance={distance} />
        </div>
      ))}

      {selectedCar?.name ? (
        <div className='flex justify-between fixed 
          bottom-6 bg-white p-4 shadow-xl rounded-lg
          w-full md:w-[30%] border-[1px] items-center text-black'>
          <h2 className='text-[18px] font-semibold'>Secure Your Ride with {selectedCar.name}!</h2>
          <button className='p-3 bg-black text-white rounded-lg text-center'
            onClick={() => router.push('/payment?amount=' + (selectedCar.amount * distance).toFixed(2))}
          >
            Request {selectedCar.name}
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default CarListOptions;
