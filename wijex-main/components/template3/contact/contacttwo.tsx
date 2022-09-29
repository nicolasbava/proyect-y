import { useRouter } from 'next/router';
import emailjs from "emailjs-com";
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
    information: string;
    pdf: string;
    imgInformation: string;
};


const ContactProfileTwo = (props: ContactProps) => {
    const router = useRouter();
    const [showModal, setShowModal] = React.useState<boolean>(false);
    const [name, setName] = React.useState<string>(props.name);
    const [email, setEmail] = React.useState<string>(props.email);
    const [subject, setSubject] = React.useState<string>('');
    const [userName, setUserName] = React.useState<string>('');
    const [userEmail, setUserEmail] = React.useState<string>('');
    const [userPhone, setUserPhone] = React.useState<string>('');
    const [userMessage, setUserMessage] = React.useState<string>('');

    const sendEmail = (e: any) => {
        e.preventDefault();
        let template_params: any = {
            'name': name,
            'email': email,
            'userName': userName,
            'subject': subject,
            'userEmail': userEmail,
            'userPhone': userPhone,
            'userMessage': userMessage
        }
        console.log(template_params);
        if (isFormValid()) {
            emailjs.sendForm(
                'service_jdjxzak',
                'template_pco13tx',
                e.target,
                'user_F01lHHR9vneIUbIRTcwx6').then(res => {
                    console.log(res)
                }).catch(err => {
                    console.log(err)
                });
            restInput();
        } else {
            console.log('Datos Incorrectos')
        }

    }
    const isFormValid = () => {
        return (
            userName !== '' &&
            subject !== '' &&
            userEmail !== '' &&
            userPhone !== '' &&
            userMessage !== ''
        )
    }

    const restInput = () => {
        setUserName('');
        setUserEmail('');
        setSubject('');
        setUserPhone('');
        setUserMessage('');
    }

    const onOpenModal = () => {
        //setShowModal(true);
    }

    const onCloseModal = () => {
        setShowModal(false)
    }

    const onResumeClick = () => {
        const PDF = `${router.basePath + props.pdf}`
        window.open(PDF);
    }

    return (
        <section id='informationprofile'>
            {/* CONTACT PROFILE TWO  */}
            <div className="pr-0 lg:pr-16 lg:flex lg:flex-row-reverse lg:items-center bg-t4background">
                {/* CONTAINER TEXT PART - P BUTTON ICONS */}
                <div className="pr-0 lg:pl-20 py-20 justify-start items-center">
                    <div className=' flex flex-col justify-center item-center'>
                        <div className="sm:max-w-6xl ">
                            {/* HISTORY INFORMATION */}
                            <p className=" text-t4primary title-font lg:text-xl">
                                {props.information}
                            </p>
                        </div>
                    </div>
                    {/* CONTACT */}
                    <div className='mr-6 flex flex-col justify-center lg:pb-20 lg:w-1/2 '>
                        <div className="pt-8 ">
                            <button onClick={() => onResumeClick()}
                                className="w-full px-8 py-8 leading-5 transition-colors duration-200 transform bg-t4secondary rounded-md hover:bg-t4secondary focus:outline-none focus:bg-t4secondary  shadow-lg">
                                <h2 className="mx-auto justify text-base font-semibold leading-none tracking-wide text-t4primary title-font">
                                    VER CURRICULUM
                                </h2>
                            </button>
                        </div>

                        {/* CONTACT ICONS */}
                        <div className="px-6 pt-4 mx-auto">
                            
                                <div className="grid grid-cols-4 gap-4 mt-4">
                                    <a href={`tel:${props.phone}`} target="_blank" rel="noopener noreferrer">
                                        <div className="flex items-center mb-3">
                                            <div className="inline-flex items-center justify-center rounded-full flex-shrink-0">
                                                <img
                                                    src={`${router.basePath}/assert/icons/phone.svg`}
                                                    alt="logo-linkedin"
                                                    className="h-11 w-11 rounded-full"
                                                />
                                            </div>
                                        </div>
                                    </a>
                                    <a href={`mailto:${props.email}`} target="_blank" rel="noopener noreferrer">
                                        <div className="flex items-center mb-3" >
                                            <div className="inline-flex items-center justify-center rounded-full flex-shrink-0">
                                                <img
                                                    src={`${router.basePath}/assert/icons/email.svg`}
                                                    alt="logo-linkedin"
                                                    className="h-11 w-11 rounded-full"
                                                />
                                            </div>
                                        </div>
                                    </a>
                                    <a href={`/${props.url}/map`} target="_blank" rel="noopener noreferrer">
                                        <div className="flex items-center mb-3 cursor-pointer" onClick={() => onOpenModal()}>
                                            <div className="inline-flex items-center justify-center rounded-full flex-shrink-0">
                                                <img
                                                    src={`${router.basePath}/assert/icons/direccion.svg`}
                                                    alt="logo-linkedin"
                                                    className="h-11 w-11 rounded-full"
                                                />
                                            </div>
                                        </div>
                                    </a>
                                    <a href={`https://api.whatsapp.com/send?phone=${props.phone}`} target="_blank" rel="noopener noreferrer">
                                        <div className="flex items-center mb-3">
                                            <div className="inline-flex items-center justify-center rounded-full flex-shrink-0">
                                                <img
                                                    src={`${router.basePath}/assert/icons/whatsapp-color.png`}
                                                    alt="logo-linkedin"
                                                    className="h-11 w-11 rounded-full"
                                                />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            
                        </div>
                        
                    </div>

                </div>
                {/* IMAGE CONTAINER */}
                <div className='mt-0 pb-10 w-1/2 lg:w-full '>
                    <img
                        src={`${router.basePath + props.imgInformation}`}
                        alt="CoverPage/png"
                        className='pb-10 transform translate-y-0'
                    />
                </div>
            </div>
        </section >
    );
}
export { ContactProfileTwo };