
import React from "react";
import FooterNavWhite from "../footer/footerwhite";
import HeaderNavSalmon from "../header/headersalmon";

export default function LayoutSalmon(props: any) {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderNavSalmon />
      <main className="flex-1 mt-20 md:mt-10">
        {props.children}
      </main>
      <FooterNavWhite />
    </div>
  );
}