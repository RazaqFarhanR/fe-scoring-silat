import React, { ReactElement, useState } from 'react'
import AdminLayout from '@/components/Mixins/AdminLayout'
import Pagination from '@/components/Common/Pagination'
import ListJadwalSeni from '@/components/Common/ListJadwalSeni'

const JadwalGanda = () => {
    const data = [
        {
            gelanggang: "1",
            partai: 1,
            golongan: "PRA REMAJA",
            jk: "PUTRA",
            peserta_biru: "nama biru",
            kontingen_biru: "kontingen_biru",
            peserta_merah: "nama merah",
            kontingen_merah: "kontingen_merah",
            babak: "penyisihan",
        },
    ]

    return (
        <div className='h-auto'>
            <header className='w-full bg-sideAdmin'>
                <h1 className='font-lato font-bold text-sm text-white px-3 py-1'>JADWAL GANDA</h1>
            </header>

            <main className='px-8 py-4 h-[90vh] space-y-4'>
                <div className='bg-darkBlue w-full h-14 rounded-md flex justify-between items-center px-5'>
                    <h1 className='text-white font-bold text-2xl'>JADWAL GANDA</h1>
                    <div className='flex justify-between space-x-3'>
                        <button className="bg-[#0023ba] py-1 px-3 rounded-md drop-shadow-md active:bg-gray-800 transition duration-200 ease-in-out active:scale-95">
                            <h1 className="text-md text-white">Input Data</h1>
                        </button>
                        <button className="bg-[#1a8400] py-1 px-3 rounded-md drop-shadow-md active:bg-gray-800 transition duration-200 ease-in-out active:scale-95">
                            <h1 className="text-md text-white">Import Data</h1>
                        </button>
                    </div>
                </div>

                <div className='bg-darkBlue w-full h-fit py-6 px-4  rounded-md'>
                    <div className='flex justify-end'>
                        <div className='flex space-x-2'>
                            <h1 className='text-white text-base'>Search:</h1>
                            <input type='text' className='rounded-md bg-[#4C4F6D] focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 px-1 text-white'/>
                        </div>
                    </div>

                    <div className='mt-2'>
                        <table className="table-fixed w-full text-white text-center text-md">
                            <thead>
                                <tr>
                                    <th className='w-[5%] pb-2'>No</th>
                                    <th className='w-[3%] pb-2'>Gel</th>
                                    <th className='w-[5%] pb-2'>Partai</th>
                                    <th className='w-[10%] pb-2'>Golongan</th>
                                    <th className='w-[10%] pb-2'>Jenis Kelamin</th>
                                    <th className='w-[23%] pb-2'>Sudut Biru</th>
                                    <th className='w-[23%] pb-2'>Sudut Merah</th>
                                    <th className='w-[11%] pb-2'>Babak</th>
                                    <th className='w-[10%] pb-2'>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item,index) => (
                                    <ListJadwalSeni
                                    index={index}
                                    gelanggang={item.gelanggang}
                                    partai={item.partai}
                                    golongan={item.golongan}
                                    jk={item.jk}
                                    peserta_biru={item.peserta_biru}
                                    kontingen_biru={item.kontingen_biru}
                                    peserta_merah={item.peserta_merah}
                                    kontingen_merah={item.kontingen_merah}
                                    babak={item.babak}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <Pagination/>
                </div>
            </main>
        </div>
    )
}

JadwalGanda.getLayout = (page: ReactElement) =>{
    return (
        <AdminLayout>
            {page}
        </AdminLayout>
    )
}
export default JadwalGanda