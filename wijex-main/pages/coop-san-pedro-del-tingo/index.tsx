import React from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';

/* import template elements */
import Layout from '../../components/template1/layout/layout';
import { CoverPageBlue } from '../../components/template1/coverpage/coverpageblue';
import { InformationProfileBlue } from '../../components/template1/information/informationblue';
import { InformationProfile } from '../../components/template1/information/information';
import { Gallery } from '../../components/template1/gallery/gallery';
import { ContactProfile } from '../../components/template1/contact/contact';
import FormContact from '../../components/template1/form/form';
import FormContactTwo from '../../components/template1/form/formtwo';
import { SocialMedia } from '../../components/template1/socialmedia/socialmedia';

import { PlinthBlue } from '../../components/template1/plinth/plinthtblue';
import { Plinth } from '../../components/template1/plinth/plinth';
/* import data */
import { CONTACT_DATA, CURRICULUM_DATA } from '../../profile-data/coop-san-pedro-del-tingo/config-data'; //CAMBIAR DIRECCION
import { IMAGE_DATA, PERSONAL_DATA, SOCIALNET_DATA } from '../../profile-data/coop-san-pedro-del-tingo/config-data'; //CAMBIAR DIRECCION

/*
  LAYOUT (nav-bar + contenedor + footer)
  contenedor {

    1 COVERPAGE -
    2 INFORMATION informacion
    3 GALLERY galeria
    4 CONTACT contacto
    5 FORM formulario
    6 SOCIALMEDIA redes sociales
  }






*/

const ProfilePage: NextPage = () => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0 ,width=device-width" />
        <meta key="description" name="description" content="nombre de la app" />
        <title>{PERSONAL_DATA.NAME}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout
        name={PERSONAL_DATA.NAME}
        description={PERSONAL_DATA.DESCRIPTION}
        email={CONTACT_DATA.EMAIL}
        phone={CONTACT_DATA.PHONE}
        address={CONTACT_DATA.ADDRESS}
        number={CONTACT_DATA.NUMBER}
        locality={CONTACT_DATA.LOCALITY}
        province={CONTACT_DATA.PROVINCE}
        country={CONTACT_DATA.COUNTRY}
        avatar={IMAGE_DATA.AVATAR}
        url={'coop-san-pedro-del-tingo'}
      >

      <CoverPageBlue
        name = {PERSONAL_DATA.NAME}
        colorName = {PERSONAL_DATA.COLORNAME}
        description = {PERSONAL_DATA.DESCRIPTION}
        colorDescription = {PERSONAL_DATA.COLORDESCRIPTION}
        coverPageUrl={IMAGE_DATA.BACKGROUND}
      />

      <Plinth />

      <InformationProfile
        name = {PERSONAL_DATA.NAME}
        description = {PERSONAL_DATA.HISTORY}
        pdf={CURRICULUM_DATA.CURRICULUM_VITAE}
        imgInformation={IMAGE_DATA.INFORMATION}
        btnName={'Ver servicio'}

      />

      <Plinth />

      <Gallery 
          gallery_1={IMAGE_DATA.GALLERY_1}
          gallery_2={IMAGE_DATA.GALLERY_2}
          gallery_3={IMAGE_DATA.GALLERY_3}

       />

      <Plinth />


      <ContactProfile
        name={PERSONAL_DATA.NAME}
        email={CONTACT_DATA.EMAIL}
        phone={CONTACT_DATA.PHONE}
        address={CONTACT_DATA.ADDRESS}
        number={CONTACT_DATA.NUMBER}
        locality={CONTACT_DATA.LOCALITY}
        province={CONTACT_DATA.PROVINCE}
        country={CONTACT_DATA.COUNTRY}
        avatar={IMAGE_DATA.AVATAR}
        url={'coop-san-pedro-del-tingo'}
       />

      <Plinth />

      <FormContactTwo 
        name={PERSONAL_DATA.NAME}
        email={CONTACT_DATA.EMAIL}
      />

      <Plinth />
            
      <SocialMedia 
        name= {PERSONAL_DATA.NAME}
        linkedin= {SOCIALNET_DATA.LINKEDIN}
        youtube={SOCIALNET_DATA.YOUTUBE}
        twitter={SOCIALNET_DATA.TWITTER}
        facebook={SOCIALNET_DATA.FACEBOOK}
        instagram={SOCIALNET_DATA.INSTAGRAM}
        tiktok={SOCIALNET_DATA.TIKTOK}
        telegram={SOCIALNET_DATA.TELEGRAM}
        wijex={SOCIALNET_DATA.WIJEX}
      />


        

      </Layout>
    </div>
  )
}

export default ProfilePage