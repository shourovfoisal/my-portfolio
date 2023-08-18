import { mono } from '@/fonts'
import Link from 'next/link'
import React from 'react'
import type { PropsWithChildren } from 'react'
import { FaFacebook, FaGithubAlt, FaLinkedin, FaArrowRight } from 'react-icons/fa6'
import { HiMail } from 'react-icons/hi'

type Props = React.FC<PropsWithChildren & {}>

export const Welcome: Props = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3'>
        <div className='col-span-2'>
            <h1 className='text-8xl font-semibold text-LightPastelOrange'>Shourov <span className='block'>Foisal.</span></h1>
            <hr className='w-14 ml-1 mt-4 border-t-8 border-t-PastelOrange' />
            <ul className="social-navbar ml-1 mt-32 text-xl flex items-center gap-5 text-LightPastelOrange">
                <li>
                    <Link target='_blank' href={`https://www.facebook.com/shourovfoisal123/`}>
                        <FaFacebook />
                    </Link>
                </li>
                <li>
                    <Link target='_blank' href={`https://github.com/shourovfoisal`}>
                        <FaGithubAlt />
                    </Link>
                </li>
                <li>
                    <Link target='_blank' href={`https://www.linkedin.com/in/shourovfoisal/`}>
                        <FaLinkedin />
                    </Link>
                </li>
                <li>
                    <Link target='_blank' href={`mailto:shourovcseruet@gmail.com`}>
                        <HiMail />
                    </Link>
                </li>
            </ul>
        </div>
        <div className='col-span-1 flex items-center'>
            <div>
                <h3 className={mono.className + ' text-ashGray'}>&mdash; Introduction</h3>
                <h2 className='text-3xl leading-10 text-LightPastelOrange mt-6'>React Developer <span className='block'>Based in Bangladesh</span></h2>
                <h4 className='text-ashGray mt-5 text-sm leading-6'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus fuga asperiores nulla obcaecati aliquam voluptate harum, quod cupiditate officiis beatae!
                </h4>
                <Link className='mt-10 flex gap-3 items-center text-PastelOrange' href={`/story`}>
                    <span className='underline'>My Story</span>
                    <span><FaArrowRight /></span>
                </Link>
            </div>
        </div>
    </div>
    
  )
}