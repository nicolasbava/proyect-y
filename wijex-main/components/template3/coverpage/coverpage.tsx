import React from 'react';
import { useRouter } from 'next/router';

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

const CoverPage = (props: CoverPageProps) => {
  const router = useRouter();


  return (
    <section id='home'>
      <div className="flex flex-row w-full">
        <div className='absolute h-2/6 lg:h-2/4 w-10 lg:w-40 bg-t4primary' />
        <div className="flex flex-wrap w-1/3 lg:w-1/2 content-end justify-end bg-t4plinth z-99">        
          <div className="relative bg-t4thirdy w-full ">
            <div className="flex flex-row z-20 item-end content-end justify-end">
              <div className='flex flex-col lg:w-3/2 py-6 px-2 lg:py-8 lg:px-14' >
                <h1
                  className="font-bold uppercase title-font text-xl sm:text-5xl lg:text-7xl"
                  style={{ color: props.colorName }}
                >
                  {props.name}
                </h1>
                <p
                  className="leading-none tracking-tighter uppercase text-xs sm:text-base  lg:text-3xl"
                  style={{ color: props.colorDescription }}
                >
                  {props.description}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col w-2/3 lg:w-1/2">
          <img
            src={`${router.basePath + props.coverPageUrl}`}
            alt="CoverPage/png"
          />

        </div>
      </div>
      <div className='flex flex-row h-10 lg:h-20 bg-t4plinth mb-10 mx-10 lg:mb-20 lg:mr-20 lg:ml-40' />
    </section>
  );
}
export { CoverPage };