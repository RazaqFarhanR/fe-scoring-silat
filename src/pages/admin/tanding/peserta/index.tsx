import React, { ReactElement, useState } from 'react'
import AdminLayout from '@/components/Mixins/AdminLayout'
import ListPesertaTanding from '@/components/Common/ListPesertaTanding'

const PesertaTanding = () => {

    const data = [
        {
            kelas: "A",
            jk: "PUTRA",
            nama: "nama",
            kontingen: "kontingen",
            golongan: "DEWASA",
        },
    ]

    return (
        <div className='h-auto'>
            <header className='w-full bg-sideAdmin'>
                <h1 className='font-lato font-bold text-sm text-white px-3 py-1'>PESERTA TANDING</h1>
            </header>

            <main className='px-8 py-4 h-[90vh] space-y-4'>
                <div className='bg-darkBlue w-full h-14 rounded-md flex justify-between items-center px-5'>
                    <h1 className='text-white font-bold text-2xl'>PESERTA TANDING</h1>
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
                                    <th className='w-[4%] pb-2'>No</th>
                                    <th className='w-[10%] pb-2'>Kelas</th>
                                    <th className='w-[15%] pb-2'>Jenis Kelamin</th>
                                    <th className='w-[28%] pb-2'>Nama</th>
                                    <th className='w-[28%] pb-2'>Kontingen</th>
                                    <th className='w-[14%] pb-2'>Golongan</th>
                                    <th className='w-[11%] pb-2'>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                            {data.map((item,index) => (
                                <ListPesertaTanding
                                index={index}
                                kelas={item.kelas}
                                jk={item.jk}
                                nama={item.nama}
                                kontingen={item.kontingen}
                                golongan={item.golongan}
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

PesertaTanding.getLayout = (page: ReactElement) =>{
    return (
        <AdminLayout>
            {page}
        </AdminLayout>
    )
}
export default PesertaTanding