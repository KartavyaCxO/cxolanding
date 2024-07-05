import React from 'react'

type Props = {}

const Business = (props: Props) => {
  return (
    <div>
        <h1 className=' text-6xl pb-20'>
        Strategize and plan your<br/> business like never before.
        </h1>
        <div className='bg-[#8C8989] h-[50vh]'>

        </div>
        <div className='bg-[#F9FAFB] mt-20 flex flex-col gap-10 py-16 items-center justify-center '>
            <h1 className='text-3xl'>
            Hire an On-Demand Fractional CMO at flat $50/Hour
            </h1>
            <button className='text-white text-2xl rounded-full px-6 py-3 bg-[#065D75]'>
                Hire A CMO
            </button>
        </div>

        <div className='flex items-center justify-center text-[rgba(0,0,0,0.62)]' >
        <p>Services are billed on a weekly, bi-weekly and monthly basis | A minimum of 10 hours of billing is required | $500 should be deposited in advance
        </p>
    </div>

    </div>
  )
}

export default Business