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
                            width={270}
                            height={270}
                            
                            alt="logo-wijex"
                            className="h-48 w-48 object-cover rounded-full"

                        />
                    </div>
                </div>
                <div className="flex">
                    <div className="mx-auto md:pl-10">
                        <div className="flex-col flex self-center p-8">
                            <div className="flex items-center justify-center lg:items-start lg:justify-center flex-col">
                                <h1 className="mb-8 text-center text-2xl font-bold leading-none tracking-wide uppercase text-blackcolor title-font lg:text-3xl">
                                    {props.name}
                                </h1>
                            </div>
                            <div className="grid grid-flow-row gap-4 mt-4" style={{ display: 'inline-block', justifyContent: 'start', alignContent: 'start' }}>

                                

                                {/* PHONE - TELEFONO */}
                                <a href={`tel:${props.phone}`} target="_blank" rel="noopener noreferrer">
                                    <div className="flex mb-10 flex-col sm:flex-row items-center">
                                        <div className="w-11 h-11 inline-flex items-center justify-center rounded-full flex-shrink-0">
                                            <img
                                                src={`${router.basePath}/assert/icons/phone.svg`}
                                                width={60}
                                                height={60}
                                                
                                                alt="logo-linkedin"
                                                className="rounded-full mb-5 sm:mb-0"

                                            />
                                        </div>
                                        <h3 className="text-darkgray title-font text-l lg:text-xl sm:ml-2">{props.phone}</h3>
                                    </div>
                                </a>

                                {/*  EMAIL */}
                                <a href={`mailto:${props.email}`} target="_blank" rel="noopener noreferrer">
                                    <div className="flex flex-col sm:flex-row mb-8 flex-wrap items-center" >
                                        <div className="w-11 h-11 inline-flex items-center justify-center rounded-full flex-shrink-0">
                                            <img
                                                src={`${router.basePath}/assert/icons/email.svg`}
                                                width={60}
                                                height={60}
                                                
                                                alt="logo-linkedin"
                                                className="rounded-full mb-5 sm:mb-0"

                                            />
                                        </div>
                                        <h3 className="text-darkgray title-font text-l lg:text-xl ml-2">{props.email}</h3>
                                    </div>
                                </a>

                                {/* LOCALIDAD - DIRECCION - ADDRESS */}
                                <a href={`/${props.url}/map`} target="_blank" rel="noopener noreferrer">
                                    <div className="flex flex-col sm:flex-row mb-10 items-center cursor-pointer" onClick={() => onOpenModal()}>
                                        <div className="w-11 h-11 inline-flex items-center justify-center rounded-full flex-shrink-0">
                                            <img
                                                src={`${router.basePath}/assert/icons/direccion.svg`}
                                                width={60}
                                                height={60}
                                                
                                                alt="logo-linkedin"
                                                className="rounded-full mb-5 sm:mb-0"

                                            />
                                        </div>
                                        <h3 className="text-darkgray text-center sm:text-left title-font text-l lg:text-xl ml-2">
                                            {props.address} {props.number} - {props.locality} - {props.province} - {props.country}
                                        </h3>
                                    </div>
                                </a>
                                {/* WHATSAPP */}
                                <a href={`https://api.whatsapp.com/send?phone=${props.phone}`} target="_blank" rel="noopener noreferrer">
                                    <div className="flex flex-col mb-10 sm:flex-row items-center">
                                        <div className="w-11 h-11 inline-flex items-center justify-center rounded-full flex-shrink-0">
                                            <img
                                                src={`${router.basePath}/assert/icons/whatsapp-color.png`}
                                                width={60}
                                                height={60}
                                                
                                                alt="logo-linkedin"
                                                className="rounded-full mb-5 sm:mb-0"

                                            />
                                        </div>
                                        <h3 className="text-darkgray title-font text-l lg:text-xl sm:ml-2">{props.phone}</h3>
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