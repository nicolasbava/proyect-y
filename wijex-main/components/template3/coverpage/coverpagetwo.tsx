import React from 'react';
import { useRouter } from 'next/router';

// ATTENTION!!
import styles from '../template3.module.css'

type CoverPageProps = {
  name: string;
  colorName: string;
  description: string;
  colorDescription: string;
  coverPageUrl: string;
  information: string;
  pdf: string;
  imgInformation: string;
};




const CoverPageTwo = (props: CoverPageProps) => {
  const router = useRouter();


  return (
    /* FIRST PART - INICIO nav goes to here   */
    <section id='home'> 
      <div className="mt-2 mb-16 sm:mt-0 sm:mb-0 md:flex md:flex-row md:-mt-8 lg:flex lg:flex-row lg:mt-10">
        {/* IMAGE DIV */}
        <div className="flex flex-row px-10 pl-0 w-full   pt-48 pb-0 mb-0 md:pt-20 lg:px-10 lg:pl-40 lg:pr-16 ">
          <div className="w-full flex flex-row content-end justify-end item-end">
            <img
              className={`transform translate-x-10 lg:h-[10px]  -translate-y-10 lg:translate-x-16 lg:-translate-y-16 w-auto lg:pr-20 z-10 ${styles.coverPageImage} `}
              style={{}}
              src={`${router.basePath + props.coverPageUrl}`}
              alt="CoverPage/png"
              />
          </div>
        </div>
        {/* H1 TITLE DIV */}
        <div className="absolute -mt-10  w-full sm:w-1/2 sm:-mt-40 md:w-1/2 md:mt-96 lg:mt-72 z-10 self-center ">
          <div className='flex flex-col pb-5' >
            <div className='pl-10 lg:pl-20 bg-t4thirdy py-4 lg:py-12 xl:py-20 relative z-0'>
              <h1
                className="uppercase title-font text-4xl lg:text-5xl xl:text-7xl"
                style={{ color: props.colorName, fontWeight: 900 }}
              >{props.name}</h1>            
              
              <p
                className="leading-none tracking-tighter uppercase text-base lg:text-xl xl:text-3xl"
                style={{ color: props.colorDescription }}
              >
                {props.description}
              </p>
            </div>
          </div>
        </div>
        

      </div>
    </section>
  );
}
export { CoverPageTwo };