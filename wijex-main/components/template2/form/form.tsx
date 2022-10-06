import React from "react";
import emailjs from "emailjs-com";
import { useRouter } from "next/router";

type FormContactProps = {
    name: string;
    email: string;
    background: string;
    phone: string;
    address: string;
    number: string;
    locality: string;
    province: string;
    country: string;
    avatar: string;
    url: string;
};

const FormContact = (props: FormContactProps) => {
    const router = useRouter();
    const [name, setName] = React.useState<string>(props.name);
    const [email, setEmail] = React.useState<string>(props.email);
    const [subject, setSubject] = React.useState<string>('');
    const [userName, setUserName] = React.useState<string>('');
    const [userEmail, setUserEmail] = React.useState<string>('');
    const [userPhone, setUserPhone] = React.useState<string>('');
    const [userMessage, setUserMessage] = React.useState<string>('');
    const [showModal, setShowModal] = React.useState<boolean>(false);

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
                'service_uaspm8b',
                'template_515111c',
                e.target,
                'WSCfrih77YZvBQ-QY').then(res => {
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
    return (
        <section id='contactprofile'>
            <div
                // style={{ backgroundImage: `url(${router.basePath + props.background})` }}
                className='bg-cover bg-center bg-no-repeat'
            >
                <div className="bg-t2primary pb-12 pt-12 bg-opacity-50 text-center sm:text-left">
                    <div className='lg:flex lg:flex-row'>
                        <div className='lg:w-1/2'>
                            <div className="sm:flex sm:flex-row pt-10 mx-0 justify-center ">
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
                            </div>
                            <div className="flex">
                                <div className="mx-auto ">
                                    <div className="flex flex-col self-center p-10">
                                        <div className="flex items-center justify-center lg:items-start lg:justify-center flex-col">
                                            <h1 className="text-center mb-3 text-2xl font-bold leading-none tracking-wide uppercase text-blackcolor title-font lg:text-3xl">
                                                {props.name}
                                            </h1>
                                        </div>
                                        {/* ICONS PART */}
                                        <div className="grid grid-cols-4 gap-4 mt-6 " style={{ justifyContent: 'center', alignContent: 'center' }}>
                                            <a href={`tel:${props.phone}`} target="_blank" rel="noopener noreferrer">
                                                <div className="flex items-center mb-3">
                                                    <div className="w-11 mx-auto h-11 inline-flex items-center justify-center rounded-full flex-shrink-0">
                                                        <img
                                                            src={`${router.basePath}/assert/icons/t2phone.svg`}
                                                            width={35}
                                                            height={35}
                                                            alt="logo-linkedin"
                                                            className="rounded-full"
                                                        />
                                                    </div>
                                                </div>
                                            </a>
                                            <a href={`mailto:${props.email}`} target="_blank" rel="noopener noreferrer">
                                                <div className="flex items-center mb-3" >
                                                    <div className="w-11 h-11 inline-flex items-center justify-center rounded-full flex-shrink-0">
                                                        <img
                                                            src={`${router.basePath}/assert/icons/t2email.svg`}
                                                            width={35}
                                                            height={35}
                                                            alt="logo-linkedin"
                                                            className="rounded-full"
                                                        />
                                                    </div>
                                                </div>
                                            </a>
                                            <a href={`/${props.url}/map`} target="_blank" rel="noopener noreferrer">
                                                <div className="flex items-center mb-3 cursor-pointer" onClick={() => onOpenModal()}>
                                                    <div className="w-11 h-11 inline-flex items-center justify-center rounded-full flex-shrink-0">
                                                        <img
                                                            src={`${router.basePath}/assert/icons/t2direction.svg`}
                                                            width={35}
                                                            height={35}
                                                            alt="logo-linkedin"
                                                            className="rounded-full"
                                                        />
                                                    </div>
                                                </div>
                                            </a>
                                            <a href={`https://api.whatsapp.com/send?phone=${props.phone}`} target="_blank" rel="noopener noreferrer">
                                                <div className="flex items-center mb-3">
                                                    <div className="w-11 h-11 inline-flex items-center justify-center rounded-full flex-shrink-0">
                                                        <img
                                                        className="rounded-full mx-auto"
                                                            src={`${router.basePath}/assert/icons/whatsapp-color.png`}
                                                            width={35}
                                                            height={35}
                                                            alt="logo-linkedin"
                                                        />
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='lg:w-1/2 lg:pt-5 lg:pr-20'>
                            <div className="lg:container px-10 py-6 mx-auto">
                                <div>
                                    <form onSubmit={sendEmail} className='z-20 opacity-100'>
                                        <div className="grid grid-cols-1 gap-8 mt-4 sm:grid-cols-2 md:grid-cols-2">
                                           
                                            <div>
                                                <label htmlFor="userName" className=" text-t2labelcolor text-center sm:text-left sm:pl-4">Nombre</label>
                                                <input
                                                    placeholder="ej: Estela Martinez"
                                                    id="username"
                                                    name='userName'
                                                    type="text"
                                                    value={userName}
                                                    onChange={(value: any) => setUserName(value.currentTarget.value)}
                                                    className="text-center sm:text-left block w-full px-2 py-2 mt-2 bg-t2inputcolor  rounded-md focus:border-blue-800 focus:outline-none focus:ring " />
                                            </div>
                                            <div>
                                                <label className="text-center sm:text-left sm:pl-4  text-t2labelcolor dark:text-secondary">Asunto</label>
                                                <input
                                                    placeholder="ej: Presupuesto"
                                                    id="subject"
                                                    name="subject"
                                                    type="text"
                                                    value={subject}
                                                    onChange={(value: any) => setSubject(value.currentTarget.value)}
                                                    className="block w-full px-4 py-2 mt-2 text-t2labelcolor bg-t2inputcolor border border-t2inputcolor rounded-md dark:bg-t2inputcolor dark:text-primary dark:border-t2inputcolor focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                            </div>
                                            <div>
                                                <label className="sm:pl-4 text-t2labelcolor dark:text-secondary" >E-mail</label>
                                                <input
                                                    placeholder="ej: estelamartinez@gmail.com"
                                                    id="userEmail"
                                                    name="userEmail"
                                                    type="email"
                                                    value={userEmail}
                                                    onChange={(value: any) => setUserEmail(value.currentTarget.value)}
                                                    className="block w-full px-4 py-2 mt-2 text-t2labelcolor bg-t2inputcolor border border-t2inputcolor rounded-md dark:bg-t2inputcolor dark:text-primary dark:border-t2inputcolor focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                            </div>
                                            <div>
                                                <label className="sm:pl-4 text-t2labelcolor dark:text-secondary">Teléfono</label>
                                                <input
                                                    placeholder="ej: +5896548575"
                                                    id="userPhone"
                                                    name="userPhone"
                                                    type="text"
                                                    value={userPhone}
                                                    onChange={(value: any) => setUserPhone(value.currentTarget.value)}
                                                    className="block w-full px-4 py-2 mt-2 text-primary bg-t2inputcolor border border-t2inputcolor rounded-md dark:bg-t2inputcolor dark:text-primary dark:border-t2inputcolor focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 gap-8 mt-4">
                                            <div className="relative mb-4">
                                                <label className="sm:pl-4 text-t2labelcolor dark:text-secondary">Dejá tu consulta</label>
                                                <textarea
                                                    placeholder="Escribe tu mensaje..."
                                                    id="userMessage"
                                                    name="userMessage"
                                                    value={userMessage}
                                                    onChange={(value: any) => setUserMessage(value.currentTarget.value)}
                                                    className="block w-full px-4 py-2 mt-2 text-primary bg-t2inputcolor border border-t2inputcolor rounded-md dark:bg-t2inputcolor dark:text-primary dark:border-t2inputcolor focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring duration-200 ease-in-out"></textarea>
                                            </div>
                                        </div>
                                        <div className="flex justify-center lg:justify-start mt-6">
                                            <button
                                                type='submit'
                                                className="px-8 py-3 pt-4 leading-5 transition-colors duration-200 transform bg-t2secondary rounded-md hover:bg-t2secondaryfocus:outline-none focus:bg-t2secondary shadow-lg">
                                                <p className="mx-auto text-base font-semibold leading-none tracking-tighter text-t2whitecolor title-font">
                                                    ENVIAR
                                                </p>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default FormContact;