import React, { Component } from "react";

const NaveBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar <span className="badge bg-secondary">{totalCounters}</span>
      </a>
    </nav>
  );
};

export default NaveBar;
