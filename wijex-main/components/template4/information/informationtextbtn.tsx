import { useRouter } from 'next/router';

type InformationProps = {
    name: string;
    information: string;
    pdf: string;
    imgInformation: string;
    linkedin: string;
    youtube: string;
    twitter: string;
    facebook: string;
    instagram: string;
    tiktok: string;
    telegram: string;
    wijex: string;
    textBtn:string
};

const InformationProfileTextBtn = (props: InformationProps) => {
    const router = useRouter();


    const onResumeClick = () => {
        const PDF = `${router.basePath + props.pdf}`
        window.open(PDF);
    }

    return (
        <section id='informationprofile'>
            <div className='lg:flex lg:flex-row-reverse mb-20'>
                <div className='lg:w-1/2 bg-background lg:mt-10 flex flex-col justify-center'>
                    <div className="">
                        <img
                            src={`${router.basePath + props.imgInformation}`}
                            alt="logo-wijex"
                        />
                    </div>

                </div>
                <div className='lg:w-1/2 flex flex-col justify-between lg:pt-12'>
                    <div>
                        <div className="sm:max-w-6xl xl:max-w-3xl z-10">
                            <p className=" text-t5text title-font font-bold lg:text-xl px-10 pt-12 lg-pt-0">
                                {props.information}
                            </p>
                        </div>
                        <div className="pt-12 flex justify-center items-center sm:px-10">
                            <button onClick={() => onResumeClick()}
                                className="w-auto px-4 py-4 leading-5 transition-colors duration-200 transform bg-t5secondary rounded-md hover:bg-t5secondary focus:outline-none focus:bg-t5secondary  shadow-lg"
                                style={{ color: 'white' }}
                            >
                                <h2 className="mx-auto justify text-base font-semibold leading-none tracking-wide text-t5primary title-font">
                                    {props.textBtn}
                                </h2>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <div className="px-10">
                            <div className="mt-2">
                                <div className="flex flex-row justify-center items-center">
                                    <div className="grid grid-flow-col gap-2 md:gap-10 mt-10 w-auto">
                                        {
                                            props.facebook !== '' &&
                                            <a href={props.facebook} target="_blank" rel="noopener noreferrer">
                                                <img
                                                    src={`${router.basePath}/assert/icons/facebook-color.png`}
                                                    alt="logo-linkedin"
                                                    width={45}
                                                    height={45}
                                                    className="rounded-full"
                                                />
                                            </a>
                                        }
                                        {
                                            props.twitter !== '' &&
                                            <a href={props.twitter} target="_blank" rel="noopener noreferrer">
                                                <img
                                                    src={`${router.basePath}/assert/icons/twitter-color.png`}
                                                    alt="logo-linkedin"
                                                    width={45}
                                                    height={45}
                                                    className="rounded-full"
                                                />
                                            </a>
                                        }
                                        {
                                            props.instagram !== '' &&
                                            <a href={props.instagram} target="_blank" rel="noopener noreferrer">
                                                <img
                                                    src={`${router.basePath}/assert/icons/instagram-color.png`}
                                                    alt="logo-linkedin"
                                                    width={45}
                                                    height={45}
                                                    className="rounded-full"
                                                />
                                            </a>
                                        }
                                        {
                                            props.linkedin !== '' &&
                                            <a href={props.linkedin} target="_blank" rel="noopener noreferrer">
                                                <img
                                                    src={`${router.basePath}/assert/icons/linkedin-color.png`}
                                                    alt="logo-linkedin"
                                                    width={45}
                                                    height={45}
                                                    className="rounded-full"
                                                />
                                            </a>
                                        }
                                        {
                                            props.wijex !== '' &&
                                            <a href={props.wijex} target="_blank" rel="noopener noreferrer">
                                                <img
                                                    src={`${router.basePath}/assert/icons/wijex.svg`}
                                                    alt="logo-linkedin"
                                                    width={45}
                                                    height={45}
                                                    className="rounded-full"
                                                />
                                            </a>
                                        }
                                        {
                                            props.youtube !== '' &&
                                            <a href={props.youtube} target="_blank" rel="noopener noreferrer">
                                                <img
                                                    src={`${router.basePath}/assert/icons/youtube-color.png`}
                                                    alt="logo-linkedin"
                                                    width={45}
                                                    height={45}
                                                    className="rounded-full"
                                                />
                                            </a>
                                        }
                                        {
                                            props.tiktok !== '' &&
                                            <a href={props.tiktok} target="_blank" rel="noopener noreferrer">
                                                <img
                                                    src={`${router.basePath}/assert/icons/tik-tok-color.png`}
                                                    alt="logo-linkedin"
                                                    width={45}
                                                    height={45}
                                                    className="rounded-full"
                                                />
                                            </a>
                                        }
                                        {
                                            props.telegram !== '' &&
                                            <a href={`https://t.me/${props.telegram}`} target="_blank" rel="noopener noreferrer">
                                                <img
                                                    src={`${router.basePath}/assert/icons/telegram-color.png`}
                                                    alt="logo-linkedin"
                                                    width={45}
                                                    height={45}
                                                    className="rounded-full"
                                                />
                                            </a>
                                        }
                                    </div>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
export { InformationProfileTextBtn };