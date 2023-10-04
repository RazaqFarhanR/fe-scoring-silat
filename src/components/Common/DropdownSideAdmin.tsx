import React from 'react'
import Image from 'next/image';

interface IProps{
    handleClick:any;
    name:string;
    icon:any;
    show:boolean;
    active:boolean;
}

const DropdownSideAdmin: React.FC<IProps> = ({handleClick, name, icon, show, active}) => {
  return (
    <button onClick={handleClick} className={`flex items-center justify-between bg-bgMenu px-3 py-2 gap-x-3 rounded-lg transition-all duration-500 ${show? "w-48":"w-12 justify-center"}`}>
        <div className={`flex gap-x-3 transition-all duration-500 ${show? "w-48":"w-12 justify-center"}`}>
            <Image className={`transition-all duration-500 ${show? "w-[10%] h-[10%]":"static w-[22px]"}`} src={icon} alt='dashboard'/>
            <h1 className={`font-lato text-sm text-white block transition-all ease-in-out duration-300 uppercase ${show? "opacity-100":"opacity-0 fixed"}`}>{name}</h1>
        </div>
        <svg className ={`w-6 h-6 transition-all ease-in-out duration-300 text-white ${show? "opacity-100":"opacity-0 hidden"} ${active? "": "-rotate-180"}`} aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7">
            </path>
        </svg>
  </button>
  )
}

export default DropdownSideAdmin