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
                    <div className='w-full rounded-lg border-2 border-[#2C2F48]'>
                        <div className='w-full py-2 bg-[#2C2F48] rounded-t-lg flex justify-center items-center'>
                            <h1 className='text-white text-xl font-montserrat font-bold'>PARTAI 77 - TUNGGAL - PUTRA REMAJA - PENYISIHAN</h1>
                        </div>

                        <div className='flex justify-center p-4 space-x-4'>
                            <div className='w-[50%] rounded-lg border-2 border-[#2C2F48]'>
                                <div className='w-full bg-biru'>
                                    <h1 className='text-center text-white text-xl font-semibold py-1'>ZAIDAN ARLANGGA SAPUTRA</h1>
                                </div>
                                <div className='py-2 px-4 space-y-2'>
                                    <h1 className='text-center text-xl font-semibold text-biru'>SMKN 1 GEGER</h1>
                                    <button className='w-full bg-[#39ac39] hover:bg-[#2f912f] transition-all active:scale-95 text-white text-lg font-bold py-1 rounded-md'>
                                        DEWAN
                                    </button>
                                </div>
                            </div>
                            <div className='w-[50%] rounded-lg border-2 border-[#2C2F48]'>
                                <div className='w-full bg-merah'>
                                    <h1 className='text-center text-white text-xl font-semibold py-1'>YUNUS SUKMA BINTARA</h1>
                                </div>
                                <div className='py-2 px-4 space-y-2'>
                                    <h1 className='text-center text-xl font-semibold text-merah'>MTSN 11 MADIUN</h1>
                                    <button className='w-full bg-[#39ac39] hover:bg-[#2f912f] transition-all active:scale-95 text-white text-lg font-bold py-1 rounded-md'>
                                        DEWAN
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        } else if (status == 'selesai') {
            return(
                <>
                    <div className='border-2 border-[#222954] rounded-xl mt-6'>
                        <div className='w-full py-2 bg-[#2C2F48] rounded-t-lg flex justify-center items-center'>
                            <h1 className='text-white text-xl font-montserrat font-bold'>PARTAI 77 - TUNGGAL - PUTRA REMAJA - PENYISIHAN</h1>
                        </div>

                        <div className='py-3 space-y-3'>
                            <div className='w-full flex justify-center px-4 space-x-4'>
                                <div className='w-[50%] rounded-lg border-2 border-[#2C2F48]'>
                                    <div className='w-full bg-biru'>
                                        <h1 className='text-center text-white text-xl font-semibold py-1'>ZAIDAN ARLANGGA SAPUTRA</h1>
                                    </div>
                                    <div className='py-3 space-y-3'>
                                        <h1 className='text-center text-base font-semibold text-black'>SMKN 1 GEGER</h1>
                                        <div className='px-7 space-y-2'>
                                            <table className='w-full table-fixed'>
                                                <tr className='border-2 border-[#2C2F48]'>
                                                    <td className='bg-[#2C2F48] text-white text-center text-base font-medium py-1'>HUKUMAN</td>
                                                    <td className='text-center text-base font-medium py-1'>0.00</td>
                                                </tr>
                                                <tr className='border-2 border-[#2C2F48]'>
                                                    <td className='bg-[#2C2F48] text-white text-center text-base font-medium py-1'>WAKTU</td>
                                                    <td className='text-center text-base font-medium py-1'>0.00</td>
                                                </tr>
                                                <tr className='border-2 border-[#2C2F48]'>
                                                    <td className='bg-[#2C2F48] text-white text-center text-base font-medium py-1'>STANDAR DEVIASI</td>
                                                    <td className='text-center text-base font-medium py-1'>0.00</td>
                                                </tr>
                                                <tr className='border-2 border-[#2C2F48]'>
                                                    <td className='bg-[#2C2F48] text-white text-center text-base font-medium py-1'>SKOR AKHIR</td>
                                                    <td className='text-center text-base font-medium py-1'>0.00</td>
                                                </tr>
                                            </table>
                                            <button className='w-full bg-[#39ac39] hover:bg-[#2f912f] transition-all active:scale-95 rounded-md py-1 text-white text-lg font-montserrat'>
                                                DETAIL NILAI
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className='w-[50%] rounded-lg border-2 border-[#2C2F48]'>
                                    <div className='w-full bg-merah'>
                                        <h1 className='text-center text-white text-xl font-semibold py-1'>YUNUS SUKMA BINTARA</h1>
                                    </div>
                                    <div className='py-3 space-y-3'>
                                        <h1 className='text-center text-base font-semibold text-black'>MTSN 11 MADIUN</h1>
                                        <div className='px-7 space-y-2'>
                                            <table className='w-full table-fixed'>
                                                <tr className='border-2 border-[#2C2F48]'>
                                                    <td className='bg-[#2C2F48] text-white text-center text-base font-medium py-1'>HUKUMAN</td>
                                                    <td className='text-center text-base font-medium py-1'>0.00</td>
                                                </tr>
                                                <tr className='border-2 border-[#2C2F48]'>
                                                    <td className='bg-[#2C2F48] text-white text-center text-base font-medium py-1'>WAKTU</td>
                                                    <td className='text-center text-base font-medium py-1'>0.00</td>
                                                </tr>
                                                <tr className='border-2 border-[#2C2F48]'>
                                                    <td className='bg-[#2C2F48] text-white text-center text-base font-medium py-1'>STANDAR DEVIASI</td>
                                                    <td className='text-center text-base font-medium py-1'>0.00</td>
                                                </tr>
                                                <tr className='border-2 border-[#2C2F48]'>
                                                    <td className='bg-[#2C2F48] text-white text-center text-base font-medium py-1'>SKOR AKHIR</td>
                                                    <td className='text-center text-base font-medium py-1'>0.00</td>
                                                </tr>
                                            </table>
                                            <button className='w-full bg-[#39ac39] hover:bg-[#2f912f] transition-all active:scale-95 rounded-md py-1 text-white text-lg font-montserrat'>
                                                DETAIL NILAI
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='w-full px-4'>
                                <h1 className='text-center text-4xl font-bold font-montserrat'>PEMENANG</h1>
                                <div className='w-full bg-biru rounded-md py-2'>
                                    <h1 className='text-center text-2xl text-white font-bold font-montserrat'>SUDUT BIRU</h1>
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
                <div className='bg-[#2C2F48] w-[95%] rounded-xl flex justify-center items-center'>
                    <h1 className='text-3xl text-white font-lato font-bold uppercase'>Gelanggang {router.query.gelanggang}</h1>
                </div>
            </div>

            <div className='h-10 w-full grid grid-cols-2 gap-x-4 my-4'>
                <button type='button' onClick={() => setActive('proses')} className={`rounded-lg flex justify-center items-center transition-all duration-300 ${active == 'proses' ? 'bg-[#2C2F48]' : 'bg-[#A8A9B3]'}`}>
                    <h1 className='text-white font-montserrat text-xl font-bold'>PROSES</h1>
                </button>
                <button type='button' onClick={() => setActive('selesai')} className={`rounded-lg flex justify-center items-center transition-all duration-300 ${active == 'selesai' ? 'bg-[#2C2F48]' : 'bg-[#A8A9B3]'}`}>
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