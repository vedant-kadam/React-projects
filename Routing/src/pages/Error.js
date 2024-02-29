import React from "react";
import MainNavigation from "../componets/MainNav";

const Error = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An Error Occured !</h1>
        <p>Could not found the page</p>
      </main>
    </>
  );
};

export default Error;
