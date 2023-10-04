import React from 'react'
import Image from 'next/image';

interface IProps{
    to:any;
    name:string;
    icon:any;
    show:boolean;
}

const ButtonSideAdmin: React.FC<IProps> = ({to, name, icon, show}) => {
  return (
    <button onClick={to} className={`flex items-center bg-bgMenu px-3 py-2 gap-x-3 rounded-lg transition-all duration-500 ${show? "w-full":"w-12 justify-center"}`}>
        <Image className={`transition-all duration-500 ${show? "":"static"}`} width={show? 15:22} src={icon} alt='dashboard'/>
        <h1 className={`font-lato text-sm text-white block transition-all ease-in-out duration-300 uppercase ${show? "opacity-100":"opacity-0 fixed"}`}>{name}</h1>
  </button>
  )
}

export default ButtonSideAdmin