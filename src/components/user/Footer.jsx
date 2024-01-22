import { Button, Input } from '@nextui-org/react';
import React, { useState } from 'react';
import { Facebook, Instagram, Tiktok } from '../../assets/icons/Icons';

const Footer = () => {
  return (
    <>
      <div className='w-full bg-[#091232] py-6 border-b border-[#24315F]'>
        <div className='max-w-screen-lg mx-auto flex justify-between gap-16 sm:flex-row flex-col lg:px-0 px-6'>
          <div className='flex flex-col gap-16'>
            <div className='flex flex-col gap-3'>
              <h1 className='text-white text-4xl font-medium leading-snug'>Let's create a new <br /> obsession with us!</h1>
              <p className='text-[#D9D9D9]'>Contact us to chat and collaborate with us!</p>
            </div>
            <div className='flex flex-col gap-3'>
              <p className='text-lg text-white'>Subscribe Our Newsletter</p>
              <form action="mailto:muudapedia@gmail.com" className='flex gap-2'>
                <input type="email" className='bg-[#1A2756] px-3 rounded-full text-[#C8C8C8] text-sm  focus:outline-none' placeholder='Alamat Email' />
                <Button className='bg-[#4F5CDF] rounded-full text-sm text-white py-1'>Subscribe</Button>
              </form>
            </div>
          </div>

          <div className='flex flex-col gap-16'>
            <div className='flex flex-col gap-1'>
              <p className='text-sm text-[#D9D9D9]'>Kontak kami,</p>
              <a href='mailto:muudapedia@gmail.com' className='text-lg text-white underline'>muudapedia@gmail.com</a>
              <p className='text-lg text-white'>0831-5098-7880</p>
              <p className='text-lg text-white'>0821-4398-1522</p>
            </div>
            <p className='text-lg text-[#D9D9D9]'>Jl. Sutawijaya, No.89, Sumberrejo, <br /> Kec.Banyuwangi, Kab. Banyuwangi</p>
            <div className='flex gap-3 text-white'>
              <div className='bg-[#1A2756] p-3 rounded-full'>
                <Instagram />
              </div>
              <div className='bg-[#1A2756] p-3 rounded-full'>
                <Facebook/>
              </div>
              <div className='bg-[#1A2756] p-3 rounded-full'>
                <Tiktok/>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div className='py-5 pt-16 w-full bg-[#091232] flex justify-center items-center text-white'>
        <div className='max-w-screen-lg mx-auto flex items-start w-full lg:px-0 px-6'>
          <div className='flex gap-1 items-center w-full '>
            <img src="/src/assets/logo-muda-pedia.png" width={50} alt="" />
            <p className='text-sm'>© 2024 MudaPedia. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;