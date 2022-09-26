import { useRouter } from 'next/router';

type SocialMediaProps = {
    name: string;
    linkedin: string;
    youtube: string;
    twitter: string;
    facebook: string;
    instagram: string;
    tiktok: string;
    wijex: string;
};

const SocialMediaWhite = (props: SocialMediaProps) => {
    const router = useRouter();
    return (
        <section id='contactprofile'>
            <div className="mx-auto w-100 mt-5 mb-10">
                <div className="flex items-center justify-center lg:justify-center flex-col">
                    <h1 className="mb-3 text-2xl font-bold leading-none tracking-wide uppercase text-blackcolor title-font lg:text-4xl text-center">
                        {props.name}
                    </h1>
                    <div className="grid grid-flow-col gap-4 mt-5">
                        {
                            props.facebook !== '' &&
                            <a href={props.facebook} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={`${router.basePath}/assert/icons/facebookblue.svg`}
                                    width={48}
                                    height={48}
                                    
                                    alt="logo-linkedin"
                                    className="h-48 w-48 rounded-full"
                                />
                            </a>
                        }
                        {
                            props.twitter !== '' &&
                            <a href={props.twitter} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={`${router.basePath}/assert/icons/twitterblue.svg`}
                                    width={48}
                                    height={48}
                                    
                                    alt="logo-linkedin"
                                    className="h-48 w-48 rounded-full"
                                />
                            </a>
                        }
                        {
                            props.instagram !== '' &&
                            <a href={props.instagram} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={`${router.basePath}/assert/icons/instagramblue.svg`}
                                    width={48}
                                    height={48}
                                    
                                    alt="logo-linkedin"
                                    className="h-48 w-48 rounded-full"
                                />
                            </a>
                        }
                        {
                            props.linkedin !== '' &&
                            <a href={props.linkedin} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={`${router.basePath}/assert/icons/linkedinblue.svg`}
                                    width={48}
                                    height={48}
                                    
                                    alt="logo-linkedin"
                                    className="h-48 w-48 rounded-full"
                                />
                            </a>
                        }
                        {
                            props.wijex !== '' &&
                            <a href={props.wijex} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={`${router.basePath}/assert/icons/wijexblue.svg`}
                                    width={48}
                                    height={48}
                                    
                                    alt="logo-linkedin"
                                    className="h-48 w-48 rounded-full"
                                />
                            </a>
                        }
                        {
                            props.youtube !== '' &&
                            <a href={props.youtube} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={`${router.basePath}/assert/icons/youtubeblue.svg`}
                                    width={48}
                                    height={48}
                                    
                                    alt="logo-linkedin"
                                    className="h-48 w-48 rounded-full"
                                />
                            </a>
                        }


                        {
                            props.tiktok !== '' &&
                            <a href={props.tiktok} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={`${router.basePath}/assert/icons/tiktokblue.svg`}
                                    width={48}
                                    height={48}
                                    
                                    alt="logo-linkedin"
                                    className="h-48 w-48 rounded-full"
                                />
                            </a>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}
export { SocialMediaWhite };