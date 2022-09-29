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
  btnName: string;
};

const CoverPageBlue = (props: CoverPageProps) => {
  const router = useRouter();
  const [lineClamp, setLineClamp] = React.useState<string>('line-clamp-3');
  const [readMore, setReadMore] = React.useState<boolean>(true);

  const onResumeClick = () => {
    const PDF = `${router.basePath + props.pdf}`
    window.open(PDF);
  }

  const onClickReadMore = () => {
    setLineClamp('');
    setReadMore(false);
  }

  const onClickSeeLess = () => {
    setLineClamp('line-clamp-3');
    setReadMore(true)
  }

  return (
    <section id='informationprofile'>
      <div className='flex flex-col mt-10 lg:mt-20' >
        <div className="grid grid-cols-2 gap-4">
          <div className='h-full lg:pb-36 xl:pb-44'>
            <div className="absolute w-2/3 z-10 left-0 mt-10 lg:mt-32">
              <div className='flex flex-col ' >
                <div className='pl-10 w-1/2 lg:pl-20 bg-t2secondary py-4 lg:py-6 xl:py-8'>
                  <h1
                    className="font-bold uppercase title-font text-2xl lg:text-5xl xl:text-7xl"
                    style={{ color: props.colorName }}
                  >
                    {props.name}
                  </h1>
                  <p
                    className="leading-none tracking-tighter uppercase text-base lg:text-xl xl:text-3xl"
                    style={{ color: props.colorDescription }}
                  >
                    {props.description}
                  </p>
                </div>
              </div>
            </div>
            <div className='relative flex flex-col h-full justify-end lg:mt-36 xl:mt-44'>
              <div className='lg:w-2/3 self-center '>
                <img
                  src={`${router.basePath + props.imgInformation}`}
                  alt="CoverPage/png"
                />
              </div>
            </div>
          </div>
          <div className='flex flex-col '>
            <div className='lg:w-2/3 self-center'>
              <img
                src={`${router.basePath + props.coverPageUrl}`}
                alt="CoverPage/png"
              />
            </div>
            <div className='flex flex-col h-full'>
              <div className='lg:w-2/3 flex flex-col self-center h-full'>
                <div className='flex flex-col self-center justify-between item-between content-between h-full'>
                  <div className="pt-5 px-3">
                    <p className={`text-justify text-btncolor title-font font-bold text-xs ${lineClamp} lg:text-xl`}>
                      {props.information}
                    </p>
                    {
                      readMore ?
                        <div className="cursor-pointer" onClick={onClickReadMore}>
                          <p className="text-linkcolor title-font font-bold text-xs ">
                            Leer más
                          </p>
                        </div> :
                        <div className="cursor-pointer" onClick={onClickSeeLess}>
                          <p className="text-linkcolor title-font font-bold text-xs ">
                            Ver menos
                          </p>
                        </div>
                    }
                  </div>
                  <div className="pt-5 px-3">
                    <button onClick={() => onResumeClick()}
                      className="px-8 py-3 pt-4 leading-5 transition-colors duration-200 transform bg-t2fourth rounded-md hover:bg-t2fourth  focus:outline-none focus:bg-t2fourth shadow-lg"
                      style={{ color: 'white' }}
                    >
                      <h2 className="text-xs font-semibold leading-none tracking-wide text-t2primary title-font">
                      {props.btnName}
                      </h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
export { CoverPageBlue };