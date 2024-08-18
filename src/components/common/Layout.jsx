import React from "react";
import PropTypes from "prop-types";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main-content">{children}</main>
      <Footer />
    </>
  );
};

// Optional: Adding PropTypes for validation
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
