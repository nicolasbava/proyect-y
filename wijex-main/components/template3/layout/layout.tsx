import React from "react";
import FooterNav from "../footer/footer";
import HeaderNavVertical from "../headervertical/header";

import styles from '../template3.module.css'


type Props = {
  name: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  number: string;
  locality: string;
  province: string;
  country: string;
  avatar: string;
  url: string;
  children: any;
};


export default function Layout(props: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="lg:flex lg:flex-row flex-1">
        <div className="lg:flex lg:flex-col lg:mr-1 lg:h-screen shadow-lg">
          <HeaderNavVertical
            name={props.name}
            description={props.description}
            email={props.email}
            phone={props.phone}
            address={props.address + ' ' + props.number + ', ' + props.locality}
            avatar={props.avatar}
            url={props.url}
          />
        </div>
        <div className="lg:flex lg:flex-col">
          <main className={ `flex-1 ${styles.customLayout}` }>
            {props.children}
          </main>
        </div>
      </div>
      <FooterNav />
    </div>
  );
}