import { useRouter } from 'next/router';

type CoverPageProps = {
  name: string;
  colorName: string;
  description: string;
  colorDescription: string;
  coverPageUrl: string;
};

const CoverPageDownLeft = (props: CoverPageProps) => {
  const router = useRouter();
  return (
      <section>     
      <div className="relative overflow-hidden">
        <img
          className='w-screen object-cover'
          src={`${router.basePath + props.coverPageUrl}`}
          alt="CoverPage/png"
        />
        <div className="absolute w-10/12 bottom-10 left-10 lg:bottom-96 lg:left-20 inset-x-0 leading-4">
          <div className="hidden md:block self-start lg:flex flex-col">
            <h1
              className="mb-3 text-xl font-bold leading-none tracking-tighter uppercase title-font md:text-3xl lg:text-5xl"
              style={{ color: props.colorName }}
              dangerouslySetInnerHTML={{ __html: props.name }}
            >
            </h1>
          </div>
          <div className="w-1/2 flex flex-col items-start">
            <div className="self-start lg:flex flex-col">
              <p
                className="leading-none tracking-tighter text-sm md:text-xl uppercase "
                style={{ color: props.colorDescription }}
                dangerouslySetInnerHTML={{ __html: props.description }}
              >
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
}
export { CoverPageDownLeft };