import AdminLayout from '@/components/Mixins/AdminLayout'
import React, { ReactElement } from 'react'
import ButtonSetting from '@/components/Common/ButtonSetting'
import EventIcon from '@/../public/Event.png'
import GelanggangIcon from '@/../public/Gelanggang.png'

const AdminSetting = () => {
  return (
    <div className='h-auto overflow-hidden'>
        <header className='w-full bg-sideAdmin'>
            <h1 className='font-lato font-bold text-sm text-white px-3 py-1'>PENGATURAN</h1>
        </header>

        <main className='p-8 h-[90vh] space-y-4'>
            <div className='w-full max-h-[80vh] rounded-md grid grid-cols-2 gap-x-6 gap-y-6'>
                <ButtonSetting judul='EVENT' ket='Ubah nama dan logo event' Icon={EventIcon} lebar={90}/>
                <ButtonSetting judul='GELANGGANG' ket='Pengaturan jumlah dan nama gelanggang' Icon={GelanggangIcon} lebar={65}/>
            </div>
        </main>
    </div>
  )
}

AdminSetting.getLayout = (page: ReactElement) =>{
    return (
        <AdminLayout>
            {page}
        </AdminLayout>
    )
}

export default AdminSetting