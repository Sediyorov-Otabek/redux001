import Hero from "@/components/hero/Hero";

import Header from "@/components/header/Header";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "@/components/footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
