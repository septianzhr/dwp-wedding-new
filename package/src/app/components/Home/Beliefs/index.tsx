'use client'
import React from 'react'
import Link from 'next/link'

const Beliefs = () => {
  return (
    <section className='bg-cover bg-center overflow-hidden'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
          {/* COLUMN-1 */}

          <div className="bg-purple pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl bg-[url('/images/beliefs/swirls.svg')] bg-no-repeat bg-right-bottom">
            <p className='text-lg font-normal text-white tracking-widest mb-5 text-center sm:text-start uppercase'>
              NILAI KAMI
            </p>
            <h3 className='text-white mb-5 text-center sm:text-start'>
              Kepuasan{' '}
              <span className='text-white/60'>
                Klien Adalah Prioritas Utama Kami
              </span>
            </h3>
            <p className='text-lg text-white/75 pt-2 mb-16 text-center sm:text-start'>
              Kami berkomitmen memberikan pelayanan terbaik, hasil dekorasi yang elegan, dan pengalaman yang berkesan untuk setiap acara yang kami tangani.
            </p>
            <div className='text-center sm:text-start'>
              <Link
                href='#'
                className='text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full duration-300 bg-primary border border-primary hover:bg-darkmode hover:border-darkmode'>
                Booking Sekarang
              </Link>
            </div>
          </div>

          {/* COLUMN-2 */}
          <div className=''>
            <div className="bg-[#D6FFEB] pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl bg-[url('/images/beliefs/bg.svg')] bg-no-repeat bg-bottom">
              <p className='text-lg font-normal text-primary tracking-widest mb-5 text-center sm:text-start uppercase'>
                LAYANAN KAMI
              </p>
              <h3 className='text-black mb-5 text-center sm:text-start'>
                <span className='text-primary'>Wujudkan</span> Acara Impian Anda Bersama Kami
              </h3>
              <p className='pt-2 mb-16 text-center sm:text-start text-black/75 text-lg'>
                Melayani dekorasi pernikahan, tenda, sound system, lighting, panggung, kursi tamu, dan berbagai kebutuhan acara lainnya.
              </p>
              <div className='text-center sm:text-start'>
                <Link
                  href='#'
                  className='text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-primary border border-primary hover:bg-darkmode hover:border-darkmode'>
                  Booking Sekarang
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Beliefs
