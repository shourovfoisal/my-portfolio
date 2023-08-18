"use client"
import Link from 'next/link'
import React, { useEffect, useReducer } from 'react'
import { usePathname } from 'next/navigation'
import type { PropsWithChildren } from 'react'
import { FaCode } from 'react-icons/fa'
import { NAVIGATION_REDUCER_INITIAL_STATE, navigationReducer } from '@/reducers'
import { NAVIGATION_ACTIONS } from '@/reducers'

type Props = React.FC<PropsWithChildren & {}>

export const Navbar: Props = () => {

  const [state, dispatch] = useReducer(navigationReducer, NAVIGATION_REDUCER_INITIAL_STATE);

  const pathname = usePathname();

  useEffect(() => {
    dispatch({ type: NAVIGATION_ACTIONS.TOGGLE_ACTIVE, payload: pathname });
  }, [pathname]);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='flex justify-center md:justify-start mb-4 md:mb-0 text-6xl text-PastelOrange'>
            <Link href={`/`}>
              <FaCode />
            </Link>
        </div>
        <ul className='navbar flex justify-center md:justify-end items-center text-2xl gap-6'>
            <li><Link className={`${state.services.activeClasses}`} href={`/services`}>Services</Link></li>
            <li><Link className={`${state.works.activeClasses}`} href={`/works`}>Works</Link></li>
            <li><Link className={`${state.blog.activeClasses}`} href={`/blog`}>Blog</Link></li>
        </ul>
    </div>
  )
}