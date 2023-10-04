import EventLayout from '@/components/Mixins/EventLayout'
import React, { ReactElement, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Gelanggang = () => {
    const router = useRouter()

    return (
        <div className='py-6 px-16 min-h-[90vh]'>
            <div className='h-12 w-full flex justify-between space-x-4 mb-6'>
                <button type='button' onClick={() => router.back()} className='bg-red-500 w-[5%] rounded-xl flex items-center justify-center transition-all active:scale-95'>
                    <img className='w-8' src="/svg/back.svg" alt="" />
                </button>
                <div className='bg-[#2C2F48] w-[47%] rounded-xl flex justify-center items-center'>
                    <h1 className='text-2xl text-white font-lato font-bold uppercase'>Gelanggang {router.query.gelanggang}</h1>
                </div>
                <div className='bg-[#2C2F48] w-[47%] rounded-xl flex justify-center items-center'>
                    <h1 className='text-2xl text-white font-lato font-bold uppercase'>JURI {router.query.gelanggang}</h1>
                </div>
            </div>

            <div>
                <div className='w-full rounded-lg border-2 border-[#2C2F48] text-center p-4'>
                    <h1 className='text-4xl font-montserrat font-bold'>PARTAI 1</h1>
                    <h1 className='text-xl font-montserrat font-bold'>A PUTRA REMAJA - PENYISIHAN</h1>
                    <div className='grid grid-cols-2 gap-x-5 mb-5'>
                        <div className="text-biru">
                            <h1 className='text-3xl font-semibold'>Nama Biru</h1>
                            <h1 className='text-lg font-semibold tracking-wider'>Kontingen Biru</h1>
                        </div>
                        <div className="text-merah">
                            <h1 className='text-3xl font-semibold'>Nama Merah</h1>
                            <h1 className='text-lg font-semibold tracking-wider'>Kontingen Biru</h1>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button className="w-[100%] py-2 bg-green-600 hover:bg-green-700 rounded-lg text-lg font-medium text-white">Nilai Pertandingan</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

Gelanggang.getLayout = (page: ReactElement) =>{
    return (
        <EventLayout>
            {page}
        </EventLayout>
    )
}
export default Gelanggang