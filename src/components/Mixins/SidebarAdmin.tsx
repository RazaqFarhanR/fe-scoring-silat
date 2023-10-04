import React, { useState } from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router';
import DashboardIcon from "@/../public/svg/DashbordIcon.svg"
import TandingIcon from "@/../public/img/tanding.png"
import SeniIcon from "@/../public/svg/seni.svg"
import TunggalIcon from "@/../public/svg/tunggal.svg"
import GandaIcon from "@/../public/svg/ganda.svg"
import ReguIcon from "@/../public/svg/regu.svg"
import SettingIcon from "@/../public/img/setting.png"
import JadwalIcon from "@/../public/img/jadwal.png"
import PesertaIcon from "@/../public/img/peserta.png"
import ButtonSideAdmin from '../Common/ButtonSideAdmin';
import DropdownSideAdmin from '../Common/DropdownSideAdmin';

interface IProps{
    show:boolean;
}

const SidebarAdmin = ({show}:IProps) => {
  const router = useRouter()

  const [tanding,setTanding] = useState(false)
  const [tunggal,setTunggal] = useState(false)
  const [ganda,setGanda] = useState(false)
  const [regu,setRegu] = useState(false)
  const [solo,setSolo] = useState(false)
  const [seni,setSeni] = useState(false)

  const itemsSeni = [
    {
      active:tunggal,
      menu:"tunggal",
      icon:TunggalIcon,
      isShow:show,
      handler:(()=> setTunggal(!tunggal)),
      subMenu:[
        {
          route:'/admin/tunggal/jadwal',
          name:'jadwal',
          icon:JadwalIcon,
          isShow:show,
        },
        {
          route:'/admin/tunggal/peserta',
          name:'peserta',
          icon:PesertaIcon,
          isShow:show,
        },
      ]
    },
    {
      active:ganda,
      menu:"ganda",
      icon:GandaIcon,
      isShow:show,
      handler:(()=> setGanda(!ganda)),
      subMenu:[
        {
          route:'/admin/ganda/jadwal',
          name:'jadwal',
          icon:JadwalIcon,
          isShow:show,
        },
        {
          route:'/admin/ganda/peserta',
          name:'peserta',
          icon:PesertaIcon,
          isShow:show,
        },
      ]
    },
    {
      active:regu,
      menu:"regu",
      icon:ReguIcon,
      isShow:show,
      handler:(()=> setRegu(!regu)),
      subMenu:[
        {
          route:'/admin/regu/jadwal',
          name:'jadwal',
          icon:JadwalIcon,
          isShow:show,
        },
        {
          route:'/admin/regu/peserta',
          name:'peserta',
          icon:PesertaIcon,
          isShow:show,
        },
      ]
    },
    {
      active:solo,
      menu:"solo kreatif",
      icon:SeniIcon,
      isShow:show,
      handler:(()=> setSolo(!solo)),
      routeRekap:'',
      subMenu:[
        {
          route:'/admin/solokreatif/jadwal',
          name:'jadwal',
          icon:JadwalIcon,
          isShow:show,
        },
        {
          route:'/admin/solokreatif/peserta',
          name:'peserta',
          icon:PesertaIcon,
          isShow:show,
        },
      ]
    }
  ]

  return (
    <div className={`h-screen bg-sideAdmin relative transition-all duration-500 overflow-auto no-scrollbar  ${show? "lg:w-64 md:w-20":"w-20"}`}>

      {/* header nav */}
      <div className='text-center w-full h-11 flex justify-center items-center border-b-2 border-slate-700'>
        <h1 className={`uppercase font-bold text-white font-lato transition-all duration-500 ${show? "text-lg":"text-sm"}`}>ADMIN</h1>
      </div>

      {/* nav list */}
      <div className='w-full flex justify-center'>
        <div className='py-2'>
          {/* dashboard */}
          <div>
            <ButtonSideAdmin to={() => router.push('/admin/')} name={'DASHBOARD'} icon={DashboardIcon} show={show}/>
          </div>

          {/* tanding */}
          <div className='mt-6 space-y-2'>
            <div className='flex justify-between text-textMenu'>
              <h1 className={`uppercase font-lato font-bold text-textMenu transition-all duration-500 ${show? "text-sm":"text-xs text-center"}`}>
                tanding
              </h1>

            </div>
            <DropdownSideAdmin active={tanding} name={'TANDING'} icon={TandingIcon} show={show} handleClick={() => setTanding(!tanding)}/>
            <ul className={`transition-all duration-300 ${tanding? 'space-y-2 h-20':'h-0 opacity-0 -z-10 pointer-events-none'}`}>
              <ButtonSideAdmin to={() => router.push('/admin/tanding/jadwal')} name={'JADWAL'} icon={JadwalIcon} show={show}/>
              <ButtonSideAdmin to={() => router.push('/admin/tanding/peserta')} name={'PESERTA'} icon={PesertaIcon} show={show}/>
            </ul>

          </div>

          {/* seni */}
          <div className='mt-6 space-y-2 transition-all duration-500'>
            <div className='flex'>
              <h1 className={`uppercase font-lato font-bold text-textMenu transition-all duration-500 ${show? "text-sm":"text-xs text-center"}`}>SENI</h1>
            </div>
            {itemsSeni.map((item,index)=>(
              <div key={index}>
                <DropdownSideAdmin active={item.active} name={item.menu} icon={item.icon} show={item.isShow} handleClick={item.handler}/>
                <ul className={`transition-all duration-300 -z-10 w-full ${item.active? 'mt-2 space-y-2 h-20 mb-4':'h-0 opacity-0 pointer-events-none'}`}>
                  {(item.subMenu).map((item,index)=>(
                    <ButtonSideAdmin key={index} to={() => router.push(item.route)} name={item.name} icon={item.icon} show={item.isShow}/>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Rekap */}
          <div className='mt-6 space-y-2'>
            <div className='flex'>
              <h1 className={`uppercase font-lato font-bold text-textMenu transition-all duration-500 ${show? "text-sm":"text-xs text-center"}`}>REKAP</h1>
            </div>

            {/* tanding */}
            <ButtonSideAdmin to={() => router.push('/dashboard')} name={'TANDING'} icon={TandingIcon} show={show}/>

            {/* tanding */}
            <DropdownSideAdmin active={seni} name={'SENI'} icon={SeniIcon} show={show} handleClick={() => setSeni(!seni)}/>
            <ul className={`transition-all duration-300 ${seni? 'space-y-2 h-44':'h-0 opacity-0 -z-10 pointer-events-none'}`}>
              {itemsSeni.map((item,index)=>(
                <ButtonSideAdmin key={index} to={() => router.push('/dashboard')} name={item.menu} icon={item.icon} show={item.isShow}/>
              ))}
            </ul>
          </div>
          
          {/* Pengaturan */}
          <div className='mt-6 space-y-2'>
            <div className='flex'>
              <h1 className={`uppercase font-lato font-bold text-textMenu transition-all duration-500 ${show? "text-sm":"text-xs text-center"}`}>EVENT</h1>
            </div>
            <ButtonSideAdmin to={() => router.push('/admin/setting')} name={'PENGATURAN'} icon={SettingIcon} show={show}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SidebarAdmin