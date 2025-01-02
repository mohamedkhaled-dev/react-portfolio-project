// Layout.jsx
import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className=" d-flex flex-column justify-content-center align-items-center">
          <Outlet />
      </main>
      <Footer />
    </>
  );
}
