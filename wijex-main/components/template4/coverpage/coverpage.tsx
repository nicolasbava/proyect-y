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
  background: string;
};

const CoverPage = (props: CoverPageProps) => {
  const router = useRouter();


  return (
    <section >
      <div
        style={{ backgroundImage: `url(${router.basePath + props.background})` }}
        className='bg-cover bg-center bg-no-repeat bg-t5secondary bg-opacity-50"'
      >
        <div className="bg-t5secondary bg-opacity-50">
          <div className="flex flex-row w-full pt-10">
            <div className="flex flex-wrap w-1/2 lg:w-2/3 content-center justify-center ">
              <div className="relative bg-t5primary w-full pt-12 pb-8 bg-t5socket">
                <div className="flex flex-row z-20 item-center content-center justify-center bg-t5socket">
                  <div className='flex flex-col lg:w-3/2 pl-4 bg-t5socket' // pl (padding)
                  >
                    <h1
                      className="uppercase title-font text-2xl sm:text-5xl lg:text-7xl" //text-2xl (font-size)
                      style={{ color: props.colorName, fontWeight: 900 }}
                    > 
                      {props.name}
                    </h1>
                    <p
                      className="leading-none tracking-tighter uppercase text-md sm:text-base  lg:text-3xl" //text-md (font-size)
                      style={{ color: props.colorDescription }}
                    >
                      {props.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-col w-1/2 lg:w-1/4 lg:mb-12">
              <img
                src={`${router.basePath + props.coverPageUrl}`}
                alt="CoverPage/png"
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export { CoverPage };

