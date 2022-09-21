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
      <div className="flex flex-row w-full justify-end pt-10 mb-10">
        <div className="flex flex-col w-1/2 lg:w-1/3">
          <div className="absolute w-2/3 z-10 self-center left-0 mt-10 lg:mt-32">
            <div className='flex flex-col' >
              <div className='pl-10 lg:pl-20 bg-t2t2thirdy py-4 lg:py-6 xl:py-8'>
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
          <div className="flex-col px-5 bg-t2thirdy h-full content-end justify-end item-end self-end">
            <img
              src={`${router.basePath + props.imgInformation}`}
              alt="logo-wijex"
            />
          </div>
        </div>
        <div className="flex-col w-1/2 lg:w-1/3">
          <div className='px-2 lg:px-20'>
            <img
              src={`${router.basePath + props.coverPageUrl}`}
              alt="CoverPage/png"
            />
          </div>
          <div>
            <div className="pt-5 bg-t2secondary px-3 lg:px-20">
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

              <div className="pt-5">
                <button onClick={() => onResumeClick()}
                  className="px-8 py-2 pt-2 leading-5 transition-colors duration-200 transform bg-t2thirdy rounded-md hover:bg-t2thirdy focus:outline-none focus:bg-t2thirdy  shadow-lg"
                  style={{ color: 'white' }}
                >
                  <h2 className="text-xs font-semibold leading-none tracking-wide text-primary title-font">
                    VER CURRICULUM
                  </h2>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export { CoverPage };