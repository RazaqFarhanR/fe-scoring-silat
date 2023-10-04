import React from 'react'
import Image from 'next/image'
import editIcon from '@/../public/svg/edit.svg'
import deleteIcon from '@/../public/svg/delete.svg'

type Props = {
    kategori: string
    index: number,
    jk: string,
    nama1: string,
    nama2: string,
    nama3: string,
    kontingen: string,
    golongan: string,
}

const ListPesertaSeni = ({kategori,index,jk,nama1,nama2,nama3,kontingen,golongan}: Props) => {
    const NameComponent = (kategori:string) =>{
        if (kategori == 'tunggal' || kategori == 'solo kreatif') {
            return(
                <>
                    {nama1}
                </>
            )
        } else if (kategori == 'ganda') {
            return(
                <>
                    {nama1} <br /> {nama2}
                </>
            )
        } else if (kategori == 'regu') {
            return(
                <>
                    {nama1} <br /> {nama2} <br /> {nama3}
                </>
            )
        }
    }
  return (
    <tr key={index} className='bg-[#4c4f6d] uppercase even:bg-transparent'>
        <td>{index+1}</td>
        <td>{golongan}</td>
        <td>{jk}</td>
        <td>{NameComponent(kategori)}</td>
        <td>{kontingen}</td>
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

export default ListPesertaSeni