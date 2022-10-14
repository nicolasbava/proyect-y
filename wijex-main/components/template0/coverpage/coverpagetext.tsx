import { useRouter } from 'next/router';


type CoverPageProps = {
  name: string;
  colorName: string;
  description: string;
  colorDescription: string;
  coverPageUrl: string;
};

const CoverPageText = (props: CoverPageProps) => {
  const router = useRouter();
  return (
    <section
        className='max-h-screen mt-20 md:mt-12'
    >
      <div className="relative  ">
        <div className="hidden md:block mx-auto absolute z-40 top-80 w-1/2 ml-5 mt-5 opacity-0 sm:opacity-100  md:pl-10 md:mt-12 lg:ml-12 lg:pl-12 lg:pt-12"
        >
         
            <h1
              className="mb-3 h-full text-3xl font-bold leading-none tracking-tighter uppercase title-font lg:text-6xl"
              style={{ color: props.colorName }}
            >
              {props.name}
            </h1>
            <p
                className="leading-none tracking-tighter lg:text-xl uppercase"
                style={{ color: props.colorDescription }}
              >
                {props.description}
              </p>
       
          
      
        </div>
      </div>
      <img
        src={`${router.basePath + props.coverPageUrl}`}
        alt="CoverPage/png"
        className='img relative top-0 z-0'
      
    
        // -mt-28 xs:-mt-10 sm:-mt-20 md:-mt-28 lg:-mt-52
      />
    </section>
  );
}
export { CoverPageText };