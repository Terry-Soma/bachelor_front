import React from "react";
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";

import css from './style.module.css';
export default function MainLayout(props) {
  return (
    <>
      <div className={css.headin}></div>
      <MainNavbar />
      <main>
        {props.children}
      </main>

      <Footer />
    </>
  )
}