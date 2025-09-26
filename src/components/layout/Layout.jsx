import React from "react";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
