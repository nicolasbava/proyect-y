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

const CoverPageTwo = (props: CoverPageProps) => {
  const router = useRouter();


  return (
    <section >
      <div className="flex flex-row mt-16 lg:mt-24 h-auto">
        <div className="absolute w-1/2 z-10 self-end ">
          <div className='flex flex-col pb-5' >
            <div className='pl-10 lg:pl-20 bg-t4thirdy py-4 lg:py-12 xl:py-20'>
              <p
                className="uppercase title-font text-2xl lg:text-5xl xl:text-7xl"
                style={{ color: props.colorName, fontWeight: 900 }}
              >
                {props.name}
              </p>
              <p
                className="leading-none tracking-tighter uppercase text-base lg:text-xl xl:text-3xl"
                style={{ color: props.colorDescription }}
              >
                {props.description}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row px-10 pl-0 pr-10 lg:px-10 lg:pl-40 lg:pr-16">
          <div className="bg-t4background flex flex-row content-end justify-end item-end">
            <img
              src={`${router.basePath + props.coverPageUrl}`}
              alt="CoverPage/png"
              className='transform translate-x-10 -translate-y-10 lg:translate-x-16 lg:-translate-y-16 w-8/12 lg:w-2/3'
            />
          </div>
        </div>

      </div>
    </section>
  );
}
export { CoverPageTwo };