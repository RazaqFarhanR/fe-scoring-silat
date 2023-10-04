import React from 'react'
import Image from 'next/image'
import editIcon from '@@/../public/svg/edit.svg'
import deleteIcon from '@@/../public/svg/delete.svg'

type Props = {
    index: number,
    gelanggang: string,
    partai: number,
    golongan: string,
    jk: string,
    peserta_biru: string,
    kontingen_biru: string,
    peserta_merah: string,
    kontingen_merah: string,
    babak: string
}


const ListJadwalSeni = ({index,gelanggang,partai,golongan,jk,peserta_biru,kontingen_biru,peserta_merah,kontingen_merah,babak}: Props) => {
  return (
    <tr key={index} className='bg-[#4c4f6d] uppercase even:bg-transparent'>
        <td>{index+1}</td>
        <td>{gelanggang}</td>
        <td>{partai}</td>
        <td>{golongan}</td>
        <td>{jk}</td>
        <td>{peserta_biru} - {kontingen_biru}</td>
        <td>{peserta_merah} - {kontingen_merah}</td>
        <td>{babak}</td>
        <td className='flex justify-center space-x-3 py-2'>
            <button className="bg-[#1a8400] py-2 px-2 rounded-md drop-shadow-md active:bg-gray-800 transition duration-200 ease-in-out active:scale-95">
                <Image className="w-4 h-4" src={editIcon} alt={'edit'}/>
            </button>
            <button className="bg-[#da0000] py-2 px-2 rounded-md drop-shadow-md active:bg-gray-800 transition duration-200 ease-in-out active:scale-95">
                <Image className="w-4 h-4" src={deleteIcon} alt={'delete'}/>
            </button>
        </td>
    </tr>
    
  )
}

export default ListJadwalSeni