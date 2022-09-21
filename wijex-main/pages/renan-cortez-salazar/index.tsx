import React from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';
import { Gallery } from '../../components/template0/gallery/gallery';
import FormContactTwo from '../../components/template0/form/formtwo';
import LayoutBlue from '../../components/template0/layout/layoutblue';
import { PlinthBlue } from '../../components/template0/plinth/plinthtblue';
import { ContactProfile } from '../../components/template0/contact/contact';
import { SocialMedia } from '../../components/template0/socialmedia/socialmedia';
import { PlinthTitleBlue } from '../../components/template0/plinthtitle/plinthtitleblue';
import { PlinthTitleTwoBlue } from '../../components/template0/plinthtitletwo/plinthtitletwoblue';
import { CONTACT_DATA, CURRICULUM_DATA } from '../../profile-data/renan-cortez-salazar/config-data'; //CAMBIAR DIRECCION
import { IMAGE_DATA, PERSONAL_DATA, SOCIALNET_DATA } from '../../profile-data/renan-cortez-salazar/config-data'; //CAMBIAR DIRECCION
import { CoverPageText } from '../../components/template0/coverpage/coverpagetext';
import { InformationProfileEdit } from '../../components/template0/information/informationedit';


const ProfilePage: NextPage = () => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0 ,width=device-width" />
        <meta key="description" name="description" content="nombre de la app" />
        <title>{PERSONAL_DATA.NAME}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutBlue
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
        url={'renan-cortez-salazar'}
      >
        <CoverPageText
          name={PERSONAL_DATA.NAME}
          description={PERSONAL_DATA.DESCRIPTION}
          colorName={PERSONAL_DATA.COLORNAME}
          colorDescription={PERSONAL_DATA.COLORDESCRIPTION}
          coverPageUrl={IMAGE_DATA.BANNER}
        />
        <PlinthBlue />
        <InformationProfileEdit
          name={PERSONAL_DATA.NAME}
          description={PERSONAL_DATA.HISTORY}
          pdf={CURRICULUM_DATA.CURRICULUM_VITAE}
          imgInformation={IMAGE_DATA.INFORMATION}
          btnName={'VER CATÁLOGO PRODUCTOS WIJEX'}
        />
        
        <PlinthTitleBlue
          title={'Galería'}
        />
        <Gallery
          gallery_1={IMAGE_DATA.GALLERY_1}
          gallery_2={IMAGE_DATA.GALLERY_2}
          gallery_3={IMAGE_DATA.GALLERY_3}
        />
        <PlinthTitleTwoBlue
          title={'Contacto'}
        />
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
          url={'renan-cortez-salazar'}
        />
        <PlinthTitleBlue
          title={'Solicítame más Información'}
        />
        <FormContactTwo
          name={PERSONAL_DATA.NAME}
          email={CONTACT_DATA.EMAIL}
        />
        <SocialMedia
          name={PERSONAL_DATA.NAME}
          linkedin={SOCIALNET_DATA.LINKEDIN}
          youtube={SOCIALNET_DATA.YOUTUBE}
          twitter={SOCIALNET_DATA.TWITTER}
          facebook={SOCIALNET_DATA.FACEBOOK}
          instagram={SOCIALNET_DATA.INSTAGRAM}
          tiktok={SOCIALNET_DATA.TIKTOK}
          wijex={SOCIALNET_DATA.WIJEX}
          telegram={SOCIALNET_DATA.TELEGRAM}
        />
      </LayoutBlue>
    </div>
  )
}

export default ProfilePage