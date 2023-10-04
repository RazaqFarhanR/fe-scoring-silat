import React from 'react'
import Image from 'next/image'

type Props = {
    judul: string
    ket: string
    Icon: any
    lebar: number
}

const ButtonSetting = ({judul, ket, Icon, lebar}: Props) => {
  return (
    <button className='bg-darkBlue h-32 rounded-lg transition duration-200 ease-in-out hover:scale-105 active:scale-100'>
        <div className='flex justify-start p-4 space-x-6'>
            <div className='flex items-center'>
                <Image width={lebar}  src={Icon} alt='icon'/>
            </div>
            <div className='text-left flex items-center'>
                <div className='space-y-1'>
                    <h1 className='text-5xl font-bold text-[#A8A9B3]'>{judul}</h1>
                    <p className='text-lg text-[#A8A9B3]'>{ket}</p>
                </div>
            </div>
        </div>
    </button>
  )
}

export default ButtonSetting