import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import React,{useState,useEffect} from 'react';
import EventWork from "../EventWork/EventWork";
import styles from "./layout.module.css"
function Layout({ children }) {
  
  return (
    <div >
      <Navbar />
      <div>{children}</div>
      {/* <EventWork/> */}
      <Footer />
    </div>
  );
}

export default Layout;
