import React from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import LandingCss from '../styles/landing.module.css'


const Home: NextPage = () => {
  const router = useRouter();
  const [active, setActive] = React.useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  const onOpenMailito = () => {
    window.open('mailto:webcard@wijex.com', 'Mailer');
    return false;
  }
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0 ,width=device-width" />
        <meta key="description" name="description" content="nombre de la app" />
        <title>WIJEX Webcards</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
        <link href='https://fonts.googleapis.com/css?family=Dosis:400,100,300,700,800' rel='stylesheet' type='text/css' />

      </Head>
      <div className={LandingCss.container}>
        <header>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <div className={LandingCss.headerLeft}>
              <a href="https://wijex.com" target='_blank'>
                <span className={LandingCss.headerTitle}>
                  WIJEX
                </span>
              </a>
            </div>
            <div className={LandingCss.headerRight}>
              <a
                href="https://clear-incentive-329822.web.app/formulario/" target="_blank" rel="noreferrer" 
                className={LandingCss.headerLinkG}
              >
                Formulario
              </a>
              <div className={LandingCss.separate}></div>
              <span
                className={LandingCss.headerLinkG}
                onClick={() => onOpenMailito()}
              >
                Modificaciones
              </span>
            </div>
            <div className={LandingCss.headerRightMobile}>
              <button onClick={handleClick}>
                <img
                  src={`${router.basePath}/assert/icons/btn-menu.png`}
                  height={16}
                  width={20}
                  alt="logo-wijex"
                />
              </button>

            </div>
          </div>
          <div className={LandingCss.linkContainMobile} >
            <div className={`${active ? 'hidden' : ''} flex flex-col`}>
              <a
                href="https://clear-incentive-329822.web.app/formulario/" target="_blank" rel="noreferrer" 
                className={LandingCss.headerLinkB}
              >
                Formulario
              </a>
              <span
                onClick={() => onOpenMailito()}
                className={LandingCss.headerLinkG}
              >
                Modificaciones
              </span>
              <a
                href="https://www.facebook.com/wijexcompany" target="_blank" rel="noreferrer" 
                className={LandingCss.headerLinkB}
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/wijexcompany/" target="_blank" rel="noreferrer" 
                className={LandingCss.headerLinkB}
              >
                Instagram
              </a>
              <a
                href="https://www.comunidad.wijex.com/wijex" target="_blank" rel="noreferrer" 
                className={LandingCss.headerLinkB}
              >
                Wijex
              </a>
            </div>
          </div>

        </header>
        <div className={LandingCss.body} style={{ marginTop: active ? 40.5 : 0 }}>
          <div className={LandingCss.bodyLeft}>
            <div>
              <div className={LandingCss.blackLine}></div>
              <div className={LandingCss.marginSubtitle}>
                <span className={LandingCss.subtitle}>
                  PROXIMAMENTE
                </span>
              </div>
              <div className={LandingCss.marginTitle}>
                <span className={LandingCss.title}>
                  WIJEX WEBCARD
                </span>
              </div>
            </div>
            <div className={LandingCss.marginSocialMedia}>
              <a
                href="https://www.facebook.com/wijexcompany" target="_blank" rel="noreferrer" 
                className={LandingCss.socialMediaB}
              >
                Facebook
              </a>
              <span className={LandingCss.socialMediaS}>
                /
              </span>
              <a
                href="https://www.instagram.com/wijexcompany/" target="_blank" rel="noreferrer" 
                className={LandingCss.socialMediaB}
              >
                Instagram
              </a>
              <span className={LandingCss.socialMediaS}>
                /
              </span>
              <a
                href="https://www.comunidad.wijex.com/wijex" target="_blank" rel="noreferrer" 
                className={LandingCss.socialMediaB}
              >
                Wijex
              </a>
            </div>
          </div>
          <div className={LandingCss.bodyRight}>
            <img
              src={`${router.basePath}/assert/images/img-webcard.png`}
              alt="logo-wijex"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
