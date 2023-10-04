import React from 'react'
import Image from 'next/image'
import KaypangIcon from '@/../public/img/kaypang.png'
import KabMadiun from '@/../public/img/KabMadiun.png'
import IpsiIcon from '@/../public/img/Ipsi.png'

type Props = {}

const HeaderEvent = (props: Props) => {
  return (
    <div className='bg-darkBlue w-auto py-3 flex justify-between px-8'>
        <Image className='w-[42px] h-auto' src={KaypangIcon} alt='icon kaypang'/>
        <div className='flex items-center'>
            <h1 className='font-lato text-white font-bold text-2xl'>PIALA BUPATI CUP MADIUN</h1>
        </div>
        <div className='flex space-x-2 w-auto'>
            <Image className='w-auto h-[54px]' src={IpsiIcon} alt='icon ipsi'/>
            <Image className='w-auto h-[54px]' src={KabMadiun} alt='icon kab/kota'/>
        </div>
    </div>
  )
}

export default HeaderEvent