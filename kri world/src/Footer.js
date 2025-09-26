import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4 text-center text-sm">
      © {new Date().getFullYear()} Global Cargo Express. All rights reserved.
    </footer>
  );
};

export default Footer;

