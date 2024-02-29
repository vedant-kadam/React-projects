import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../componets/MainNav";
import cssClasses from "./Root.module.css";

const Root = () => {
  return (
    <>
      <MainNavigation />
      <main className={cssClasses.content}>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
