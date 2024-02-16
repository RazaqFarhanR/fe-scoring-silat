import React, { ReactElement } from 'react'
import { useRouter } from 'next/router'
import EventLayout from '@/components/Mixins/EventLayout'

const gelanggang = () => {
    const router = useRouter()
    return (
        <div className='py-10 px-16 min-h-[90vh]'>
            <div className='h-12 w-full flex justify-between space-x-4'>
                <button type='button' onClick={() => router.back()} className='bg-red-500 w-[5%] rounded-xl flex items-center justify-center transition-all active:scale-95'>
                    <img className='w-8' src="/svg/back.svg" alt="" />
                </button>
                <div className='bg-[#222954] w-[95%] rounded-xl flex justify-center items-center'>
                    <h1 className='text-3xl text-white font-montserrat font-bold'>Daftar Gelanggang</h1>
                </div>
            </div>

            <div className='grid grid-cols-2 gap-8 my-8'>
                <div className="flex flex-col justify-center items-center border-2 border-[#222954] py-6 rounded-xl space-y-2 mb-3">
                    <h1 className='lg:text-7xl md:text-3xl font-montserrat font-bold text-[#222954] uppercase'>Gelanggang I</h1>
                    <p className='lg:text-3xl md:text-xl font-montserrat text-[#222954] uppercase'>(TANDING)</p>
                    <button type='button' onClick={() => router.push('/dewan/tanding/I/')} className='lg:text-3xl md:text-xl uppercase text-white font-medium bg-[#39ac39] hover:bg-[#2f912f] w-[85%] rounded-xl py-2 text-center'>Detail</button>
                </div>
                <div className="flex flex-col justify-center items-center border-2 border-[#222954] py-4 rounded-xl space-y-2 mb-3">
                    <h1 className='lg:text-7xl md:text-3xl  font-montserrat font-bold text-[#222954] uppercase'>Gelanggang II</h1>
                    <p className='lg:text-3xl md:text-xl font-montserrat text-[#222954] uppercase'>(SENI)</p>
                    <button type='button' onClick={() => router.push('/dewan/seni/II/')} className='text-3xl md:text-xl uppercase text-white font-medium bg-[#39ac39] hover:bg-[#2f912f] w-[85%] rounded-xl py-2 text-center'>Detail</button>
                </div>
            </div>
        </div>
    )
}

gelanggang.getLayout = (page: ReactElement) =>{
    return (
        <EventLayout>
            {page}
        </EventLayout>
    )
}

export default gelanggang