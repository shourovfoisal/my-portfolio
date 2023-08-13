import Link from 'next/link'
import React, { PropsWithChildren } from 'react'
import { FaCode } from 'react-icons/fa'

type Props = React.FC<PropsWithChildren & {}>

export const Navbar: Props = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='text-6xl text-pastelOrange'>
            <FaCode />
        </div>
        <ul className='flex justify-end items-center text-ashGray text-2xl gap-6'>
            <li><Link href={`/services`}>Services</Link></li>
            <li><Link href={`/works`}>Works</Link></li>
            <li><Link href={`/blog`}>Blog</Link></li>
        </ul>
    </div>
  )
}