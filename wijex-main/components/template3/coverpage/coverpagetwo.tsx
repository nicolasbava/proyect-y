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
      <div className="mt-2 mb-32 sm:mt-0 sm:mb-20 md:flex md:flex-row md:mt-20 lg:flex lg:flex-row lg:mt-10  ">
        {/* IMAGE DIV */}
        <div className="flex flex-row px-10 pl-0 w-full pt-48 pb-0 mb-0 md:pt-20 lg:px-0 lg:pl-40  ">
          <div className="w-full flex flex-row content-end justify-end item-end">
            <img
              className={`transform -translate-y-10  lg:-translate-y-16 w-auto z-10 ${styles.coverPageImage} `}
              style={{}}
              src={`${router.basePath + props.coverPageUrl}`}
              alt="CoverPage/png"
              />
          </div>
        </div>
        {/* CONTAINER TEXT */}
        <div className="absolute -mt-10  w-full sm:w-1/2 sm:-mt-52 md:w-2/3 md:mt-96 lg:w-1/2 lg:mt-72 z-10 self-center ">
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