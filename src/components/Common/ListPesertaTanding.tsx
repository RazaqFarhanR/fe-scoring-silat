import React from 'react'
import Image from 'next/image'
import editIcon from '@/../public/svg/edit.svg'
import deleteIcon from '@/../public/svg/delete.svg'

type Props = {
    index: number,
    kelas: string,
    jk: string,
    nama: string,
    kontingen: string,
    golongan: string,
}

const ListPesertaTanding = ({index, kelas, jk, nama, kontingen, golongan}: Props) => {
  return (
    <tr key={index} className='bg-[#4c4f6d] uppercase even:bg-transparent'>
        <td>{index+1}</td>
        <td>{kelas}</td>
        <td>{jk}</td>
        <td>{nama}</td>
        <td>{kontingen}</td>
        <td>{golongan}</td>
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

export default ListPesertaTanding