
import HeaderNav from '../header/headerwhite';
import FooterNavWhite from "../footer/footerwhite";
import React from 'react';

export default function LayoutWhite(props: any) {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderNav />
      <main className="flex-1">
        {props.children}
      </main>
      <FooterNavWhite />
    </div>
  );
}