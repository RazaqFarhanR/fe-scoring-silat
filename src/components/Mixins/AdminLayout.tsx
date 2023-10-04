import React, { useState } from 'react'
import SidebarAdmin from './SidebarAdmin'
import HeaderAdmin from './HeaderAdmin'

type Props = {}

const AdminLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [show, setShow] = useState(true)

    const NavFunction = () => {
        setShow(!show)
    }
    return (
        <div className='bg-darkPurple min-h-screen h-auto flex w-screen'>
            <SidebarAdmin show={show}/>
            <div className='w-full'>
                <HeaderAdmin navAction={NavFunction} show={show}/>
                {children}
            </div>
        </div>
    )
}

export default AdminLayout