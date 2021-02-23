import { InputText } from "primereact/inputtext";
import { Menubar } from "primereact/menubar";
import React, { createRef, Fragment, useRef } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import Logo from "../../../assets/img/logo.png";
import "./HeaderComponent.scss";

const HeaderComponent = (props: any) => {
  const { history } = props;

  const items = [
    {
      label: "Home",
      url: "/",
    },
  ];

  const start: any = (
    <NavLink to="/">
      <img alt="logo" height="60" className="p-mr-4 ml-4" />
    </NavLink>
  );

  return (
    <div className="header">
      <div className="card">
        <Menubar model={items} start={start} />
      </div>
    </div>
  );
};

export default withRouter(HeaderComponent);
