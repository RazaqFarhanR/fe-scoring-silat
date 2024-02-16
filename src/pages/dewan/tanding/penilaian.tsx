import EventLayout from '@/components/Mixins/EventLayout'
import React, { ReactElement } from 'react'

type Props = {}

const penilaian = (props: Props) => {
  return (
    <div className='w-full py-10 px-16'>
        <div className='grid grid-cols-3 gap-x-3 text-lg'>
            <div className='col-span-1 bg-[#222954] text-2xl flex justify-center justify-items-center py-2 rounded-lg text-white font-montserrat font-bold'>
                PARTAI 1
            </div>
            <div className='col-span-1 bg-[#222954] text-2xl flex justify-center justify-items-center py-2 rounded-lg text-white font-montserrat font-bold'>
                A PUTRA REMAJA
            </div>
            <div className='col-span-1 bg-[#222954] text-2xl flex justify-center justify-items-center py-2 rounded-lg text-white font-montserrat font-bold'>
                PENYISIHAN
            </div>
        </div>

        <div className='my-8'>
            <div className='w-full flex justify-between space-x-[15%]'>
                <div className='w-1/2 grid grid-cols-6 border-2 border-biru'>
                    <div className='col-span-5'>
                        <h1 className='bg-biru text-white font-montserrat font-bold py-1 px-2 text-xl'>Nama Biru</h1>
                        <h1 className='py-2 px-2 text-xl font-montserrat font-bold'>KONTINGEN BIRU</h1>
                    </div>
                    <div className='col-span-1 flex justify-center items-center bg-biru'>
                        <h1 className='text-white text-2xl font-montserrat font-bold'>1</h1>
                    </div>
                </div>
                <div className='w-1/2 grid grid-cols-6 border-2 border-merah text-right'>
                    <div className='col-span-1 flex justify-center items-center bg-merah'>
                        <h1 className='text-white text-2xl font-montserrat font-bold'>1</h1>
                    </div>
                    <div className='col-span-5'>
                        <h1 className='bg-merah text-white font-montserrat font-bold py-1 px-2 text-xl'>Nama Biru</h1>
                        <h1 className='py-2 px-2 text-xl font-montserrat font-bold'>KONTINGEN BIRU</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

penilaian.getLayout = (page: ReactElement) =>{
    return (
        <EventLayout>
            {page}
        </EventLayout>
    )
}

export default penilaian