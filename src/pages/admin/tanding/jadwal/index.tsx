import React, { ReactElement, useState } from 'react'
import AdminLayout from '@/components/Mixins/AdminLayout'
import Image from 'next/image'
import ListJadwalTanding from '@/components/Common/ListJadwalTanding'

const JadwalTanding = () => {
    
    const data = [
        {
            gelanggang: "1",
            partai: 1,
            kelas: "A",
            jk: "PUTRA",
            peserta_biru: "nama biru",
            kontingen_biru: "kontingen_biru",
            peserta_merah: "nama merah",
            kontingen_merah: "kontingen_merah",
            babak: "penyisihan",
        },
        {
            gelanggang: "1",
            partai: 2,
            kelas: "A",
            jk: "PUTRA",
            peserta_biru: "nama biru",
            kontingen_biru: "kontingen_biru",
            peserta_merah: "nama merah",
            kontingen_merah: "kontingen_merah",
            babak: "penyisihan",
        },
        {
            gelanggang: "1",
            partai: 3,
            kelas: "A",
            jk: "PUTRA",
            peserta_biru: "nama biru",
            kontingen_biru: "kontingen_biru",
            peserta_merah: "nama merah",
            kontingen_merah: "kontingen_merah",
            babak: "penyisihan",
        },
        {
            gelanggang: "1",
            partai: 4,
            kelas: "A",
            jk: "PUTRA",
            peserta_biru: "nama biru",
            kontingen_biru: "kontingen_biru",
            peserta_merah: "nama merah",
            kontingen_merah: "kontingen_merah",
            babak: "penyisihan",
        },
        {
            gelanggang: "1",
            partai: 5,
            kelas: "A",
            jk: "PUTRA",
            peserta_biru: "nama biru",
            kontingen_biru: "kontingen_biru",
            peserta_merah: "nama merah",
            kontingen_merah: "kontingen_merah",
            babak: "penyisihan",
        }
    ]

    return (
        <div className='h-auto w-[43vh] md:w-auto'>
            <header className='w-full bg-sideAdmin'>
                <h1 className='font-lato font-bold text-[8px] md:text-sm text-white px-3 py-1'>JADWAL TANDING</h1>
            </header>

            <main className='md:px-8 md:py-4 px-4 py-2 h-[90vh] space-y-4'>
                <div className='bg-darkBlue w-full h-14 rounded-md flex justify-between items-center px-5'>
                    <h1 className='text-white font-bold text-xs md:text-2xl'>JADWAL TANDING</h1>
                    <div className='flex justify-between space-x-3'>
                        <button className="bg-[#0023ba] md:py-1 md:px-3 p-1 rounded-md drop-shadow-md active:bg-gray-800 transition duration-200 ease-in-out active:scale-95">
                            <h1 className="md:text-base text-xs text-white">Input Data</h1>
                        </button>
                        <button className="bg-[#1a8400] md:py-1 md:px-3 p-1 rounded-md drop-shadow-md active:bg-gray-800 transition duration-200 ease-in-out active:scale-95">
                            <h1 className="md:text-base text-xs text-white">Import Data</h1>
                        </button>
                    </div>
                </div>

                <div className='bg-darkBlue w-full h-fit py-6 px-4 rounded-md'>
                    <div className='flex justify-end'>
                        <div className='flex space-x-2'>
                            <h1 className='text-white text-base'>Search:</h1>
                            <input type='text' className='rounded-md bg-[#4C4F6D] focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 px-1 text-white'/>
                        </div>
                    </div>

                    <div className='mt-2 overflow-auto'>
                        <table className="lg:table-fixed w-full text-white text-center text-md">
                            <thead>
                                <tr>
                                    <th className='w-[3%] pb-2'>No</th>
                                    <th className='w-[3%] pb-2'>Gel</th>
                                    <th className='w-[5%] pb-2'>Partai</th>
                                    <th className='w-[5%] pb-2'>Kelas</th>
                                    <th className='w-[5%] pb-2'>JK</th>
                                    <th className='w-[27%] pb-2'>Sudut Biru</th>
                                    <th className='w-[27%] pb-2'>Sudut Merah</th>
                                    <th className='w-[14%] pb-2'>Babak</th>
                                    <th className='w-[11%] pb-2'>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item,index)=>(
                                    <ListJadwalTanding
                                    index={index}
                                    gelanggang={item.gelanggang}
                                    partai={item.partai}
                                    kelas={item.kelas}
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
                    <nav className="flex justify-center mt-4">
                        <ul className="inline-flex -space-x-px text-sm">
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                            </li>
                            <li>
                                <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">1</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">3</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                            </li>
                        </ul>
                        </nav>
                </div>
            </main>
        </div>
    )
}

JadwalTanding.getLayout = (page: ReactElement) =>{
    return (
        <AdminLayout>
            {page}
        </AdminLayout>
    )
}
export default JadwalTanding