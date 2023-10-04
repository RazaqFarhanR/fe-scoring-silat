import React from 'react'
import Image from 'next/image'
import NavButton from '@/../public/svg/NavButton.svg'
import { useRouter } from 'next/router'

interface IProps{
    navAction:any;
    show:boolean
}

const HeaderAdmin = ({navAction, show}:IProps) => {
  const router = useRouter()
  return (
    <div className='bg-darkBlue w-auto p-2 flex justify-between'>
        <button onClick={navAction} className={`md:opacity-100 md:pointer-events-auto opacity-0 pointer-events-none`}>
            <Image className='w-auto h-auto' src={NavButton} alt="navbutton"/>
        </button>

        <button onClick={() => router.push('/')} className={`border-2 border-red-500 rounded-md px-2 py-1 hover:bg-red-500 hover:border-transparent text-red-600 font-bold text-xs hover:text-darkBlue`}>
            <h1 className=''>Log out</h1>
        </button>
    </div>
  )
}

export default HeaderAdmin