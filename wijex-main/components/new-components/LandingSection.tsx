// NEW FIRST PART - UNDER THE HEADER


import styles from './styles.module.scss'
// H1 + DESCRIPTION

import { useRouter } from 'next/router';

type Props = {
  name: string;
  colorName: string;
  description: string;
  colorDescription: string;
  coverPageUrl: string;
};

const NewLandingSection = (props: Props) => {
  const router = useRouter();
  return (

    <section className={` ${styles.section}`} >
        <div className="text-conteiner">
            <h1>H1 PAPA</h1>
        </div>
        <div className='image-conteiner'>
            <img className='image' src={`${router.basePath + props.coverPageUrl}`} />
        </div>
        <h2></h2>
    
    </section>
  );
}
export { NewLandingSection };


/*
img = {router.basePath + props.coverPageUrl}


*/