import React from 'react';
import hero from '../../../public/images/hero.png';
import heroMobile from '../../../public/images/hero-mobile.png';
import Image from 'next/image';
import { SvgHeroArrow } from '../(svg)/AllSvg';

const Hero = () => {
  return (
    <div className='flex flex-col items-start justify-between lg:flex-row px-7 lg:px-0 lg:gap-8'>
      <div className='lg:min-w-[505px]'>
        <div className='justify-end hidden mt-6 lg:flex'>
          <SvgHeroArrow />
        </div>
        <div className='-mt-10 space-y-5'>
          <div className='sm:space-y-4'>
            <div className='font-semibold text-4xl sm:text-[50px]'>
              Оренда речей
            </div>
            <div className='font-semibold text-4xl sm:text-[50px] text-primary-01'>
              LendoCare
            </div>
          </div>
          <div className='text-lg font-medium text-gray-01'>
            Оренда обладнання для людей в інвалідністю без жодних проблем.
            Забезпечення доступності медичного обладнання та технологій для
            використання вдома через оренду.
          </div>
          <div className='pt-4 space-x-6'>
            <button className='btn-primary'>Каталог</button>
            <button className='btn-outline'>Детальніше</button>
          </div>
        </div>
      </div>
      <div className='hidden my-auto lg:block'>
        <Image src={hero} alt='hero' />
      </div>
      <div className='flex justify-end w-full lg:hidden'>
        <div className='h-[550px] w-[550px]'>
          <Image src={heroMobile} alt='hero' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
