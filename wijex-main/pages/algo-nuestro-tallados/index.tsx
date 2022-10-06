import React from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';
import Layout from '../../components/template4/layout/layout';
import FormContact from '../../components/template4/form/form';
import { Gallery } from '../../components/template4/gallery/gallery';
import { CoverPage } from '../../components/template4/coverpage/coverpage';
import { Plinth } from '../../components/template4/plinth/plinth';
import { PlinthTitle } from '../../components/template4/plinthtitle/plinthtitle';
import { InformationProfileTextBtn } from '../../components/template4/information/informationtextbtn';

// import data
import { CONTACT_DATA, CURRICULUM_DATA } from '../../profile-data/algo-nuestro-tallados/config-data';
import { IMAGE_DATA, PERSONAL_DATA, SOCIALNET_DATA } from '../../profile-data/algo-nuestro-tallados/config-data';


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0 ,width=device-width" />
        <meta key="description" name="description" content="nombre de la app" />
        <title>{PERSONAL_DATA.NAME}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css"
          rel="stylesheet"
        />
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
        url={'algo-nuestro-tallados'}
      >
        <CoverPage
          name={PERSONAL_DATA.NAME}
          description={PERSONAL_DATA.DESCRIPTION}
          colorName={PERSONAL_DATA.COLORNAME}
          colorDescription={PERSONAL_DATA.COLORDESCRIPTION}
          coverPageUrl={IMAGE_DATA.BANNER}
          information={PERSONAL_DATA.HISTORY}
          pdf={CURRICULUM_DATA.CURRICULUM_VITAE}
          imgInformation={IMAGE_DATA.INFORMATION}
          background={IMAGE_DATA.BACKGROUND}
        />
        <Plinth />
        <InformationProfileTextBtn
          name={PERSONAL_DATA.NAME}
          information={PERSONAL_DATA.HISTORY}
          pdf={CURRICULUM_DATA.CURRICULUM_VITAE}
          imgInformation={IMAGE_DATA.INFORMATION}
          linkedin={SOCIALNET_DATA.LINKEDIN}
          youtube={SOCIALNET_DATA.YOUTUBE}
          twitter={SOCIALNET_DATA.TWITTER}
          facebook={SOCIALNET_DATA.FACEBOOK}
          instagram={SOCIALNET_DATA.INSTAGRAM}
          tiktok={SOCIALNET_DATA.TIKTOK}
          telegram={SOCIALNET_DATA.TELEGRAM}
          wijex={SOCIALNET_DATA.WIJEX}
          textBtn={'Hoja de vida'}
        />
        <PlinthTitle
          title={'Galería'}
        />
        <Gallery
          gallery_1={IMAGE_DATA.GALLERY_1}
          gallery_2={IMAGE_DATA.GALLERY_2}
          gallery_3={IMAGE_DATA.GALLERY_3}
        />

        <PlinthTitle
          title={'Quiero más información'}
        />
        <FormContact
          name={PERSONAL_DATA.NAME}
          email={CONTACT_DATA.EMAIL}
          background={IMAGE_DATA.BACKGROUND}
          phone={CONTACT_DATA.PHONE}
          address={CONTACT_DATA.ADDRESS}
          number={CONTACT_DATA.NUMBER}
          locality={CONTACT_DATA.LOCALITY}
          province={CONTACT_DATA.PROVINCE}
          country={CONTACT_DATA.COUNTRY}
          avatar={IMAGE_DATA.AVATAR}
          url={'algo-nuestro-tallados'}
        />

      </Layout>
    </div>
  )
}

export default Home