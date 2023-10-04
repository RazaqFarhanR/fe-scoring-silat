import React, { ReactElement, useState } from 'react'
import AdminLayout from '@/components/Mixins/AdminLayout'

const Dashboard = () => {
    return (
        <div className='h-auto'>
            <header className='w-full bg-sideAdmin'>
                <h1 className='font-lato font-bold text-sm text-white px-3 py-1'>DASHBOARD</h1>
            </header>

            <main className='p-12'>
                <div className='flex-col justify-center space-y-10'>
                    <div className='bg-gradient-to-r from-[#0906BE] to-[#8D56F5] w-full rounded-md h-44'>

                    </div>

                    <div className='flex space-x-10 justify-between w-full h-full'>
                        <div className='w-full space-y-4'>
                            <div className='bg-gradient-to-r from-[#140e98] to-[#6517bd] rounded-md h-16 w-full flex items-center justify-center'>
                                <h1 className='text-white font-lato text-center opacity-100 text-3xl font-bold'>TOTAL PARTAI TANDING</h1>
                            </div>
                            <div className='flex justify-center space-x-4'>
                                <div className='bg-gradient-to-r from-[#191963] to-[#3c1d73] rounded-md w-full h-44 flex justify-center items-center'>
                                    <h1 className='text-white font-lato text-center opacity-100 text-9xl font-bold'>00</h1>
                                </div>
                                <div className='bg-gradient-to-r from-[#191963] to-[#3c1d73] rounded-md w-full h-44 flex justify-center items-center'>
                                    <h1 className='text-white font-lato text-center opacity-100 text-9xl font-bold'>00</h1>
                                </div>
                            </div>
                        </div>

                        <div className='w-full space-y-4'>
                            <div className='bg-gradient-to-r from-[#140e98] to-[#6517bd] rounded-md h-16 w-full flex items-center justify-center'>
                                <h1 className='text-white font-lato text-center opacity-100 text-3xl font-bold'>TOTAL PARTAI SENI</h1>
                            </div>
                            <div className='flex justify-center space-x-4'>
                                <div className='bg-gradient-to-r from-[#191963] to-[#3c1d73] rounded-md w-full h-44 flex justify-center items-center'>
                                    <h1 className='text-white font-lato text-center opacity-100 text-9xl font-bold'>00</h1>
                                </div>
                                <div className='bg-gradient-to-r from-[#191963] to-[#3c1d73] rounded-md w-full h-44 flex justify-center items-center'>
                                    <h1 className='text-white font-lato text-center opacity-100 text-9xl font-bold'>00</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

Dashboard.getLayout = (page: ReactElement) =>{
    return (
        <AdminLayout>
            {page}
        </AdminLayout>
    )
}
export default Dashboard