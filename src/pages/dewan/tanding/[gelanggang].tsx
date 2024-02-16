import EventLayout from '@/components/Mixins/EventLayout'
import React, { ReactElement, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Gelanggang = () => {
    const router = useRouter()
    const [active, setActive] = useState('proses')

    const StatusComponent = (status:string, data:any) =>{
        if (status == 'proses') {
            return(
                <>
                    <table className='w-full table-fixed'>
                        <thead>
                            <tr className='bg-[#222954] font-montserrat text-white'>
                                <th className='py-2 w-[10%] border-2 border-[#C9C9C9]'>Partai</th>
                                <th className='w-[13%]border-2 border-[#C9C9C9]'>Kelas</th>
                                <th className='w-[13%] border-2 border-[#C9C9C9]'>Kategori</th>
                                <th className='w-[27%] bg-blue-600 border-2 border-[#C9C9C9]'>Sudut Biru</th>
                                <th className='w-[27%] bg-red-600 border-2 border-[#C9C9C9]'>Sudut Merah</th>
                                <th className='w-[11%]'>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='text-center font-montserrat font-bold'>
                                <td className='border-2 border-[#C9C9C9] text-[#222954]'>{1}</td>
                                <td className='border-2 border-[#C9C9C9] text-[#222954]'>A PUTRA</td>
                                <td className='border-2 border-[#C9C9C9] text-[#222954]'>PRA REMAJA</td>
                                <td className='border-2 border-[#C9C9C9] text-blue-600 py-3'>Nama Biru <br /> Kontingen Biru</td>
                                <td className='border-2 border-[#C9C9C9] text-red-600 py-3'>Nama Merah <br /> Kontingen Merah</td>
                                <td className='border-2 border-[#C9C9C9] text-[#222954]'>
                                    <button className='bg-[#39ac39] hover:bg-[#2f912f] py-1.5 w-[80%] rounded-lg text-white uppercase text-base' onClick={() => router.push('/dewan/tanding/penilaian')}>Dewan</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </>
            )
        } else if (status == 'selesai') {
            return(
                <>
                    <div className='p-4 border-2 border-[#222954] rounded-xl space-y-4 mt-6'>
                        <div className='w-full h-10 flex justify-between space-x-3'>
                            <div className='w-[5%] bg-[#222954] rounded-lg flex justify-center items-center'>
                                <h1 className='text-white text-2xl font-montserrat font-bold'>1</h1>
                            </div>
                            <div className='w-[70%] bg-[#222954] rounded-lg flex justify-center items-center'>
                                <h1 className='text-white text-2xl font-montserrat font-bold'>D PUTRA PRA REMAJA - FINAL</h1>
                            </div>
                            <button className='w-[25%] bg-[#39ac39] hover:bg-[#2f912f] transition-all active:scale-95 rounded-lg'>
                                <h1 className='text-white text-2xl font-montserrat font-bold'>DETAIL</h1>
                            </button>
                        </div>
                        <div className='w-full h-20 flex'>
                            <div className='w-[35%] h-full flex justify-center items-center'>
                                <div>
                                    <h1 className='text-blue-600 text-center text-2xl font-montserrat font-bold'>ZULFIKAR ZHAFIF RIZQULLAH</h1>
                                    <h1 className='text-blue-600 text-center text-lg font-montserrat font-bold'>SMAN 2 MEJAYAN</h1>
                                </div>
                            </div>
                            <div className='w-[30%] bg-biru h-full rounded-lg flex items-center justify-center'>
                                <div className=''>
                                    <h1 className='text-white font-montserrat text-4xl font-bold text-center'>24 - 14</h1>
                                    <h1 className='text-white font-montserrat text-xl text-center'>Dengan Kemenangan ANGKA</h1>
                                </div>
                            </div>
                            <div className='w-[35%] h-full flex justify-center items-center'>
                                <div>
                                    <h1 className='text-red-600 text-center text-2xl font-montserrat font-bold'>ARYANTARA PUTRA RAMADITA</h1>
                                    <h1 className='text-red-600 text-center text-lg font-montserrat font-bold'>SMP NEGERI 1 NGLAMES</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    }

    return (
        <div className='py-10 px-16 min-h-[90vh]'>
            <div className='h-12 w-full flex justify-between space-x-4'>
                <button type='button' onClick={() => router.back()} className='bg-red-500 w-[5%] rounded-xl flex items-center justify-center transition-all active:scale-95'>
                    <img className='w-8' src="/svg/back.svg" alt="" />
                </button>
                <div className='bg-[#222954] w-[95%] rounded-xl flex justify-center items-center'>
                    <h1 className='text-3xl text-white font-lato font-bold uppercase'>Gelanggang {router.query.gelanggang}</h1>
                </div>
            </div>

            <div className='h-10 w-full grid grid-cols-2 gap-x-4 my-4'>
                <button type='button' onClick={() => setActive('proses')} className={`rounded-lg flex justify-center items-center transition-all duration-300 ${active == 'proses' ? 'bg-[#039D00]' : 'bg-[#81ce80]'}`}>
                    <h1 className='text-white font-montserrat text-xl font-bold'>PROSES</h1>
                </button>
                <button type='button' onClick={() => setActive('selesai')} className={`rounded-lg flex justify-center items-center transition-all duration-300 ${active == 'selesai' ? 'bg-[#039D00]' : 'bg-[#81ce80]'}`}>
                    <h1 className='text-white font-montserrat text-xl font-bold'>SELESAI</h1>
                </button>
            </div>

            <div>
                {StatusComponent(active, "data")}
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