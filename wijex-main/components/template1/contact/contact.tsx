import { useRouter } from 'next/router';
import React from 'react';

type ContactProps = {
    name: string;
    email: string;
    phone: string;
    address: string;
    number: string;
    locality: string;
    province: string;
    country: string;
    avatar: string;
    url: string;
};


const ContactProfile = (props: ContactProps) => {
    const router = useRouter();
    const [showModal, setShowModal] = React.useState<boolean>(false);


    const onOpenModal = () => {
        //setShowModal(true);
    }

    const onCloseModal = () => {
        setShowModal(false)
    }

    return (
        <section>
            <div className="sm:flex sm:flex-row pt-10 mx-0 justify-center md:mb-8">
                <div className="lg:flex flex-col self-center sm:max-w-5xl xl:max-w-2xl z-10">
                    <div className="mx-auto flex items-center justify-center flex-col">
                        <img
                            src={`${router.basePath + props.avatar}`}
                            width={200}
                            height={200}
                            alt="logo-wijex"
                            className="h-48 w-48 object-cover rounded-full"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <div className="mx-auto md:pl-10">
                        <div className="flex-col flex self-center p-10">
                            <div className="flex items-center justify-center lg:items-start lg:justify-center flex-col">
                                <h1 className="mb-3 text-2xl font-bold leading-none tracking-wide uppercase text-blackcolor title-font lg:text-3xl">
                                    {props.name}
                                </h1>
                            </div>
                            <div className="grid grid-flow-row gap-4 mt-4" style={{ display: 'inline-block', justifyContent: 'start', alignContent: 'start' }}>

                                <a href={`tel:${props.phone}`} target="_blank" rel="noopener noreferrer">
                                    <div className="flex items-center mb-3">
                                        <div className="w-11 h-11 inline-flex items-center justify-center rounded-full flex-shrink-0">
                                            <img
                                                src={`${router.basePath}/assert/icons/phoneblue.svg`}
                                                width={40}
                                                height={40}
                                                alt="logo-linkedin"
                                                className="rounded-full"
                                            />
                                        </div>
                                        <h3 className="text-darkgray title-font text-base lg:text-lg ml-2 mt-1">
                                            {props.phone}
                                        </h3>
                                    </div>
                                </a>

                                <a href={`mailto:${props.email}`} target="_blank" rel="noopener noreferrer">
                                    <div className="flex items-center mb-3" >
                                        <div className="w-11 h-11 inline-flex items-center justify-center rounded-full flex-shrink-0">
                                            <img
                                                src={`${router.basePath}/assert/icons/emailblue.svg`}
                                                width={40}
                                                height={40}
                                                alt="logo-linkedin"
                                                className="rounded-full"
                                            />
                                        </div>
                                        <h3 className="text-darkgray title-font text-base lg:text-base ml-2 mt-1">
                                            {props.email}
                                        </h3>
                                    </div>
                                </a>
                                <a href={`/${props.url}/map`} target="_blank" rel="noopener noreferrer">
                                    <div className="flex items-center mb-3 cursor-pointer" onClick={() => onOpenModal()}>
                                        <div className="w-11 h-11 inline-flex items-center justify-center rounded-full flex-shrink-0">
                                            <img
                                                src={`${router.basePath}/assert/icons/direccionblue.svg`}
                                                width={40}
                                                height={40}
                                                alt="logo-linkedin"
                                                className="rounded-full"
                                            />
                                        </div>
                                        <h3 className="text-darkgray title-font text-base lg:text-lg ml-2 mt-1">
                                            {props.address} {props.number} - {props.locality} - {props.province} - {props.country}
                                        </h3>
                                    </div>
                                </a>
                                <a href={`https://api.whatsapp.com/send?phone=${props.phone}`} target="_blank" rel="noopener noreferrer">
                                    <div className="flex items-center mb-3">
                                        <div className="w-11 h-11 inline-flex items-center justify-center rounded-full flex-shrink-0">
                                            <img
                                                src={`${router.basePath}/assert/icons/whatsapp-color.png`}
                                                width={40}
                                                height={40}
                                                alt="logo-linkedin"
                                                className="rounded-full"

                                            />
                                        </div>
                                        <h3 className="text-darkgray title-font text-base lg:text-lg ml-2 mt-1">
                                            {props.phone}
                                        </h3>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
export { ContactProfile };