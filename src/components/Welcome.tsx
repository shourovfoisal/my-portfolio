import { mono } from '@/fonts'
import Link from 'next/link'
import React from 'react'
import type { PropsWithChildren } from 'react'
import { FaFacebook, FaGithubAlt, FaLinkedin } from 'react-icons/fa6'
import { HiMail } from 'react-icons/hi'

type Props = React.FC<PropsWithChildren & {}>

export const Welcome: Props = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className=''>
            <h1 className='text-8xl font-semibold text-lightPastelOrange'>Shourov <span className='block'>Foisal.</span></h1>
            <hr className='w-14 ml-1 mt-4 border-t-8 border-t-pastelOrange' />
            <ul className="social-navbar ml-1 mt-24 text-xl flex items-center gap-5 text-lightPastelOrange">
                <li>
                    <Link href={`https://www.facebook.com/shourovfoisal123/`}>
                        <FaFacebook />
                    </Link>
                </li>
                <li>
                    <Link href={`https://github.com/shourovfoisal`}>
                        <FaGithubAlt />
                    </Link>
                </li>
                <li>
                    <Link href={`https://www.linkedin.com/in/shourovfoisal/`}>
                        <FaLinkedin />
                    </Link>
                </li>
                <li>
                    <Link href={`mailto:shourovcseruet@gmail.com`}>
                        <HiMail />
                    </Link>
                </li>
            </ul>
        </div>
        <div className=''>
            <h3 className={mono.className + ' text-rockBlue'}>&mdash; Introduction</h3>
            <h2>React Developer <span className='block'>Based in Bangladesh</span></h2>
        </div>
    </div>
    
  )
}